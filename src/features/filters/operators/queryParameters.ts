const getSearchParams = (key: string): string | null => {
  const searchParameters = new URLSearchParams(window.location.search);
  return searchParameters.get(key);
};

const setSearchParams = (key: string, value: string) => {
  const searchParameters = new URLSearchParams(window.location.search);
  searchParameters.set(key, encodeURIComponent(value));
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.set(key, value);
  const url =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?" +
    searchParams.toString();
  window.history.pushState({ path: url }, "", url);
};

export const shouldShowWaitlist = (defaultValue: boolean) => {
  const value = getSearchParams("waitlist");
  if (value === null) {
    return defaultValue;
  }
  return value === "true";
};

export const setShouldShowWaitlist = (show: boolean) => {
  setSearchParams("waitlist", String(show));
};
