import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      // Tests import `shared` from source so they don't require a prior build.
      "shared/testing": new URL(
        "../shared/src/testing/fixtures.ts",
        import.meta.url
      ).pathname,
      shared: new URL("../shared/src/index.ts", import.meta.url).pathname,
    },
  },
  test: {
    name: "frontend",
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    restoreMocks: true,
  },
});
