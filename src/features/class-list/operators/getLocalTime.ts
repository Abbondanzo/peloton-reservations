import { Class } from "./../types/Class";

export const getLocalTime = (clazz: Class, studioTimeZone: string) => {
  const date = new Date(clazz.start * 1000);
  const formatter = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
    timeZone: studioTimeZone,
  });
  return formatter.format(date);
};
