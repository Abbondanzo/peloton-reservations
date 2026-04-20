export {
  ALL_DAY_TIME_RANGE,
  DEFAULT_TIME_RANGE,
  isAllDay,
  SPECIFIC_DEFAULT_TIME_RANGE,
} from "shared";

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
