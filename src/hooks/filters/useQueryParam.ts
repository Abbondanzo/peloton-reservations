import { useCallback, useState } from "react";

interface Options {
  name: string;
  defaultValue: string;
}

export const useQueryParam = ({ name, defaultValue }: Options) => {
  const [value, setValue] = useState(defaultValue);
  window.addEventListener("hashchange", () => {
    console.log(window.location.href);
  });
  const onChange = useCallback(
    (newValue: string) => {
      const searchParameters = new URLSearchParams(window.location.search);
      searchParameters.set(name, encodeURIComponent(newValue));
      window.location.search = searchParameters.toString();
      setValue(newValue);
    },
    [name]
  );
  return [value, onChange] as const;
};
