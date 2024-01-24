export const getLocalTime = (classStart: string, studioTimeZone?: string) => {
  const formatter = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
    timeZone: studioTimeZone,
  });
  return formatter.format(new Date(classStart));
};
