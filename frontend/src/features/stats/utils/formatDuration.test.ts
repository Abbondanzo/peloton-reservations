import { describe, expect, it } from "vitest";
import { formatDuration } from "./formatDuration";

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

describe("formatDuration", () => {
  it("reports sub-hour durations in minutes", () => {
    expect(formatDuration(5 * MINUTE)).toBe("5m");
    expect(formatDuration(59 * MINUTE)).toBe("59m");
  });

  it("reports hours with the remaining minutes", () => {
    expect(formatDuration(HOUR)).toBe("1h 0m");
    expect(formatDuration(2 * HOUR + 30 * MINUTE)).toBe("2h 30m");
  });

  it("drops minutes once the duration reaches a day", () => {
    expect(formatDuration(DAY + 3 * HOUR + 30 * MINUTE)).toBe("1d 3h");
  });

  it("reports sub-minute durations in seconds", () => {
    // A waitlist can fill inside a single poll, so these are real values.
    expect(formatDuration(29_000)).toBe("29s");
    expect(formatDuration(31_000)).toBe("31s");
    expect(formatDuration(59_999)).toBe("60s");
  });

  it("rounds to the nearest minute once past a minute", () => {
    expect(formatDuration(90_000)).toBe("2m");
    expect(formatDuration(MINUTE + 29_000)).toBe("1m");
  });

  it("renders zero as zero seconds", () => {
    expect(formatDuration(0)).toBe("0s");
  });

  it("rolls 60 rounded minutes up into an hour", () => {
    expect(formatDuration(59 * MINUTE + 31_000)).toBe("1h 0m");
  });
});
