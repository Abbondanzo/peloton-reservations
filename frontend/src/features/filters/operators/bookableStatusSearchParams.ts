import { isBookableStatus } from "./isBookableStatus";
import { BookableStatus } from "./../types/BookableStatus";
import { getSearchParams, setSearchParams } from "./searchParams";

const KEY = "status";

export const getBookableStatusSearchParams = (
  defaultValue: BookableStatus[]
): BookableStatus[] => {
  const value = getSearchParams(KEY);
  if (value === null) {
    return defaultValue;
  }
  return value.split(";").filter(isBookableStatus);
};

export const setBookableStatusSearchParams = (show: BookableStatus[]) => {
  setSearchParams(KEY, show.join(";"));
};
