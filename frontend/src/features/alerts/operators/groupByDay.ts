import type { ClassSnapshot } from "shared";
import { getLocalDate } from "../../class-list/operators/getLocalDate";

const DAY_ORDER = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export interface DayGroup {
  label: string;
  dayIndex: number;
  snapshots: ClassSnapshot[];
}

/** Groups snapshots by the day the alert would have fired (snapshotAt), in studio timezone. */
export const groupByDay = (
  snapshots: ClassSnapshot[],
  timezone: string
): DayGroup[] => {
  const groups = new Map<
    string,
    { dayIndex: number; snapshots: ClassSnapshot[] }
  >();
  for (const snap of snapshots) {
    const detectedAt = new Date(snap.snapshotAt);
    const label = getLocalDate(detectedAt.toISOString(), timezone, true);
    if (!groups.has(label)) {
      const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        timeZone: timezone,
      }).format(detectedAt);
      groups.set(label, {
        dayIndex: DAY_ORDER.indexOf(weekday),
        snapshots: [],
      });
    }
    groups.get(label)!.snapshots.push(snap);
  }
  return Array.from(groups.entries()).map(
    ([label, { dayIndex, snapshots: snaps }]) => ({
      label,
      dayIndex,
      snapshots: snaps,
    })
  );
};
