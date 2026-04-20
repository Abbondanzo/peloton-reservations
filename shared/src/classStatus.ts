import type { BookableStatus } from "./alerts";
import type { RawClass } from "./classApi";

export const WAITLIST_MAX = 10;

export const isFree = (rawClass: RawClass): boolean =>
  rawClass.occupancy < rawClass.max_occupancy;

export const isWaitlistFull = (rawClass: RawClass): boolean =>
  rawClass.waiting_count >= WAITLIST_MAX;

export const getBookableStatus = (rawClass: RawClass): BookableStatus => {
  if (isFree(rawClass)) return "free";
  if (!isWaitlistFull(rawClass)) return "waitlist";
  return "full";
};
