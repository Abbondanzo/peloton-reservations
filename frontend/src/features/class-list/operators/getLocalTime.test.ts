import { describe, expect, it } from "vitest";
import { getLocalTime } from "./getLocalTime";

const NOON_UTC = "2026-04-29T12:00:00.000Z";

describe("getLocalTime", () => {
  it("renders the time in the studio's timezone", () => {
    expect(getLocalTime(NOON_UTC, "America/New_York")).toBe("8:00 AM");
    expect(getLocalTime(NOON_UTC, "Europe/London")).toBe("1:00 PM");
  });

  it("honours the UTC offset carried by the timestamp", () => {
    expect(getLocalTime("2026-04-29T09:00:00-04:00", "America/New_York")).toBe(
      "9:00 AM"
    );
  });

  it("keeps a class on the previous day when the studio is behind UTC", () => {
    // 00:30 UTC is 20:30 the previous evening in New York.
    expect(getLocalTime("2026-04-30T00:30:00.000Z", "America/New_York")).toBe(
      "8:30 PM"
    );
  });

  it("falls back to the runtime timezone when none is given", () => {
    expect(getLocalTime(NOON_UTC)).toBe(
      new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "numeric",
      }).format(new Date(NOON_UTC))
    );
  });
});
