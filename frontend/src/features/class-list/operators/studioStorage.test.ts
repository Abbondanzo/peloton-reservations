import { beforeEach, describe, expect, it, vi } from "vitest";
import { DEFAULT_STUDIO_ID } from "shared";
import { getStoredStudioId, setStoredStudioId } from "./studioStorage";

const KEY = "STUDIO_ID";

beforeEach(() => {
  window.localStorage.clear();
});

describe("getStoredStudioId", () => {
  it("returns the fallback when nothing is stored", () => {
    expect(getStoredStudioId(DEFAULT_STUDIO_ID)).toBe(DEFAULT_STUDIO_ID);
  });

  it("returns a stored studio the app still knows about", () => {
    window.localStorage.setItem(KEY, "7248663");
    expect(getStoredStudioId(DEFAULT_STUDIO_ID)).toBe("7248663");
  });

  it("falls back when the stored studio no longer exists", () => {
    window.localStorage.setItem(KEY, "9999999");
    expect(getStoredStudioId(DEFAULT_STUDIO_ID)).toBe(DEFAULT_STUDIO_ID);
  });

  it("falls back when localStorage throws, e.g. in private browsing", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("SecurityError");
    });
    expect(getStoredStudioId(DEFAULT_STUDIO_ID)).toBe(DEFAULT_STUDIO_ID);
  });
});

describe("setStoredStudioId", () => {
  it("round-trips through localStorage", () => {
    setStoredStudioId("7248663");
    expect(getStoredStudioId(DEFAULT_STUDIO_ID)).toBe("7248663");
  });

  it("swallows a localStorage write failure", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    expect(() => setStoredStudioId("7248663")).not.toThrow();
  });
});
