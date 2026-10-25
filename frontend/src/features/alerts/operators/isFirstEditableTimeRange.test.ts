import { describe, expect, it } from "vitest";
import type { TimeRange } from "shared";
import { isFirstEditableTimeRange } from "./isFirstEditableTimeRange";

const RANGE: TimeRange = { startMin: 0, endMin: 1440 };

describe("isFirstEditableTimeRange", () => {
  it("marks the only enabled day", () => {
    const ranges = [null, null, RANGE, null, null, null, null];
    expect(isFirstEditableTimeRange(ranges, 2)).toBe(true);
  });

  it("marks only the earliest enabled day", () => {
    const ranges = [null, RANGE, RANGE, null, null, null, null];
    expect(isFirstEditableTimeRange(ranges, 1)).toBe(true);
    expect(isFirstEditableTimeRange(ranges, 2)).toBe(false);
  });

  it("is false for a disabled day", () => {
    const ranges = [null, RANGE, null, null, null, null, null];
    expect(isFirstEditableTimeRange(ranges, 0)).toBe(false);
  });

  it("is false when no day is enabled", () => {
    expect(isFirstEditableTimeRange(new Array(7).fill(null), 0)).toBe(false);
  });

  it("is false for an empty schedule", () => {
    expect(isFirstEditableTimeRange([], 0)).toBe(false);
  });
});
