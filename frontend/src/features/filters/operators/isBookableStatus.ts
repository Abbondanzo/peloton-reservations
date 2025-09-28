import {
  BOOKABLE_STATUS_KEYS,
  type BookableStatus,
} from "../types/BookableStatus";

export const isBookableStatus = (
  maybeStatus: string
): maybeStatus is BookableStatus => {
  return BOOKABLE_STATUS_KEYS.includes(maybeStatus as BookableStatus);
};
