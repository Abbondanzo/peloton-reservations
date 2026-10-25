import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "backend",
    environment: "node",
    include: ["src/**/*.test.ts"],
    clearMocks: true,
    restoreMocks: true,
  },
  resolve: {
    alias: {
      // Tests import `shared` from source so they don't require a prior build.
      "shared/testing": new URL(
        "../shared/src/testing/fixtures.ts",
        import.meta.url
      ).pathname,
      shared: new URL("../shared/src/index.ts", import.meta.url).pathname,
    },
  },
});
