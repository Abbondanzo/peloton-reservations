import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import type { SelloutRecord } from "shared";
import { database } from "../../firebase/constants/database";
import type { AsyncData } from "../../store/types/AsyncData";

export interface InstructorSelloutStats {
  instructorId: string;
  instructorName: string;
  /** Classes whose waitlist we watched fill from empty. */
  classCount: number;
  medianTimeToWaitlistFullMs: number;
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
 * Records predate the empty-waitlist rule, so some were measured from a class
 * caught part-way through filling and read shorter than the real fill. They
 * are kept — they age out of the per-instructor cap on their own.
 */
const isValidRecord = (val: unknown): val is SelloutRecord => {
  if (!val || typeof val !== "object") return false;
  const r = val as Record<string, unknown>;
  return (
    typeof r.classId === "string" &&
    typeof r.instructorName === "string" &&
    typeof r.addedAt === "number" &&
    typeof r.timeToFullMs === "number" &&
    Number.isFinite(r.timeToFullMs) &&
    r.timeToFullMs > 0
  );
};

/**
 * Reads `selloutStats/{instructorId}/{classId}` and rolls each instructor's
 * records (already capped to their last 50 classes by the backend) up into a
 * median waitlist fill time.
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

          const fillTimes = records.map((r) => r.timeToFullMs);
          const medianFill = median(fillTimes);
          if (medianFill === null) continue;

          result.push({
            instructorId,
            instructorName: records[0].instructorName,
            classCount: records.length,
            medianTimeToWaitlistFullMs: medianFill,
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
