import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import type { ClassSnapshot } from "shared";
import { CLASS_HISTORY_RETENTION_MS, PATHS } from "shared";
import { database } from "../../firebase/constants/database";
import type { AsyncData } from "../../store/types/AsyncData";

/** Flattened snapshot with the class ID it belongs to. */
export interface ClassHistoryEntry extends ClassSnapshot {
  classId: string;
}

const isValidSnapshot = (val: unknown): val is ClassSnapshot => {
  if (!val || typeof val !== "object") return false;
  const s = val as Record<string, unknown>;
  return (
    typeof s.snapshotAt === "number" &&
    typeof s.starts_at === "string" &&
    Array.isArray(s.instructors) &&
    typeof s.disciplineId === "string" &&
    typeof s.occupancy === "number" &&
    typeof s.maxOccupancy === "number" &&
    typeof s.waitingCount === "number" &&
    typeof s.status === "string"
  );
};

/**
 * Returns a studio's snapshots from the retention window, flattened and sorted
 * by snapshotAt. Snapshots older than the window are each class's retained
 * "added at" anchor, kept for sellout-speed stats — they are not a record of
 * what the alerter saw that day, so simulations ignore them.
 */
export const useClassHistory = (
  studioId: string | null
): AsyncData<ClassHistoryEntry[]> => {
  const [state, setState] = useState<AsyncData<ClassHistoryEntry[]>>({
    state: "loading",
  });

  useEffect(() => {
    if (!studioId) {
      setState({ state: "fulfilled", data: [] });
      return;
    }

    setState({ state: "loading" });
    const db = database;
    if (!db) {
      setState({ state: "failed", error: new Error("No database connection") });
      return;
    }

    const dbRef = ref(db, PATHS.classHistory(studioId));
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const raw = snapshot.val() as Record<
          string,
          Record<string, unknown>
        > | null;

        if (!raw) {
          setState({ state: "fulfilled", data: [] });
          return;
        }

        const cutoff = Date.now() - CLASS_HISTORY_RETENTION_MS;
        const entries: ClassHistoryEntry[] = [];
        for (const [classId, snapshots] of Object.entries(raw)) {
          if (!snapshots || typeof snapshots !== "object") continue;
          for (const snap of Object.values(snapshots)) {
            if (isValidSnapshot(snap) && snap.snapshotAt >= cutoff) {
              entries.push({ ...snap, classId });
            }
          }
        }

        entries.sort((a, b) => b.snapshotAt - a.snapshotAt);

        setState({ state: "fulfilled", data: entries });
      },
      (error) => {
        setState({ state: "failed", error });
      }
    );

    return () => unsubscribe();
  }, [studioId]);

  return state;
};
