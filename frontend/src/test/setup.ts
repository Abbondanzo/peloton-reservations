import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Sentry is initialized at module load in several operators; stub it out so
// tests neither send events nor need a DSN.
vi.mock("@sentry/react", () => ({
  captureException: vi.fn(),
  captureMessage: vi.fn(),
  init: vi.fn(),
  withScope: vi.fn(),
  ErrorBoundary: ({ children }: { children: unknown }) => children,
}));

// jsdom implements no layout, so it leaves scrollIntoView undefined.
Element.prototype.scrollIntoView = vi.fn();

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});
