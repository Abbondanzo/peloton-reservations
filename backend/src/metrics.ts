import admin from "firebase-admin";

export class Metrics {
  private static get isProduction(): boolean {
    return process.env.NODE_ENV === "production";
  }

  private static dateKey(): string {
    return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  }

  static recordDiff(
    studioId: string,
    added: number,
    changed: number,
    removed: number
  ): void {
    if (!this.isProduction || added + changed + removed === 0) {
      return;
    }
    const ref = admin
      .database()
      .ref(`metrics/${this.dateKey()}/diffs/${studioId}`);
    if (added) {
      ref.child("added").set(admin.database.ServerValue.increment(added));
    }
    if (changed) {
      ref.child("changed").set(admin.database.ServerValue.increment(changed));
    }
    if (removed) {
      ref.child("removed").set(admin.database.ServerValue.increment(removed));
    }
  }

  static recordFcm(sent: number, failed: number, usersReached: number): void {
    if (!this.isProduction) {
      return;
    }
    const ref = admin.database().ref(`metrics/${this.dateKey()}/notifications`);
    if (sent) {
      ref.child("sent").set(admin.database.ServerValue.increment(sent));
    }
    if (failed) {
      ref.child("failed").set(admin.database.ServerValue.increment(failed));
    }
    if (usersReached) {
      ref
        .child("usersReached")
        .set(admin.database.ServerValue.increment(usersReached));
    }
  }
}
