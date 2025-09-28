import type { TimeRange } from "shared";

export const isFirstEditableTimeRange = (
  timeRanges: Optional<TimeRange>[],
  index: number
) => {
  for (let i = 0; i < timeRanges.length; i++) {
    if (timeRanges[i]) {
      return i === index;
    }
  }
  return false;
};
