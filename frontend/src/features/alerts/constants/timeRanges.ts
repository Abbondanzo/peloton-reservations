import type { TimeRange } from "shared";

export const DEFAULT_TIME_RANGE: TimeRange = {
  startMin: 7 * 60,
  endMin: 19 * 60,
};

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
