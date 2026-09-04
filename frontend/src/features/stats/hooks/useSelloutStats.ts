import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import type { SelloutRecord } from "shared";
import { database } from "../../firebase/constants/database";
import type { AsyncData } from "../../store/types/AsyncData";

export interface InstructorSelloutStats {
  instructorId: string;
  instructorName: string;
  classCount: number;
  medianTimeToWaitlistMs: number | null;
  waitlistSampleSize: number;
  medianTimeToFullMs: number | null;
  fullSampleSize: number;
}

function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

/**
 * A milestone is only a usable sample when it is a positive duration. Older
 * records can carry a zero, written when the backend had no earlier snapshot
 * to measure the class's sellout time from.
 */
const isMeasuredDuration = (v: unknown): v is number =>
  typeof v === "number" && Number.isFinite(v) && v > 0;

const isValidRecord = (val: unknown): val is SelloutRecord => {
  if (!val || typeof val !== "object") return false;
  const r = val as Record<string, unknown>;
  return (
    typeof r.classId === "string" &&
    typeof r.instructorName === "string" &&
    typeof r.addedAt === "number"
  );
};

/**
 * Reads `selloutStats/{instructorId}/{classId}` and rolls each instructor's
 * records (already capped to their last 50 classes by the backend) up into
 * median time-to-waitlist and time-to-full figures.
 */
export function useSelloutStats(): AsyncData<InstructorSelloutStats[]> {
  const [state, setState] = useState<AsyncData<InstructorSelloutStats[]>>({
    state: "idle",
  });

  useEffect(() => {
    if (!database) {
      setState({ state: "failed", error: new Error("No database") });
      return;
    }
    setState({ state: "loading" });
    const dbRef = ref(database, "selloutStats");
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const raw = (snapshot.val() ?? {}) as Record<string, unknown>;
        const result: InstructorSelloutStats[] = [];

        for (const [instructorId, recordsVal] of Object.entries(raw)) {
          if (!recordsVal || typeof recordsVal !== "object") continue;
          const records = Object.values(
            recordsVal as Record<string, unknown>
          ).filter(isValidRecord);
          if (records.length === 0) continue;

          const waitlistTimes = records
            .map((r) => r.timeToWaitlistMs)
            .filter(isMeasuredDuration);
          const fullTimes = records
            .map((r) => r.timeToFullMs)
            .filter(isMeasuredDuration);

          result.push({
            instructorId,
            instructorName: records[0].instructorName,
            classCount: records.length,
            medianTimeToWaitlistMs: median(waitlistTimes),
            waitlistSampleSize: waitlistTimes.length,
            medianTimeToFullMs: median(fullTimes),
            fullSampleSize: fullTimes.length,
          });
        }

        setState({ state: "fulfilled", data: result });
      },
      (error) => {
        setState({ state: "failed", error });
      }
    );

    return () => unsubscribe();
  }, []);

  return state;
}
