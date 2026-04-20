import * as Sentry from "@sentry/node";
import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import {
  Alert,
  AlertPreferences,
  type ChangeType,
  type ClassSnapshot,
  PATHS,
  RawClass,
  STUDIOS,
  buildSnapshot,
  getBookableStatus,
  getChangeType,
  matchesAlert,
} from "shared";
import { logger } from "./logger";
import { DiffDelegate } from "./manager";
import { Metrics } from "./metrics";

type StudioGroup = { [key: string]: Alert[] };

// Trailing slash stripped so we can append "/?classUrl=..." cleanly.
const FRONTEND_URL = (process.env.FRONTEND_URL ?? "").replace(/\/$/, "");

function buildNotificationLink(classUrl: string | null | undefined): string {
  const base = FRONTEND_URL || "/";
  if (!classUrl) return base;
  return `${FRONTEND_URL}/?classUrl=${encodeURIComponent(classUrl)}`;
}

/** How often to flush the pending-notification queue. */
const PENDING_CHECK_INTERVAL_MS = 30 * 1000;
/** How long to retain class history snapshots. */
const HISTORY_RETENTION_MS = 7 * 24 * 60 * 60 * 1000;
/** How often to clean up old class history snapshots. */
const HISTORY_CLEANUP_INTERVAL_MS = 60 * 60 * 1000;

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

  constructor() {
    this.alertGroups = {};
    this.alertPreferences = {};
    this.lastAlerted = {};
    this.lastNotifiedAt = {};
    this.messagingTokens = {};
    this.pendingNotifications = new Map();
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
      if (getBookableStatus(entry.old) !== getBookableStatus(entry.new)) {
        this.writeSnapshot(studioId, entry.new);
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
    changeType: ChangeType
  ) {
    const debounceKey = `${userId}:${classData.id}:${changeType}`;
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
          link: buildNotificationLink(pending.classData.customer_url),
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
    }
  }

  // ---------------------------------------------------------------------------
  // Class history
  // ---------------------------------------------------------------------------

  private writeSnapshot(studioId: string, rawClass: RawClass): void {
    const snapshot: ClassSnapshot = buildSnapshot(rawClass);
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

  private async cleanupOldSnapshots(): Promise<void> {
    const cutoff = Date.now() - HISTORY_RETENTION_MS;
    const db = admin.database();
    for (const studioId of Object.keys(STUDIOS)) {
      try {
        const snap = await db.ref(PATHS.classHistory(studioId)).once("value");
        const history = snap.val() as Record<
          string,
          Record<string, unknown>
        > | null;
        if (!history) continue;
        const removals: Promise<void>[] = [];
        for (const [classId, snapshots] of Object.entries(history)) {
          if (!snapshots || typeof snapshots !== "object") continue;
          for (const timestampStr of Object.keys(snapshots)) {
            const ts = Number(timestampStr);
            if (!Number.isFinite(ts)) continue;
            if (ts < cutoff) {
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
            `Removed ${removals.length} expired snapshots for studio ${studioId}`
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
