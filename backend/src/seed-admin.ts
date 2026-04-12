/**
 * One-off script: seeds an admin user in Firebase.
 * Usage: ts-node src/seed-admin.ts <uid>
 */
import admin from "firebase-admin";
import fs from "fs";
import path from "path";

const uid = process.argv[2];
if (!uid) {
  console.error("Usage: ts-node src/seed-admin.ts <uid>");
  process.exit(1);
}

const serviceAccount = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "firebase.json"), "utf8")
) as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://peloton-alerts-default-rtdb.firebaseio.com/",
});

admin
  .database()
  .ref(`/admins/${uid}`)
  .set(true)
  .then(() => {
    console.log(`Admin set: /admins/${uid} = true`);
    process.exit(0);
  })
  .catch((err) => {
    console.error("Failed:", err);
    process.exit(1);
  });
