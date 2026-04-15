import admin from "firebase-admin";

export class Metrics {
  private static get isProduction(): boolean {
    return process.env.NODE_ENV === "production";
  }

  private static dateKey(): string {
    return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  }

  static async recordDiff(
    studioId: string,
    added: number,
    changed: number,
    removed: number
  ): Promise<void> {
    if (!this.isProduction || added + changed + removed === 0) {
      return;
    }
    const updates: Record<string, object> = {};
    if (added) {
      updates["added"] = admin.database.ServerValue.increment(added);
    }
    if (changed) {
      updates["changed"] = admin.database.ServerValue.increment(changed);
    }
    if (removed) {
      updates["removed"] = admin.database.ServerValue.increment(removed);
    }
    await admin
      .database()
      .ref(`metrics/${this.dateKey()}/diffs/${studioId}`)
      .update(updates);
  }

  static async recordFcm(
    sent: number,
    failed: number,
    usersReached: number
  ): Promise<void> {
    if (!this.isProduction) {
      return;
    }
    const updates: Record<string, object> = {};
    if (sent) {
      updates["sent"] = admin.database.ServerValue.increment(sent);
    }
    if (failed) {
      updates["failed"] = admin.database.ServerValue.increment(failed);
    }
    if (usersReached) {
      updates["usersReached"] = admin.database.ServerValue.increment(usersReached);
    }
    await admin
      .database()
      .ref(`metrics/${this.dateKey()}/notifications`)
      .update(updates);
  }
}
