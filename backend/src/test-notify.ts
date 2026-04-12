/**
 * Usage: ts-node src/test-notify.ts <userId>
 * Reads FCM tokens for the given user from Firebase and sends a test notification.
 */
import admin from "firebase-admin";
import fs from "fs";
import path from "path";

const userId = process.argv[2];
if (!userId) {
  console.error("Usage: ts-node src/test-notify.ts <userId>");
  process.exit(1);
}

const serviceAccount = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "firebase.json"), "utf8")
) as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://peloton-alerts-default-rtdb.firebaseio.com/",
});

const run = async () => {
  const db = admin.database();
  const snapshot = await db.ref(`/messagingTokens/${userId}`).get();
  const tokenMap = snapshot.val() as Record<string, unknown> | null;

  if (!tokenMap) {
    console.error(`No FCM tokens found for user ${userId} (snapshot was null — likely a permissions issue)`);
    process.exit(1);
  }

  const tokens = Object.keys(tokenMap);
  console.log(`Found ${tokens.length} token(s) for user ${userId}`);

  const message: admin.messaging.MulticastMessage = {
    tokens,
    notification: {
      title: "Test notification",
      body: `Diagnostic ping for user ${userId}`,
    },
    webpush: {
      notification: {
        title: "Test notification",
        body: `Diagnostic ping for user ${userId}`,
        icon: "/icons/icon-192x192.png",
      },
    },
  };

  const response = await admin.messaging().sendEachForMulticast(message);
  console.log(`Sent: ${response.successCount}/${tokens.length} delivered, ${response.failureCount} failed`);

  response.responses.forEach((resp, idx) => {
    if (!resp.success) {
      console.error(`  Token ${idx} (${tokens[idx].slice(0, 20)}...): ${resp.error?.code} — ${resp.error?.message}`);
    } else {
      console.log(`  Token ${idx} (${tokens[idx].slice(0, 20)}...): OK`);
    }
  });

  process.exit(0);
};

run().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
