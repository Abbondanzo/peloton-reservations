import { isBookableStatus } from "./isBookableStatus";
import { BookableStatus } from "./../types/BookableStatus";
import { getSearchParams, setSearchParams } from "./searchParams";

const KEY = "status";

export const getBookableStatusSearchParams = (
  defaultValue: BookableStatus
): BookableStatus => {
  const value = getSearchParams(KEY);
  if (value === null || !isBookableStatus(value)) {
    return defaultValue;
  }
  return value;
};

export const setBookableStatusSearchParams = (show: BookableStatus) => {
  setSearchParams(KEY, show);
};
