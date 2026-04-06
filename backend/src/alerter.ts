import admin from "firebase-admin";
import {
  Alert,
  AlertPreferences,
  InstructorMap,
  RawClass,
  STUDIOS,
} from "shared";
import firebase from "../firebase.json";
import { logger } from "./logger";
import { DiffDelegate } from "./manager";

type StudioGroup = { [key: string]: Alert[] };

/** Re-notify for the same class+event at most once per hour. */
const DEBOUNCE_MS = 60 * 60 * 1000;

/** How often (ms) to check the pending-notification queue. */
const PENDING_CHECK_INTERVAL_MS = 30 * 1000;

type ChangeType = "added" | "became_free" | "waitlist_opened";

interface PendingNotification {
  userId: string;
  studioId: string;
  classData: RawClass;
  instructors: InstructorMap;
  changeType: ChangeType;
  /** Unix ms after which this notification should be sent. */
  sendAt: number;
}

export class Alerter implements DiffDelegate {
  private app: admin.app.App;

  private readonly alertGroups: { [key: string]: StudioGroup };
  private alertPreferences: { [key: string]: AlertPreferences };
  private readonly lastAlerted: { [key: string]: number };
  private messagingTokens: { [userId: string]: string[] };

  /** key: `${userId}:${classId}:${changeType}` */
  private readonly pendingNotifications: Map<string, PendingNotification>;

  constructor() {
    this.alertGroups = {};
    this.alertPreferences = {};
    this.lastAlerted = {};
    this.messagingTokens = {};
    this.pendingNotifications = new Map();
  }

  async initialize() {
    this.app = admin.initializeApp({
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

  handleAddition(
    studioId: string,
    classes: RawClass[],
    instructors: InstructorMap
  ): void {
    if (!this.alertGroups[studioId]) {
      return;
    }
    for (const rawClass of classes) {
      for (const [userId, alerts] of Object.entries(
        this.alertGroups[studioId]
      )) {
        if (alerts.some((alert) => this.matchesAlert(rawClass, alert))) {
          this.enqueueNotification(
            userId,
            studioId,
            rawClass,
            instructors,
            "added"
          );
        }
      }
    }
  }

  handleChange(
    studioId: string,
    classes: { new: RawClass; old: RawClass }[],
    instructors: InstructorMap
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
              instructors,
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
    instructors: InstructorMap,
    changeType: ChangeType
  ) {
    const debounceKey = `${userId}:${classData.id}:${changeType}`;
    const now = Date.now();

    // Skip if already alerted recently for this class+event
    if (
      this.lastAlerted[debounceKey] &&
      now - this.lastAlerted[debounceKey] < DEBOUNCE_MS
    ) {
      return;
    }

    // Skip if already pending
    if (this.pendingNotifications.has(debounceKey)) {
      return;
    }

    const delayMin = this.alertPreferences[userId]?.notificationDelayMin ?? 0;
    const sendAt = now + delayMin * 60 * 1000;

    logger.log(
      `Queuing notification for user ${userId}: ${changeType} on class ${classData.id}` +
        (delayMin > 0 ? ` (delay ${delayMin}m)` : "")
    );

    this.pendingNotifications.set(debounceKey, {
      userId,
      studioId,
      classData,
      instructors,
      changeType,
      sendAt,
    });
  }

  private async processPendingNotifications() {
    const now = Date.now();
    const due: [string, PendingNotification][] = [];
    for (const [key, pending] of this.pendingNotifications) {
      if (pending.sendAt <= now) {
        due.push([key, pending]);
      }
    }

    for (const [key, pending] of due) {
      this.pendingNotifications.delete(key);
      try {
        await this.sendNotification(pending);
        this.lastAlerted[key] = Date.now();
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

    const { title, body } = this.buildNotificationContent(pending);
    const studio = STUDIOS[pending.studioId];

    const message: admin.messaging.MulticastMessage = {
      tokens,
      notification: { title, body },
      data: {
        classId: pending.classData.id,
        studioId: pending.studioId,
        studioLocation: studio?.location ?? "",
        changeType: pending.changeType,
        classUrl: pending.classData.customer_url ?? "",
        startTime: String(pending.classData.start),
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

    // Clean up tokens that are no longer valid
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
            `Removing stale token for user ${pending.userId}: ${staleToken}`
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
    const { classData, instructors, changeType, studioId } = pending;
    const instructor = instructors[classData.instructor_id];
    const instructorName = instructor?.full_name ?? "Unknown instructor";
    const studio = STUDIOS[studioId];

    const startDate = new Date(classData.start * 1000);
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
      // Reset alerts for this user across all studios
      for (const group of Object.values(this.alertGroups)) {
        if (group[userId]) {
          group[userId] = [];
        }
      }
      // Re-index alerts by studio
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

  private matchesAlert(rawClass: RawClass, alert: Alert) {
    if (alert.maxStatus === "free" && !rawClass.free) {
      return false;
    }
    if (alert.maxStatus === "waitlist" && rawClass.waitlist_full) {
      return false;
    }
    if (alert.maxStatus === "full" && rawClass.cancelled) {
      return false;
    }
    if (
      alert.disciplines &&
      !alert.disciplines.some((d1) =>
        rawClass.disciplines.some((d2) => d1 === d2.id)
      )
    ) {
      return false;
    }
    if (
      alert.instructors &&
      !alert.instructors.includes(rawClass.instructor_id)
    ) {
      return false;
    }
    if (alert.timeRanges) {
      const timeZone = STUDIOS[alert.studioId]?.timezone;
      if (!timeZone) {
        return false;
      }
      const date = new Date(rawClass.start * 1000);
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

  /**
   * Returns the change type if this class change should trigger a notification
   * for the given alert, or null if it should not.
   */
  private getChangeType(
    alert: Alert,
    oldClass: RawClass,
    newClass: RawClass
  ): ChangeType | null {
    if (!this.matchesAlert(newClass, alert)) {
      return null;
    }
    if (alert.maxStatus === "free" && !oldClass.free && newClass.free) {
      return "became_free";
    }
    if (
      alert.maxStatus === "waitlist" &&
      oldClass.waitlist_full &&
      !newClass.waitlist_full
    ) {
      return "waitlist_opened";
    }
    if (
      alert.maxStatus === "full" &&
      oldClass.cancelled &&
      !newClass.cancelled
    ) {
      return "became_free";
    }
    return null;
  }
}
