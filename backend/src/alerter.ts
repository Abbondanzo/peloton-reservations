import admin from "firebase-admin";
import { Alert, AlertPreferences, RawClass, STUDIOS } from "shared";
import firebase from "../firebase.json";
import { logger } from "./logger";
import { DiffDelegate } from "./manager";

type StudioGroup = { [key: string]: Alert[] };

const ONE_WEEK_MS = 1000 * 60 * 60 * 24 * 7;

export class Alerter implements DiffDelegate {
  private app: admin.app.App;

  private readonly alertGroups: { [key: string]: StudioGroup };
  private alertPreferences: { [key: string]: AlertPreferences };
  private readonly lastAlerted: { [key: string]: number };

  constructor() {
    this.alertGroups = {};
    this.alertPreferences = {};
  }

  async initialize() {
    this.app = admin.initializeApp({
      credential: admin.credential.cert(firebase as any),
      // The database URL depends on the location of the database
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
  }

  handleAddition(studioId: string, classes: RawClass[]): void {
    if (!this.alertGroups[studioId]) {
      return;
    }
    const usersToNotify = new Set<string>();
    for (const rawClass of classes) {
      for (const [userId, alerts] of Object.entries(
        this.alertGroups[studioId]
      )) {
        if (alerts.some((alert) => this.matchesAlert(rawClass, alert))) {
          usersToNotify.add(userId);
        }
      }
    }
    if (usersToNotify.size > 0) {
      logger.log(`Notifying ${usersToNotify.size} users of new classes`);
      logger.log(usersToNotify);
    }
    throw new Error("Method not implemented.");
  }

  handleChange(
    studioId: string,
    classes: { new: RawClass; old: RawClass }[]
  ): void {
    if (!this.alertGroups[studioId]) {
      return;
    }
    const usersToNotify = new Set<string>();
    for (const entry of classes) {
      for (const [userId, alerts] of Object.entries(
        this.alertGroups[studioId]
      )) {
        if (
          alerts.some((alert) =>
            this.matchesChange(alert, entry.old, entry.new)
          )
        ) {
          usersToNotify.add(userId);
        }
      }
    }
    if (usersToNotify.size > 0) {
      logger.log(`Notifying ${usersToNotify.size} users of changed classes`);
      logger.log(usersToNotify);
    }
    throw new Error("Method not implemented.");
  }

  private handleAlerts(alertsSchema: {
    [key: string]: { [key: string]: Alert };
  }) {
    for (const [userId, alerts] of Object.entries(alertsSchema)) {
      // Reset alerts
      for (const group of Object.values(this.alertGroups)) {
        if (group[userId]) {
          group[userId] = [];
        }
      }
      // Push alerts
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
    this.alertPreferences = alertPreferencesSchema;
  }

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
        // TODO: Raise exception
        return false;
      }
      // Epoch shifting to correct for studio timezone
      const date = new Date(rawClass.starts_at);
      // Diff UTC from studio for offset
      const utcDate = new Date(
        date.toLocaleString("en-US", { timeZone: "UTC" })
      );
      const tzDate = new Date(date.toLocaleString("en-US", { timeZone }));
      const offset = utcDate.getTime() - tzDate.getTime();
      // Apply offset so "local" time is represented in studio time
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

  private matchesChange(alert: Alert, oldClass: RawClass, newClass: RawClass) {
    if (!this.matchesAlert(newClass, alert)) {
      return false;
    }
    if (alert.maxStatus === "free" && !this.isFree(oldClass) && this.isFree(newClass)) {
      return true;
    }
    if (
      alert.maxStatus === "waitlist" &&
      this.isWaitlistFull(oldClass) &&
      !this.isWaitlistFull(newClass)
    ) {
      return true;
    }
    return false;
  }
}
