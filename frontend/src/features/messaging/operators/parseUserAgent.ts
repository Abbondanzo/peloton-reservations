/**
 * Parses a raw user-agent string into a friendly device label
 * e.g. "Chrome on Windows", "Safari on iPhone", "Firefox on macOS"
 */
export const parseUserAgent = (ua?: string): string => {
  if (!ua) return "Unknown device";

  const browser = parseBrowser(ua);
  const os = parseOS(ua);

  if (browser && os) return `${browser} on ${os}`;
  if (browser) return browser;
  if (os) return os;
  return "Unknown device";
};

const parseBrowser = (ua: string): string | undefined => {
  // Order matters — check more specific strings first
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("OPR/") || ua.includes("Opera")) return "Opera";
  if (ua.includes("CriOS")) return "Chrome";
  if (ua.includes("FxiOS")) return "Firefox";
  if (ua.includes("Chrome/") && !ua.includes("Chromium")) return "Chrome";
  if (ua.includes("Firefox/")) return "Firefox";
  if (ua.includes("Safari/") && !ua.includes("Chrome")) return "Safari";
  return undefined;
};

const parseOS = (ua: string): string | undefined => {
  if (/iPhone/.test(ua)) return "iPhone";
  if (/iPad/.test(ua)) return "iPad";
  if (/iPod/.test(ua)) return "iPod";
  if (/Android/.test(ua)) return "Android";
  if (/CrOS/.test(ua)) return "ChromeOS";
  if (/Mac OS X|Macintosh/.test(ua)) return "macOS";
  if (/Windows/.test(ua)) return "Windows";
  if (/Linux/.test(ua)) return "Linux";
  return undefined;
};
