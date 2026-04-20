import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import type { ClassSnapshot } from "shared";
import { PATHS } from "shared";
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

/** Returns all snapshots for a studio, flattened and sorted by snapshotAt. */
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

        const entries: ClassHistoryEntry[] = [];
        for (const [classId, snapshots] of Object.entries(raw)) {
          if (!snapshots || typeof snapshots !== "object") continue;
          for (const snap of Object.values(snapshots)) {
            if (isValidSnapshot(snap)) {
              entries.push({ ...snap, classId });
            }
          }
        }

        entries.sort((a, b) => a.snapshotAt - b.snapshotAt);

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
