// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export async function register(): Promise<ServiceWorkerRegistration> {
  if ("serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return Promise.reject(
        new Error("CDN serving asset, service worker will not register")
      );
    }

    // Wait for the window to load
    await new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }
      window.addEventListener("load", () => resolve());
      setTimeout(() => {
        resolve();
      }, 5000);
    });

    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    if (isLocalhost) {
      // Add some additional logging to localhost, pointing developers to the
      // service worker/PWA documentation.
      navigator.serviceWorker.ready.then(() => {
        console.log(
          "This web app is being served cache-first by a service " +
            "worker. To learn more, visit https://cra.link/PWA"
        );
      });
      // This is running on localhost. Let's check if a service worker still exists or not.
      return checkValidServiceWorker(swUrl);
    } else {
      // Is not localhost. Just register service worker
      return registerValidSW(swUrl);
    }
  } else {
    return Promise.reject(
      new Error(
        "Browser does not support service workers: serviceWorker not found in navigator"
      )
    );
  }
}

async function registerValidSW(swUrl: string) {
  const registration = await navigator.serviceWorker.register(swUrl);
  registration.onupdatefound = () => {
    const installingWorker = registration.installing;
    if (installingWorker == null) {
      return;
    }
    installingWorker.onstatechange = () => {
      if (installingWorker.state === "installed") {
        if (navigator.serviceWorker.controller) {
          // At this point, the updated precached content has been fetched,
          // but the previous service worker will still serve the older
          // content until all client tabs are closed.
          console.log(
            "New content is available and will be used when all " +
              "tabs for this page are closed. See https://cra.link/PWA."
          );
        } else {
          // At this point, everything has been precached.
          // It's the perfect time to display a
          // "Content is cached for offline use." message.
          console.log("Content is cached for offline use.");
        }
      }
    };
  };
  return registration;
}

async function checkValidServiceWorker(
  swUrl: string
): Promise<ServiceWorkerRegistration> {
  // Check if the service worker can be found. If it can't reload the page.
  const response = await fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  });
  // Ensure service worker exists, and that we really are getting a JS file.
  const contentType = response.headers.get("content-type");
  if (
    response.status === 404 ||
    (contentType != null && contentType.indexOf("javascript") === -1)
  ) {
    return Promise.reject(
      new Error(`Service worker file not found or not recognized at ${swUrl}`)
    );
  } else {
    // Service worker found. Proceed as normal.
    return registerValidSW(swUrl);
  }
}
