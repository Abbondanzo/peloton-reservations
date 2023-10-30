export const getLocalDate = (
  classStart: Date,
  studioTimeZone: string,
  long: boolean
) => {
  const month = new Intl.DateTimeFormat(undefined, {
    month: long ? "long" : "short",
    timeZone: studioTimeZone,
  }).format(classStart);
  const day = new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    timeZone: studioTimeZone,
  }).format(classStart);
  if (long) {
    const dayOfWeek = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      timeZone: studioTimeZone,
    }).format(classStart);
    return `${dayOfWeek}, ${month} ${day}`;
  }
  return `${month} ${day}`;
};
