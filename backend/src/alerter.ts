import admin from "firebase-admin";
import { Alert, AlertPreferences, RawClass } from "shared";
import firebase from "../firebase.json";
import { DiffDelegate } from "./manager";

type StudioGroup = { [key: string]: Alert[] };

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
    throw new Error("Method not implemented.");
  }

  handleChange(
    studioId: string,
    classes: { new: RawClass; old: RawClass }[]
  ): void {
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
}
