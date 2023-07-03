import { Class } from "./../types/Class";

export const getLocalDate = (
  clazz: Class,
  studioTimeZone: string,
  long: boolean
) => {
  const date = new Date(clazz.start * 1000);
  const month = new Intl.DateTimeFormat(undefined, {
    month: long ? "long" : "short",
    timeZone: studioTimeZone,
  }).format(date);
  const day = new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    timeZone: studioTimeZone,
  }).format(date);
  if (long) {
    const dayOfWeek = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      timeZone: studioTimeZone,
    }).format(date);
    return `${dayOfWeek}, ${month} ${day}`;
  }
  return `${month} ${day}`;
};
