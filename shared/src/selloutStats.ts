/**
 * Per-class waitlist fill record for a single instructor. Written by the
 * backend when a class's waitlist fills up, and only for classes we first saw
 * with an empty waitlist — those are the ones we watched fill from the start,
 * so the elapsed time means something. Classes are already at capacity by the
 * time they reach the schedule feed, so how long the seats took to go is not
 * observable; how long the waitlist took to fill is.
 *
 * Stored at `selloutStats/{instructorId}/{classId}`, capped to the most recent
 * 50 classes per instructor.
 */
export interface SelloutRecord {
  classId: string;
  className: string | null;
  instructorName: string;
  /** Unix ms — when the class was first seen, with its waitlist still empty. */
  addedAt: number;
  /** Unix ms elapsed from addedAt until the waitlist first filled up. */
  timeToFullMs: number;
}
