import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../firebase/constants/database";
import type { AsyncData } from "../../store/types/AsyncData";

export interface StudioDiffMetrics {
  added: number;
  changed: number;
  removed: number;
}

export interface NotificationMetrics {
  sent: number;
  failed: number;
  usersReached: number;
}

export interface DayMetrics {
  date: string; // "YYYY-MM-DD"
  diffs: { [studioId: string]: StudioDiffMetrics };
  notifications: NotificationMetrics;
}

function buildDateKeys(days: number): string[] {
  const keys: string[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    keys.push(d.toISOString().slice(0, 10));
  }
  return keys;
}

export function useMetrics(days = 14): AsyncData<DayMetrics[]> {
  const [state, setState] = useState<AsyncData<DayMetrics[]>>({
    state: "idle",
  });

  useEffect(() => {
    if (!database) {
      setState({ state: "failed", error: new Error("No database") });
      return;
    }
    setState({ state: "loading" });
    get(ref(database, "metrics"))
      .then((snapshot) => {
        const raw = (snapshot.val() ?? {}) as Record<string, unknown>;
        const dateKeys = buildDateKeys(days);
        const result: DayMetrics[] = dateKeys.map((date) => {
          const day = (raw[date] ?? {}) as Record<string, unknown>;
          const rawDiffs = (day.diffs ?? {}) as Record<
            string,
            Record<string, number>
          >;
          const diffs: DayMetrics["diffs"] = {};
          for (const [studioId, studioData] of Object.entries(rawDiffs)) {
            diffs[studioId] = {
              added: studioData.added ?? 0,
              changed: studioData.changed ?? 0,
              removed: studioData.removed ?? 0,
            };
          }
          const n = (day.notifications ?? {}) as Record<string, number>;
          return {
            date,
            diffs,
            notifications: {
              sent: n.sent ?? 0,
              failed: n.failed ?? 0,
              usersReached: n.usersReached ?? 0,
            },
          };
        });
        setState({ state: "fulfilled", data: result });
      })
      .catch((error: Partial<Error>) => {
        setState({ state: "failed", error });
      });
  }, [days]);

  return state;
}
