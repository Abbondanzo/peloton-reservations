export const getSearchParams = (key: string): string | null => {
  const searchParameters = new URLSearchParams(window.location.search);
  const maybeValue = searchParameters.get(key);
  return maybeValue === null ? maybeValue : decodeURIComponent(maybeValue);
};

export const setSearchParams = (key: string, value: string) => {
  const searchParameters = new URLSearchParams(window.location.search);
  searchParameters.set(key, encodeURIComponent(value));
  const url =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?" +
    searchParameters.toString();
  window.history.pushState({ path: url }, "", url);
};

export const removeSearchParams = (key: string) => {
  const searchParameters = new URLSearchParams(window.location.search);
  searchParameters.delete(key);
  const url =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?" +
    searchParameters.toString();
  window.history.pushState({ path: url }, "", url);
};
