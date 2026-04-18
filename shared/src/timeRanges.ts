import type { TimeRange } from "./alerts";

export const ALL_DAY_TIME_RANGE: TimeRange = { startMin: 0, endMin: 24 * 60 };

export const SPECIFIC_DEFAULT_TIME_RANGE: TimeRange = {
  startMin: 7 * 60,
  endMin: 19 * 60,
};

export const DEFAULT_TIME_RANGE: TimeRange = ALL_DAY_TIME_RANGE;

export const isAllDay = (range: TimeRange): boolean =>
  range.startMin === ALL_DAY_TIME_RANGE.startMin &&
  range.endMin === ALL_DAY_TIME_RANGE.endMin;
