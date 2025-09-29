import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const base = process.env.BASE_URL || "/";

  return defineConfig({
    base,
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      VitePWA({
        srcDir: "src",
        filename: "messaging-sw.ts",
        registerType: "autoUpdate",
        scope: base,
        base,
        strategies: "injectManifest",
        injectManifest: {
          minify: true,
          enableWorkboxModulesLogs: true,
          swDest: "dist/messaging-sw.js",
        },
        injectRegister: null,
        devOptions: {
          enabled: true,
          type: "module",
          navigateFallback: "index.html",
        },
        workbox: {
          sourcemap: true,
        },
        manifest: {
          short_name: "Peloton Alerts",
          name: "Peloton Alerts",
          start_url: "",
          display: "standalone",
          description:
            "Smarter interface for picking reservable Peloton classes",
          theme_color: "#181818",
          background_color: "#181a2f",
          orientation: "portrait-primary",
          icons: [
            {
              src: "images/icon-48x48.png",
              sizes: "48x48",
              type: "image/png",
            },
            {
              src: "images/icon-72x72.png",
              sizes: "72x72",
              type: "image/png",
            },
            {
              src: "images/icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
            },
            {
              src: "images/icon-128x128.png",
              sizes: "128x128",
              type: "image/png",
            },
            {
              src: "images/icon-144x144.png",
              sizes: "144x144",
              type: "image/png",
            },
            {
              src: "images/icon-152x152.png",
              sizes: "152x152",
              type: "image/png",
            },
            {
              src: "images/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "images/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
            },
            {
              src: "images/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    resolve: {
      preserveSymlinks: true,
    },
  });
};
