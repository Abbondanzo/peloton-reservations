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
  // iOS Web Push does not auto-display notifications the way Chrome does —
  // the service worker must call showNotification() explicitly. On other
  // platforms, FCM handles display for messages that include a notification
  // field, so we only take over for data-only messages there.
  const isIOS = /iPhone|iPad|iPod/.test(self.navigator.userAgent);

  onBackgroundMessage(messaging, async (payload) => {
    console.log("[messaging-sw] Received background message ", payload);
    const title = payload.notification?.title ?? payload.data?.title;
    const body = payload.notification?.body ?? payload.data?.body;
    if (!title) return;
    // On non-iOS, skip notification-field messages — FCM auto-displays them.
    if (payload.notification && !isIOS) return;
    // On iOS PWA, onBackgroundMessage fires even when the page is visible,
    // causing double-delivery alongside MessagingProvider's onMessage handler.
    // Skip here if there's a focused client — the foreground handler shows it.
    if (isIOS) {
      const windowClients = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      if (windowClients.some((c) => c.visibilityState === "visible")) return;
    }
    self.registration.showNotification(title, { body });
  });
}

console.log("Service worker loaded :)");
