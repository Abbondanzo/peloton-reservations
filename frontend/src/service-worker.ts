/// <reference lib="webworker" />

import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

const messaging = getMessaging();

declare let self: ServiceWorkerGlobalScope;

onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const { notification } = payload;
  if (!notification) return;
  const { title, body } = notification;
  self.registration.showNotification(title || "", { body });
});
