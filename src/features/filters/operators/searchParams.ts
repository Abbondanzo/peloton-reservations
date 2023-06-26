export const getSearchParams = (key: string): string | null => {
  const searchParameters = new URLSearchParams(window.location.search);
  const maybeValue = searchParameters.get(key);
  return maybeValue === null ? maybeValue : decodeURIComponent(maybeValue);
};

export const setSearchParams = (key: string, value: string) => {
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
