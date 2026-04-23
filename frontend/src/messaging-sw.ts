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

// PR preview deployments should never cache — stale assets block reviewers.
// The SW file is always fetched directly from the network (bypassing any SW
// cache), so this check reliably fires even when an old SW is already installed.
if (self.location.pathname.includes("/pr-preview/")) {
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches
        .keys()
        .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
        .then(() => self.registration.unregister())
    );
  });
} else {
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
    // Only needed for data-only messages on iOS foreground (see below).
    const isIOS = /iPhone|iPad|iPod/.test(self.navigator.userAgent);

    onBackgroundMessage(messaging, async (payload) => {
      console.log("[messaging-sw] Received background message ", payload);
      const title = payload.notification?.title ?? payload.data?.title;
      const body = payload.notification?.body ?? payload.data?.body;
      if (!title) return;
      // Notification-field messages are auto-displayed by the platform on all
      // targets: FCM on Android/Chrome, APNS on iOS. Calling showNotification()
      // here would produce a duplicate.
      if (payload.notification) return;
      // On iOS PWA, onBackgroundMessage fires even when the page is visible.
      // For data-only messages, the foreground onMessage handler in
      // MessagingProvider will display it — skip here to avoid double delivery.
      if (isIOS) {
        const windowClients = await self.clients.matchAll({
          type: "window",
          includeUncontrolled: true,
        });
        if (windowClients.some((c) => c.visibilityState === "visible")) return;
      }
      self.registration.showNotification(title, { body, data: payload.data });
    });

    self.addEventListener("notificationclick", (event) => {
      event.notification.close();
      const swPathname = self.location.pathname;
      const basePath = swPathname.substring(0, swPathname.lastIndexOf("/") + 1);
      const classUrl: string | undefined = event.notification.data?.classUrl;
      const appUrl = classUrl
        ? `${basePath}?classUrl=${encodeURIComponent(classUrl)}`
        : basePath;
      event.waitUntil(
        self.clients
          .matchAll({ type: "window", includeUncontrolled: true })
          .then((windowClients) => {
            const appClient = windowClients.find(
              (c) => new URL(c.url).origin === self.location.origin
            );
            if (appClient) {
              (appClient as WindowClient).navigate(appUrl);
              return (appClient as WindowClient).focus();
            }
            return self.clients.openWindow(appUrl);
          })
      );
    });
  }

  console.log("Service worker loaded :)");
}
