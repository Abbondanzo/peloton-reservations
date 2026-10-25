import { afterEach, describe, expect, it } from "vitest";
import { isIOS } from "./isIOS";

const stubNavigator = (values: { platform?: string; userAgent?: string }) => {
  for (const [key, value] of Object.entries(values)) {
    Object.defineProperty(window.navigator, key, {
      value,
      configurable: true,
    });
  }
};

afterEach(() => {
  stubNavigator({ platform: "", userAgent: "" });
});

describe("isIOS", () => {
  it.each(["iPad", "iPhone", "iPod", "iPhone Simulator", "iPad Simulator"])(
    "is true for the %s platform",
    (platform) => {
      stubNavigator({ platform, userAgent: "" });
      expect(isIOS()).toBe(true);
    }
  );

  it("is true for an iPhone user agent even when the platform is unset", () => {
    stubNavigator({
      platform: "",
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) Mobile/15E148",
    });
    expect(isIOS()).toBe(true);
  });

  it("is true for a touch-capable Mac, which is how iPadOS 13+ reports itself", () => {
    // jsdom always defines the touch handlers on Document, so this branch is
    // what a Mac user agent hits here; a desktop Safari without them would not.
    stubNavigator({
      platform: "MacIntel",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    });
    expect(isIOS()).toBe(true);
  });

  it("is false for Windows", () => {
    stubNavigator({
      platform: "Win32",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    });
    expect(isIOS()).toBe(false);
  });

  it("is false for Android", () => {
    stubNavigator({
      platform: "Linux armv8l",
      userAgent: "Mozilla/5.0 (Linux; Android 14; Pixel 8)",
    });
    expect(isIOS()).toBe(false);
  });
});
