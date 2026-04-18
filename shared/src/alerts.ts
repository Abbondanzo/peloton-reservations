import type { Optional } from "./optional";

export type { Optional };

export type BookableStatus = "free" | "waitlist" | "full";

export const BOOKABLE_STATUS_KEYS: readonly BookableStatus[] = [
  "free",
  "waitlist",
  "full",
];

export const isBookableStatus = (v: string): v is BookableStatus =>
  BOOKABLE_STATUS_KEYS.indexOf(v as BookableStatus) !== -1;

export interface TimeRange {
  startMin: number;
  endMin: number;
}

export interface Alert {
  id: string;
  created: number;
  name?: string;
  instructors: Optional<string[]>;
  disciplines: Optional<string[]>;
  maxStatus: BookableStatus;
  timeRanges: Optional<TimeRange>[];
  studioId: string;
}

export interface AlertPreferences {
  lastUpdated: number;
  notificationDelayMin: number;
}
