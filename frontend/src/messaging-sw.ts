/// <reference lib="webworker" />

import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";
import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import { app } from "./features/firebase/constants/app";

declare const self: ServiceWorkerGlobalScope;

const MANIFEST_VERSION = 1;
console.log(`Running manifest v${MANIFEST_VERSION}`);

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

let allowlist: undefined | RegExp[] = undefined;
if (import.meta.env.DEV) allowlist = [/^\/$/];

// to allow work offline
registerRoute(
  new NavigationRoute(createHandlerBoundToURL("index.html"), { allowlist })
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".png"),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

clientsClaim();

// Custom message handling
if (app) {
  const messaging = getMessaging(app);
  onBackgroundMessage(messaging, (payload) => {
    console.log("[messaging-sw] Received background message ", payload);
    // FCM will automatically display notifications. Do not handle them
    if (payload.notification) return;
    // Check for data-based notifications
    if (!payload.data) return;
    const { title, body } = payload.data;
    if (!title) return;
    const notificationOptions = {
      body,
    };
    self.registration.showNotification(title, notificationOptions);
  });
}

console.log("Service worker loaded :)");
