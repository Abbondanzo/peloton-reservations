import type { TimeRange } from "shared";

export const ALL_DAY_TIME_RANGE: TimeRange = {
  startMin: 0,
  endMin: 24 * 60,
};

export const SPECIFIC_DEFAULT_TIME_RANGE: TimeRange = {
  startMin: 7 * 60,
  endMin: 19 * 60,
};

export const DEFAULT_TIME_RANGE: TimeRange = ALL_DAY_TIME_RANGE;

export const isAllDay = (range: TimeRange): boolean =>
  range.startMin === ALL_DAY_TIME_RANGE.startMin &&
  range.endMin === ALL_DAY_TIME_RANGE.endMin;

interface Value {
  minutes: number;
  label: string;
}

export const TIME_RANGE_VALUES: Value[] = new Array(24 * 2)
  .fill(null)
  .map((_, index) => {
    const minutes = index * 30;
    const date = new Date();
    date.setHours(Math.floor(minutes / 60));
    date.setMinutes(minutes % 60);
    const formatter = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    return {
      minutes,
      label: formatter.format(date),
    };
  });
