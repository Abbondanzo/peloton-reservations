const getAllSearchParams = () => {
  const params = window.location.href.split("?")[1] || "";
  return new URLSearchParams(params);
};

const buildUrl = (searchParams: URLSearchParams) => {
  const searchParamsString = searchParams.toString();
  const searchParamsSuffix = searchParamsString ? `?${searchParamsString}` : "";
  return (
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    window.location.hash.split("?")[0] +
    searchParamsSuffix
  );
};

export const getSearchParams = (key: string): string | null => {
  const searchParameters = getAllSearchParams();
  const maybeValue = searchParameters.get(key);
  return maybeValue === null ? maybeValue : decodeURIComponent(maybeValue);
};

export const setSearchParams = (key: string, value: string) => {
  const searchParameters = getAllSearchParams();
  searchParameters.set(key, encodeURIComponent(value));
  const url = buildUrl(searchParameters);
  window.history.pushState({ path: url }, "", url);
};

export const removeSearchParams = (key: string) => {
  const searchParameters = getAllSearchParams();
  searchParameters.delete(key);
  const url = buildUrl(searchParameters);
  window.history.pushState({ path: url }, "", url);
};
