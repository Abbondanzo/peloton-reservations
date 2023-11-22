export const getLocalTime = (classStart: Date, studioTimeZone?: string) => {
  const formatter = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
    timeZone: studioTimeZone,
  });
  return formatter.format(classStart);
};
