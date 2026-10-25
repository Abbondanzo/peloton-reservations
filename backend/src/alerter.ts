import * as Sentry from "@sentry/node";
import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import {
  Alert,
  AlertPreferences,
  type BookableStatus,
  type ChangeType,
  type ClassSnapshot,
  CLASS_HISTORY_RETENTION_MS,
  PATHS,
  RawClass,
  type SelloutRecord,
  STUDIOS,
  buildSnapshot,
  getBookableStatus,
  getChangeType,
  getWaitlistChangeType,
  matchesAlert,
} from "shared";
import { logger } from "./logger";
import { DiffDelegate } from "./manager";
import { Metrics } from "./metrics";

type StudioGroup = { [key: string]: Alert[] };

/** A class as observed at one point in time. */
interface ClassObservation {
  at: number;
  status: BookableStatus;
  waitingCount: number;
}

// Trailing slash stripped so we can append "/?classUrl=..." cleanly.
const FRONTEND_URL = (process.env.FRONTEND_URL ?? "").replace(/\/$/, "");

function buildNotificationLink(classUrl: string | null | undefined): string {
  const base = FRONTEND_URL || "/";
  if (!classUrl) return base;
  return `${FRONTEND_URL}/?classUrl=${encodeURIComponent(classUrl)}`;
}

function buildWaitlistAlertLink(classData: RawClass, studioId: string): string {
  const params = new URLSearchParams({
    classId: String(classData.id),
    studioId,
    startsAt: classData.starts_at,
    waitingCount: String(classData.waiting_count),
  });
  return `${FRONTEND_URL}/#/waitlist-alert?${params}`;
}

/** How often to flush the pending-notification queue. */
const PENDING_CHECK_INTERVAL_MS = 30 * 1000;
/** How often to clean up old class history snapshots. */
const HISTORY_CLEANUP_INTERVAL_MS = 60 * 60 * 1000;
/** How many recent classes' sellout-speed records to retain per instructor. */
const MAX_SELLOUT_RECORDS_PER_INSTRUCTOR = 50;

interface PendingNotification {
  userId: string;
  studioId: string;
  classData: RawClass;
  changeType: ChangeType;
  /** Unix ms at which this notification should be sent. */
  sendAt: number;
}

export class Alerter implements DiffDelegate {
  private readonly alertGroups: { [key: string]: StudioGroup };
  private alertPreferences: { [key: string]: AlertPreferences };

  /** key: `${userId}:${classId}:${changeType}` — last time this event was sent */
  private readonly lastAlerted: { [key: string]: number };

  /** key: userId — last time any notification was sent to this user (for cooldown) */
  private readonly lastNotifiedAt: { [key: string]: number };

  private messagingTokens: { [userId: string]: string[] };

  /** key: `${userId}:${classId}:${changeType}` */
  private readonly pendingNotifications: Map<string, PendingNotification>;

  /** key: `${studioId}:${classId}` — dedupes waitlist-fill writes */
  private readonly recordedWaitlistFills: Set<string>;

  constructor() {
    this.alertGroups = {};
    this.alertPreferences = {};
    this.lastAlerted = {};
    this.lastNotifiedAt = {};
    this.messagingTokens = {};
    this.pendingNotifications = new Map();
    this.recordedWaitlistFills = new Set();
  }

  async initialize() {
    admin.initializeApp({
      credential: admin.credential.cert(this.getServiceAccount()),
      databaseURL: "https://peloton-alerts-default-rtdb.firebaseio.com/",
      databaseAuthVariableOverride: {
        uid: "backend-service-worker",
      },
    });
    const db = admin.database();
    db.ref("/alerts").on("value", (snapshot) => {
      this.handleAlerts(snapshot.val());
    });
    db.ref("/alertPreferences").on("value", (snapshot) => {
      this.handleAlertPreferences(snapshot.val());
    });
    db.ref("/messagingTokens").on("value", (snapshot) => {
      this.handleMessagingTokens(snapshot.val());
    });

    setInterval(
      () => this.processPendingNotifications(),
      PENDING_CHECK_INTERVAL_MS
    );
    setInterval(() => this.cleanupOldSnapshots(), HISTORY_CLEANUP_INTERVAL_MS);
  }

  private getServiceAccount(): admin.ServiceAccount {
    // Read firebase.json off disk
    const serviceAccount = JSON.parse(
      fs.readFileSync(path.join(__dirname, "..", "firebase.json"), "utf8")
    ) as admin.ServiceAccount;
    return serviceAccount;
  }

  // ---------------------------------------------------------------------------
  // DiffDelegate
  // ---------------------------------------------------------------------------

  handleAddition(studioId: string, classes: RawClass[]): void {
    for (const rawClass of classes) {
      this.writeSnapshot(studioId, rawClass);
      if (!this.alertGroups[studioId]) continue;
      for (const [userId, alerts] of Object.entries(
        this.alertGroups[studioId]
      )) {
        if (alerts.some((alert) => matchesAlert(rawClass, alert))) {
          this.enqueueNotification(userId, studioId, rawClass, "added");
        }
      }
    }
  }

  handleChange(
    studioId: string,
    classes: { new: RawClass; old: RawClass }[]
  ): void {
    for (const entry of classes) {
      const oldStatus = getBookableStatus(entry.old);
      const newStatus = getBookableStatus(entry.new);
      if (oldStatus !== newStatus) {
        const now = Date.now();
        logger.log(
          `Class ${entry.new.id} (${studioId}) ${oldStatus} -> ${newStatus}`
        );
        this.writeSnapshot(studioId, entry.new, now);
        // Measured from the class's whole timeline rather than this one
        // transition, so a waitlist that fills between two polls is still
        // captured.
        if (newStatus === "full") {
          this.recordWaitlistFill(studioId, entry.new, {
            at: now,
            status: newStatus,
            waitingCount: entry.new.waiting_count,
          });
        }
      }
      if (!this.alertGroups[studioId]) continue;
      for (const [userId, alerts] of Object.entries(
        this.alertGroups[studioId]
      )) {
        for (const alert of alerts) {
          const changeType = getChangeType(alert, entry.old, entry.new);
          if (changeType) {
            this.enqueueNotification(userId, studioId, entry.new, changeType);
          }
          const waitlistChangeType = getWaitlistChangeType(
            alert,
            entry.old,
            entry.new
          );
          if (waitlistChangeType) {
            this.enqueueNotification(
              userId,
              studioId,
              entry.new,
              waitlistChangeType,
              String(entry.new.waiting_count)
            );
          }
        }
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Notification queue
  // ---------------------------------------------------------------------------

  private enqueueNotification(
    userId: string,
    studioId: string,
    classData: RawClass,
    changeType: ChangeType,
    extraKey?: string
  ) {
    if (this.alertPreferences[userId]?.pauseAll) {
      logger.log(
        `Suppressing ${changeType} for user ${userId}: all notifications paused`
      );
      return;
    }

    const debounceKey = extraKey
      ? `${userId}:${classData.id}:${changeType}:${extraKey}`
      : `${userId}:${classData.id}:${changeType}`;
    const now = Date.now();
    const delayMin = this.alertPreferences[userId]?.notificationDelayMin ?? 0;
    const delayMs = delayMin * 60 * 1000;

    // Skip if this exact event was already sent within the user's delay window
    if (
      this.lastAlerted[debounceKey] &&
      now - this.lastAlerted[debounceKey] < delayMs
    ) {
      logger.log(
        `Suppressing ${changeType} for user ${userId} on class ${classData.id}: ` +
          `same event sent ${Math.round((now - this.lastAlerted[debounceKey]) / 1000)}s ago (delay ${delayMin}m)`
      );
      return;
    }

    // Skip if already pending for this class+event
    if (this.pendingNotifications.has(debounceKey)) {
      logger.log(
        `Suppressing ${changeType} for user ${userId} on class ${classData.id}: already pending`
      );
      return;
    }

    const cooldownExpiry = (this.lastNotifiedAt[userId] ?? 0) + delayMs;
    const sendAt = Math.max(now, cooldownExpiry);

    logger.log(
      `Queuing ${changeType} notification for user ${userId} on class ${classData.id}` +
        (sendAt > now ? ` (delayed ${Math.round((sendAt - now) / 1000)}s)` : "")
    );

    this.pendingNotifications.set(debounceKey, {
      userId,
      studioId,
      classData,
      changeType,
      sendAt,
    });
  }

  private async processPendingNotifications() {
    const now = Date.now();
    for (const [key, pending] of this.pendingNotifications) {
      if (pending.sendAt > now) {
        continue;
      }
      this.pendingNotifications.delete(key);
      try {
        await this.sendNotification(pending);
        this.lastAlerted[key] = Date.now();
        this.lastNotifiedAt[pending.userId] = Date.now();
      } catch (err) {
        logger.error(`Failed to send notification for key ${key}:`, err);
        Sentry.captureException(err);
      }
    }
  }

  // ---------------------------------------------------------------------------
  // FCM delivery
  // ---------------------------------------------------------------------------

  private async sendNotification(pending: PendingNotification) {
    const tokens = this.messagingTokens[pending.userId];
    if (!tokens || tokens.length === 0) {
      logger.log(
        `No FCM tokens for user ${pending.userId}, skipping notification`
      );
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      const { title, body } = this.buildNotificationContent(pending);
      logger.log(
        `[dev] Would send to user ${pending.userId}: "${title}" — ${body}`
      );
      return;
    }

    const { title, body } = this.buildNotificationContent(pending);

    const isWaitlistChanged = pending.changeType === "waitlist_changed";
    const notificationLink = isWaitlistChanged
      ? buildWaitlistAlertLink(pending.classData, pending.studioId)
      : buildNotificationLink(pending.classData.customer_url);

    const message: admin.messaging.MulticastMessage = {
      tokens,
      notification: { title, body },
      data: {
        classId: String(pending.classData.id),
        studioId: pending.studioId,
        studioLocation: STUDIOS[pending.studioId]?.location ?? "",
        changeType: pending.changeType,
        classUrl: pending.classData.customer_url ?? "",
        startsAt: pending.classData.starts_at,
        waitingCount: String(pending.classData.waiting_count),
      },
      webpush: {
        notification: {
          title,
          body,
          icon: "/icons/icon-192x192.png",
          badge: "/icons/icon-96x96.png",
          requireInteraction: true,
        },
        fcmOptions: {
          link: notificationLink,
        },
      },
    };

    const response = await admin.messaging().sendEachForMulticast(message);
    logger.log(
      `FCM sent for user ${pending.userId}: ${response.successCount}/${tokens.length} delivered`
    );
    await Metrics.recordFcm(response.successCount, response.failureCount, 1);

    if (response.failureCount > 0) {
      const db = admin.database();
      response.responses.forEach((resp, idx) => {
        if (
          !resp.success &&
          (resp.error?.code === "messaging/registration-token-not-registered" ||
            resp.error?.code === "messaging/invalid-registration-token")
        ) {
          const staleToken = tokens[idx];
          logger.log(`Removing stale FCM token for user ${pending.userId}`);
          db.ref(PATHS.messagingToken(pending.userId, staleToken)).remove();
        }
      });
    }
  }

  private buildNotificationContent(pending: PendingNotification): {
    title: string;
    body: string;
  } {
    const { classData, changeType, studioId } = pending;
    const instructorName =
      classData.instructors[0]?.name ?? "Unknown instructor";
    const studio = STUDIOS[studioId];

    const startDate = new Date(classData.starts_at);
    const timeStr = startDate.toLocaleString("en-US", {
      timeZone: studio?.timezone ?? "UTC",
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });

    const className = classData.name ? `"${classData.name}" ` : "";

    switch (changeType) {
      case "added":
        return {
          title: "New class available!",
          body: `${instructorName} — ${className}${timeStr}`,
        };
      case "became_free":
        return {
          title: "Spot opened up!",
          body: `${instructorName} — ${className}${timeStr} is now bookable`,
        };
      case "waitlist_opened":
        return {
          title: "Waitlist available!",
          body: `${instructorName} — ${className}${timeStr} waitlist is open`,
        };
      case "waitlist_changed": {
        const count = classData.waiting_count;
        return {
          title: "Waitlist count changed",
          body: `${count} ${count === 1 ? "person" : "people"} on the waitlist — ${instructorName} — ${className}${timeStr}`,
        };
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Class history
  // ---------------------------------------------------------------------------

  private writeSnapshot(
    studioId: string,
    rawClass: RawClass,
    now = Date.now()
  ): void {
    const snapshot: ClassSnapshot = buildSnapshot(rawClass, now);
    const db = admin.database();
    db.ref(
      `${PATHS.classSnapshot(studioId, rawClass.id)}/${snapshot.snapshotAt}`
    )
      .set(snapshot)
      .catch((err) => {
        logger.error(`Failed to write snapshot for class ${rawClass.id}:`, err);
        Sentry.captureException(err);
      });
  }

  // ---------------------------------------------------------------------------
  // Instructor sellout-speed stats
  // ---------------------------------------------------------------------------

  /**
   * Reads a class's observed timeline: every snapshot we have for it, oldest
   * first, with the caller's current observation merged in. Snapshots are only
   * written when a class is added and when its status changes, so this is the
   * full record of the crossings we saw.
   */
  private async getClassTimeline(
    studioId: string,
    classId: number,
    current: ClassObservation
  ): Promise<ClassObservation[]> {
    const snap = await admin
      .database()
      .ref(PATHS.classSnapshot(studioId, classId))
      .once("value");
    const val = (snap.val() ?? {}) as Record<string, ClassSnapshot>;
    const timeline = [current];
    for (const [key, snapshot] of Object.entries(val)) {
      const at = Number(key);
      if (!Number.isFinite(at) || at >= current.at) continue;
      if (!snapshot || typeof snapshot !== "object") continue;
      if (typeof snapshot.waitingCount !== "number") continue;
      const status = snapshot.status;
      if (status !== "free" && status !== "waitlist" && status !== "full")
        continue;
      timeline.push({ at, status, waitingCount: snapshot.waitingCount });
    }
    return timeline.sort((a, b) => a.at - b.at);
  }

  /**
   * How long a class's waitlist took to fill, or null when that is not
   * measurable.
   *
   * Studio classes reach the schedule feed with their seats already gone, so
   * the time it took to sell them cannot be observed by polling — but a class
   * caught while its waitlist is still empty can be watched filling up from
   * the start. A class first seen with people already waiting was found
   * part-way through, and timing the remainder would understate it, so it is
   * left out rather than averaged in.
   */
  private deriveWaitlistFill(
    timeline: ClassObservation[]
  ): { addedAt: number; timeToFullMs: number } | null {
    const first = timeline[0];
    if (first.waitingCount !== 0) return null;
    const full = timeline.find((entry) => entry.status === "full");
    if (!full || full.at <= first.at) return null;
    return { addedAt: first.at, timeToFullMs: full.at - first.at };
  }

  private async recordWaitlistFill(
    studioId: string,
    rawClass: RawClass,
    current: ClassObservation
  ): Promise<void> {
    const dedupeKey = `${studioId}:${rawClass.id}`;
    if (this.recordedWaitlistFills.has(dedupeKey)) return;

    try {
      const db = admin.database();
      const timeline = await this.getClassTimeline(
        studioId,
        rawClass.id,
        current
      );
      const fill = this.deriveWaitlistFill(timeline);
      if (!fill) return;

      // Never replace a stored measurement: the in-memory dedupe set is lost on
      // restart, and a class whose waitlist drops a spot and fills again would
      // otherwise overwrite the original fill time with a much shorter one.
      const updates: Record<string, unknown> = {};
      for (const instructor of rawClass.instructors) {
        const instructorId = String(instructor.id);
        const path = PATHS.selloutRecord(instructorId, rawClass.id);
        const stored = (
          await db.ref(`${path}/timeToFullMs`).once("value")
        ).val() as unknown;
        if (typeof stored === "number" && stored > 0) continue;
        updates[`${path}/classId`] = String(rawClass.id);
        updates[`${path}/className`] = rawClass.name;
        updates[`${path}/instructorName`] = instructor.name;
        updates[`${path}/addedAt`] = fill.addedAt;
        updates[`${path}/timeToFullMs`] = fill.timeToFullMs;
      }

      if (Object.keys(updates).length > 0) {
        await db.ref().update(updates);
        await Promise.all(
          rawClass.instructors.map((instructor) =>
            this.trimSelloutStats(String(instructor.id), String(rawClass.id))
          )
        );
        logger.log(
          `Waitlist for class ${rawClass.id} filled in ${fill.timeToFullMs}ms`
        );
      }
      // Only dedupe once the write has landed, so a failed attempt is retried
      // the next time the class changes status.
      this.recordedWaitlistFills.add(dedupeKey);
    } catch (err) {
      logger.error(
        `Failed to record waitlist fill for class ${rawClass.id}:`,
        err
      );
      Sentry.captureException(err);
    }
  }

  /**
   * Caps an instructor at the most recent classes. `keepClassId` is the record
   * just written: it is exempt, since a class that has been on the schedule a
   * long time can be the oldest by `addedAt` the moment it sells out, and
   * trimming it would throw away the measurement we just took.
   */
  private async trimSelloutStats(
    instructorId: string,
    keepClassId?: string
  ): Promise<void> {
    const db = admin.database();
    const snap = await db.ref(PATHS.selloutStats(instructorId)).once("value");
    const records = snap.val() as Record<string, SelloutRecord> | null;
    if (!records) return;
    const entries = Object.entries(records);
    const excess = entries.length - MAX_SELLOUT_RECORDS_PER_INSTRUCTOR;
    if (excess <= 0) return;
    entries.sort((a, b) => a[1].addedAt - b[1].addedAt);
    const removals = entries
      .filter(([classId]) => classId !== keepClassId)
      .slice(0, excess)
      .map(([classId]) =>
        db.ref(PATHS.selloutRecord(instructorId, classId)).remove()
      );
    await Promise.all(removals);
  }

  /**
   * Trims class history. Two snapshots per class define its waitlist fill
   * time — the first sighting and the first full-waitlist sighting — so those
   * are kept for as long as the class is relevant, even once they age past the
   * retention window. Once the class itself has happened, the whole node is
   * dropped.
   */
  private async cleanupOldSnapshots(): Promise<void> {
    const cutoff = Date.now() - CLASS_HISTORY_RETENTION_MS;
    const db = admin.database();
    for (const studioId of Object.keys(STUDIOS)) {
      try {
        const snap = await db.ref(PATHS.classHistory(studioId)).once("value");
        const history = snap.val() as Record<
          string,
          Record<string, ClassSnapshot>
        > | null;
        if (!history) continue;
        const removals: Promise<void>[] = [];
        let purgedClasses = 0;
        for (const [classId, snapshots] of Object.entries(history)) {
          if (!snapshots || typeof snapshots !== "object") continue;
          const timestamps = Object.keys(snapshots)
            .filter((key) => Number.isFinite(Number(key)))
            .sort((a, b) => Number(a) - Number(b));
          if (timestamps.length === 0) continue;

          const latest = snapshots[timestamps[timestamps.length - 1]];
          const startsAt = Date.parse(latest?.starts_at ?? "");
          if (Number.isFinite(startsAt) && startsAt < cutoff) {
            // The class has already taken place — nothing left to measure.
            purgedClasses++;
            removals.push(
              db.ref(PATHS.classSnapshot(studioId, classId)).remove()
            );
            continue;
          }

          const keep = new Set([
            timestamps[0],
            timestamps.find((ts) => snapshots[ts]?.status === "full"),
          ]);
          for (const timestampStr of timestamps) {
            if (keep.has(timestampStr)) continue;
            if (Number(timestampStr) < cutoff) {
              removals.push(
                db
                  .ref(
                    `${PATHS.classSnapshot(studioId, classId)}/${timestampStr}`
                  )
                  .remove()
              );
            }
          }
        }
        if (removals.length > 0) {
          await Promise.all(removals);
          logger.log(
            `Removed ${removals.length} expired snapshot entries for studio ${studioId} (${purgedClasses} past classes purged)`
          );
        }
      } catch (err) {
        logger.error(`Snapshot cleanup failed for studio ${studioId}:`, err);
        Sentry.captureException(err);
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Firebase listeners
  // ---------------------------------------------------------------------------

  private handleAlerts(alertsSchema: {
    [key: string]: { [key: string]: Alert };
  }) {
    if (!alertsSchema) return;
    for (const [userId, alerts] of Object.entries(alertsSchema)) {
      for (const group of Object.values(this.alertGroups)) {
        if (group[userId]) {
          group[userId] = [];
        }
      }
      for (const alert of Object.values(alerts)) {
        if (alert.disabled) continue;
        this.initializeUser(alert.studioId, userId);
        this.alertGroups[alert.studioId][userId].push(alert);
      }
    }
  }

  private initializeUser(studioId: string, userId: string) {
    if (!this.alertGroups[studioId]) {
      this.alertGroups[studioId] = {};
    }
    if (!this.alertGroups[studioId][userId]) {
      this.alertGroups[studioId][userId] = [];
    }
  }

  private handleAlertPreferences(alertPreferencesSchema: {
    [key: string]: AlertPreferences;
  }) {
    this.alertPreferences = alertPreferencesSchema ?? {};
  }

  private handleMessagingTokens(tokensSchema: {
    [userId: string]: { [token: string]: unknown };
  }) {
    if (!tokensSchema) {
      this.messagingTokens = {};
      return;
    }
    this.messagingTokens = Object.fromEntries(
      Object.entries(tokensSchema).map(([userId, tokenMap]) => [
        userId,
        Object.keys(tokenMap),
      ])
    );
  }
}
