import { describe, expect, it } from "vitest";
import {
  ALL_DAY_TIME_RANGE,
  DEFAULT_TIME_RANGE,
  SPECIFIC_DEFAULT_TIME_RANGE,
  isAllDay,
} from "./timeRanges";

describe("time range constants", () => {
  it("spans a whole day for the all-day range", () => {
    expect(ALL_DAY_TIME_RANGE).toEqual({ startMin: 0, endMin: 1440 });
  });

  it("defaults new alerts to all day", () => {
    expect(DEFAULT_TIME_RANGE).toEqual(ALL_DAY_TIME_RANGE);
  });

  it("offers 7am–7pm as the specific-hours starting point", () => {
    expect(SPECIFIC_DEFAULT_TIME_RANGE).toEqual({
      startMin: 420,
      endMin: 1140,
    });
  });
});

describe("isAllDay", () => {
  it("is true for the all-day range", () => {
    expect(isAllDay(ALL_DAY_TIME_RANGE)).toBe(true);
  });

  it("is false when either bound is narrowed", () => {
    expect(isAllDay({ startMin: 1, endMin: 1440 })).toBe(false);
    expect(isAllDay({ startMin: 0, endMin: 1439 })).toBe(false);
    expect(isAllDay(SPECIFIC_DEFAULT_TIME_RANGE)).toBe(false);
  });
});
