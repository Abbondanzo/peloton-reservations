import type { BookableStatus } from "./alerts";
import type { RawClass } from "./classApi";

/** Fallback waitlist capacity for classes whose own cap is missing or unusable. */
export const WAITLIST_MAX = 10;

/**
 * A class's waitlist capacity. Peloton sets this per class — a studio class
 * can hold more than the default 10 — so a hardcoded cap marks the busier
 * ones full while their waitlist is still taking people.
 */
export const getWaitlistMax = (rawClass: RawClass): number => {
  const override = rawClass.waitlist_max_override;
  if (typeof override === "number" && override > 0) return override;
  const offeringMax = rawClass.offering_type?.waitlist_max;
  if (typeof offeringMax === "number" && offeringMax > 0) return offeringMax;
  return WAITLIST_MAX;
};

export const isFree = (rawClass: RawClass): boolean =>
  rawClass.occupancy < rawClass.max_occupancy;

export const isWaitlistFull = (rawClass: RawClass): boolean =>
  rawClass.waiting_count >= getWaitlistMax(rawClass);

export const getBookableStatus = (rawClass: RawClass): BookableStatus => {
  if (isFree(rawClass)) return "free";
  if (!isWaitlistFull(rawClass)) return "waitlist";
  return "full";
};
