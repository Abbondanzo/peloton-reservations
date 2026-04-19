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

/** Returns all snapshots for a studio, flattened and sorted by starts_at. */
export const useClassHistory = (
  studioId: string
): AsyncData<ClassHistoryEntry[]> => {
  const [state, setState] = useState<AsyncData<ClassHistoryEntry[]>>({
    state: "loading",
  });

  useEffect(() => {
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
          Record<string, ClassSnapshot>
        > | null;

        if (!raw) {
          setState({ state: "fulfilled", data: [] });
          return;
        }

        const entries: ClassHistoryEntry[] = [];
        for (const [classId, snapshots] of Object.entries(raw)) {
          for (const snap of Object.values(snapshots)) {
            entries.push({ ...snap, classId });
          }
        }

        entries.sort(
          (a, b) =>
            new Date(a.starts_at).getTime() - new Date(b.starts_at).getTime()
        );

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
