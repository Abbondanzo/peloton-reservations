import { describe, expect, it } from "vitest";
import { getLocalDate } from "./getLocalDate";

describe("getLocalDate", () => {
  it("renders a short month and day", () => {
    expect(
      getLocalDate("2026-04-29T12:00:00.000Z", "America/New_York", false)
    ).toBe("Apr 29");
  });

  it("renders the weekday and full month when long", () => {
    expect(
      getLocalDate("2026-04-29T12:00:00.000Z", "America/New_York", true)
    ).toBe("Wednesday, April 29");
  });

  it("resolves the calendar day in the studio's timezone", () => {
    // 02:00 UTC on the 30th is still the evening of the 29th in New York.
    const timestamp = "2026-04-30T02:00:00.000Z";
    expect(getLocalDate(timestamp, "America/New_York", false)).toBe("Apr 29");
    expect(getLocalDate(timestamp, "Europe/London", false)).toBe("Apr 30");
  });

  it("handles a timestamp that carries its own offset", () => {
    expect(
      getLocalDate("2026-04-29T23:30:00-04:00", "America/New_York", true)
    ).toBe("Wednesday, April 29");
  });
});
