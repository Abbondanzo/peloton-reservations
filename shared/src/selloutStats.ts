/**
 * Per-class sellout-speed record for a single instructor. Written by the
 * backend when a class first reaches "waitlist" (free -> waitlist) and/or
 * "full" (waitlist -> full, or free -> full when the waitlist is skipped).
 * Stored at `selloutStats/{instructorId}/{classId}`, capped to the most
 * recent 50 classes per instructor.
 */
export interface SelloutRecord {
  classId: string;
  className: string | null;
  instructorName: string;
  /** Unix ms — when the class was first seen (from its earliest classHistory snapshot). */
  addedAt: number;
  /** Unix ms elapsed from addedAt until the class first went to waitlist, or null if not yet reached. */
  timeToWaitlistMs: number | null;
  /** Unix ms elapsed from addedAt until the waitlist first became full, or null if not yet reached. */
  timeToFullMs: number | null;
}
