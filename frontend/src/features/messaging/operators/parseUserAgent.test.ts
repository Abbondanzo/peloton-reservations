import { describe, expect, it } from "vitest";
import { parseUserAgent } from "./parseUserAgent";

describe("parseUserAgent", () => {
  it.each([
    [
      "Chrome on Windows",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    ],
    [
      "Safari on iPhone",
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    ],
    [
      "Firefox on macOS",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
    ],
    [
      "Chrome on Android",
      "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    ],
    [
      "Chrome on ChromeOS",
      "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    ],
    [
      "Firefox on Linux",
      "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
    ],
  ])("labels %s", (expected, ua) => {
    expect(parseUserAgent(ua)).toBe(expected);
  });

  it("prefers Edge over the Chrome token it also carries", () => {
    const ua =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0";
    expect(parseUserAgent(ua)).toBe("Edge on Windows");
  });

  it("prefers Opera over the Chrome token it also carries", () => {
    const ua =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0";
    expect(parseUserAgent(ua)).toBe("Opera on Windows");
  });

  it("recognizes Chrome on iOS, which reports itself as CriOS", () => {
    const ua =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.0.0 Mobile/15E148 Safari/604.1";
    expect(parseUserAgent(ua)).toBe("Chrome on iPhone");
  });

  it("recognizes Firefox on iOS, which reports itself as FxiOS", () => {
    const ua =
      "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/121.0 Mobile/15E148 Safari/605.1.15";
    expect(parseUserAgent(ua)).toBe("Firefox on iPad");
  });

  it("does not mistake Chromium for Chrome", () => {
    const ua =
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chromium/120.0.0.0 Chrome/120.0.0.0 Safari/537.36";
    expect(parseUserAgent(ua)).toBe("Linux");
  });

  it("reports the OS alone when the browser is unrecognized", () => {
    expect(parseUserAgent("SomeBot/1.0 (Windows NT 10.0)")).toBe("Windows");
  });

  it("reports the browser alone when the OS is unrecognized", () => {
    expect(parseUserAgent("Chrome/120.0.0.0 on ExoticOS")).toBe("Chrome");
  });

  it.each([
    ["undefined", undefined],
    ["an empty string", ""],
    ["an unrecognizable string", "totally-unknown"],
  ])("falls back to a generic label for %s", (_label, ua) => {
    expect(parseUserAgent(ua)).toBe("Unknown device");
  });
});
