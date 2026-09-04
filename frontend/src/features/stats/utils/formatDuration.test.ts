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

  it("rounds to the nearest minute", () => {
    expect(formatDuration(29_000)).toBe("0m");
    expect(formatDuration(31_000)).toBe("1m");
    expect(formatDuration(90_000)).toBe("2m");
  });

  it("renders zero as zero minutes", () => {
    expect(formatDuration(0)).toBe("0m");
  });

  it("rolls 60 rounded minutes up into an hour", () => {
    expect(formatDuration(59 * MINUTE + 31_000)).toBe("1h 0m");
  });
});
