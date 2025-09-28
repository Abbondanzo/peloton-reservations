import { getMessaging, getToken } from "firebase/messaging";
import { safeInit } from "../operators/safeInit";
import { app } from "./app";

export const messaging = safeInit(() => getMessaging(app));

const hasNotificationSupport =
  "serviceWorker" in navigator &&
  "PushManager" in window &&
  "Notification" in window &&
  "fetch" in window;

const register = async () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("Service workers are not supported");
  }
  return navigator.serviceWorker.register(
    import.meta.env.MODE === "production" ? "/sw.js" : "/dev-sw.js?dev-sw",
    { type: import.meta.env.MODE === "production" ? "classic" : "module" }
  );
};

let asyncServiceWorkerRegistration = register();

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
    console.log("Registered service worker successfully");
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
