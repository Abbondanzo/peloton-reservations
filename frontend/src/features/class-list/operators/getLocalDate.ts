export const getLocalDate = (
  classStart: string,
  studioTimeZone: string,
  long: boolean
) => {
  const classStartDate = new Date(classStart);
  const month = new Intl.DateTimeFormat(undefined, {
    month: long ? "long" : "short",
    timeZone: studioTimeZone,
  }).format(classStartDate);
  const day = new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    timeZone: studioTimeZone,
  }).format(classStartDate);
  if (long) {
    const dayOfWeek = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      timeZone: studioTimeZone,
    }).format(classStartDate);
    return `${dayOfWeek}, ${month} ${day}`;
  }
  return `${month} ${day}`;
};
