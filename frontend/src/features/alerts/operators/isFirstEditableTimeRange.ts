import { TimeRange } from "./../types/Alert";

export const isFirstEditableTimeRange = (
  timeRanges: Optional<TimeRange>[],
  index: number
) => {
  for (let i = 0; i < timeRanges.length; i++) {
    if (!!timeRanges[i]) {
      return i === index;
    }
  }
  return false;
};
