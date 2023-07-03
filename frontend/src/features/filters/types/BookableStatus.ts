export const BOOKABLE_STATUS_KEYS = ["free", "waitlist", "full"] as const;

export type BookableStatus = (typeof BOOKABLE_STATUS_KEYS)[number];
