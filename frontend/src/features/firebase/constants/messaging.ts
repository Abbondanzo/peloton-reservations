import { getMessaging, getToken } from "firebase/messaging";
import { register } from "../../../serviceWorkerRegistration";
import { safeInit } from "../operators/safeInit";
import { app } from "./app";

export const messaging = safeInit(() => getMessaging(app));

let asyncServiceWorkerRegistration = register();

const hasNotificationSupport =
  "serviceWorker" in navigator &&
  "PushManager" in window &&
  "Notification" in window &&
  "fetch" in window;

export const getAppToken = async () => {
  if (!messaging) {
    throw new Error("Messaging is not set up");
  }
  if (!hasNotificationSupport) {
    throw new Error("Browser environment does not allow messaging");
  }
  let registration: ServiceWorkerRegistration;
  try {
    registration = await asyncServiceWorkerRegistration;
  } catch (error) {
    console.error("Failed to register service worker. Trying again...", error);
    asyncServiceWorkerRegistration = register();
    registration = await asyncServiceWorkerRegistration;
  }
  return getToken(messaging, {
    vapidKey:
      "BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",
    serviceWorkerRegistration: registration,
  });
};
