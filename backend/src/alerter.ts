import admin from "firebase-admin";
import { Alert, AlertPreferences, RawClass, STUDIOS } from "shared";
import firebase from "../firebase.json";
import { logger } from "./logger";
import { DiffDelegate } from "./manager";

type StudioGroup = { [key: string]: Alert[] };

/** Don't re-fire the same class+event within this window after sending. */
const DEBOUNCE_MS = 60 * 60 * 1000;

/** How often to flush the pending-notification queue. */
const PENDING_CHECK_INTERVAL_MS = 30 * 1000;

type ChangeType = "added" | "became_free" | "waitlist_opened";

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
      credential: admin.credential.cert(firebase as admin.ServiceAccount),
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
  }

  // ---------------------------------------------------------------------------
  // DiffDelegate
  // ---------------------------------------------------------------------------

  handleAddition(studioId: string, classes: RawClass[]): void {
    if (!this.alertGroups[studioId]) {
      return;
    }
    for (const rawClass of classes) {
      for (const [userId, alerts] of Object.entries(
        this.alertGroups[studioId]
      )) {
        if (alerts.some((alert) => this.matchesAlert(rawClass, alert))) {
          this.enqueueNotification(userId, studioId, rawClass, "added");
        }
      }
    }
  }

  handleChange(
    studioId: string,
    classes: { new: RawClass; old: RawClass }[]
  ): void {
    if (!this.alertGroups[studioId]) {
      return;
    }
    for (const entry of classes) {
      for (const [userId, alerts] of Object.entries(
        this.alertGroups[studioId]
      )) {
        for (const alert of alerts) {
          const changeType = this.getChangeType(alert, entry.old, entry.new);
          if (changeType) {
            this.enqueueNotification(
              userId,
              studioId,
              entry.new,
              changeType
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
    changeType: ChangeType
  ) {
    const debounceKey = `${userId}:${classData.id}:${changeType}`;
    const now = Date.now();

    // Skip if this exact event was already sent within the debounce window
    if (
      this.lastAlerted[debounceKey] &&
      now - this.lastAlerted[debounceKey] < DEBOUNCE_MS
    ) {
      return;
    }

    // Skip if already pending for this class+event
    if (this.pendingNotifications.has(debounceKey)) {
      return;
    }

    const delayMin = this.alertPreferences[userId]?.notificationDelayMin ?? 0;
    const cooldownExpiry =
      (this.lastNotifiedAt[userId] ?? 0) + delayMin * 60 * 1000;
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
        classId: pending.classData.id,
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
          link: pending.classData.customer_url || "/",
        },
      },
    };

    const response = await admin.messaging().sendEachForMulticast(message);
    logger.log(
      `FCM sent for user ${pending.userId}: ${response.successCount}/${tokens.length} delivered`
    );

    if (response.failureCount > 0) {
      const db = admin.database();
      response.responses.forEach((resp, idx) => {
        if (
          !resp.success &&
          (resp.error?.code === "messaging/registration-token-not-registered" ||
            resp.error?.code === "messaging/invalid-registration-token")
        ) {
          const staleToken = tokens[idx];
          logger.log(
            `Removing stale FCM token for user ${pending.userId}`
          );
          db.ref(`/messagingTokens/${pending.userId}/${staleToken}`).remove();
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

  // ---------------------------------------------------------------------------
  // Alert matching
  // ---------------------------------------------------------------------------

  private isFree(rawClass: RawClass) {
    return rawClass.occupancy < rawClass.max_occupancy;
  }

  private isWaitlistFull(rawClass: RawClass) {
    return rawClass.waiting_count >= 10;
  }

  private matchesAlert(rawClass: RawClass, alert: Alert) {
    if (alert.maxStatus === "free" && !this.isFree(rawClass)) {
      return false;
    }
    if (alert.maxStatus === "waitlist" && this.isWaitlistFull(rawClass)) {
      return false;
    }
    if (
      alert.disciplines &&
      !alert.disciplines.some(
        (d1) => d1 === rawClass.offering_type.category.id
      )
    ) {
      return false;
    }
    if (
      alert.instructors &&
      !rawClass.instructors.some((i) => alert.instructors!.includes(i.id))
    ) {
      return false;
    }
    if (alert.timeRanges) {
      const timeZone = STUDIOS[alert.studioId]?.timezone;
      if (!timeZone) {
        return false;
      }
      const date = new Date(rawClass.starts_at);
      const utcDate = new Date(
        date.toLocaleString("en-US", { timeZone: "UTC" })
      );
      const tzDate = new Date(date.toLocaleString("en-US", { timeZone }));
      const offset = utcDate.getTime() - tzDate.getTime();
      date.setTime(date.getTime() + offset);
      const range = alert.timeRanges[date.getDay()];
      if (!range) {
        return false;
      }
      const minuteOfDay = date.getHours() * 60 + date.getMinutes();
      if (range.startMin > minuteOfDay || range.endMin < minuteOfDay) {
        return false;
      }
    }
    return true;
  }

  private getChangeType(
    alert: Alert,
    oldClass: RawClass,
    newClass: RawClass
  ): ChangeType | null {
    if (!this.matchesAlert(newClass, alert)) {
      return null;
    }
    if (
      alert.maxStatus === "free" &&
      !this.isFree(oldClass) &&
      this.isFree(newClass)
    ) {
      return "became_free";
    }
    if (
      alert.maxStatus === "waitlist" &&
      this.isWaitlistFull(oldClass) &&
      !this.isWaitlistFull(newClass)
    ) {
      return "waitlist_opened";
    }
    return null;
  }
}
