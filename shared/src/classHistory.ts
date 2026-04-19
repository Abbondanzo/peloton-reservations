import type { Alert, BookableStatus } from "./alerts";
import type { MatchDetail, NearMissReason } from "./alertMatching";
import type { RawClass } from "./classApi";
import { getBookableStatus } from "./classStatus";
import { STUDIOS } from "./studios";

export interface SnapshotInstructor {
  id: number;
  name: string;
}

export interface ClassSnapshot {
  /** Unix ms — when this snapshot was written. Also used as the Firebase key. */
  snapshotAt: number;
  starts_at: string;
  instructors: SnapshotInstructor[];
  /** String form of offering_type.category.id */
  disciplineId: string;
  occupancy: number;
  maxOccupancy: number;
  waitingCount: number;
  /** Bookable status computed at snapshot time. */
  status: BookableStatus;
  name: string | null;
}

export const buildSnapshot = (
  rawClass: RawClass,
  now = Date.now()
): ClassSnapshot => ({
  snapshotAt: now,
  starts_at: rawClass.starts_at,
  instructors: rawClass.instructors.map(({ id, name }) => ({ id, name })),
  disciplineId: String(rawClass.offering_type.category.id),
  occupancy: rawClass.occupancy,
  maxOccupancy: rawClass.max_occupancy,
  waitingCount: rawClass.waiting_count,
  status: getBookableStatus(rawClass),
  name: rawClass.name,
});

const checkSnapshotTimeRange = (
  snapshot: ClassSnapshot,
  alert: Alert
): boolean => {
  if (!alert.timeRanges) return true;
  const timeZone = STUDIOS[alert.studioId]?.timezone;
  if (!timeZone) return false;
  const date = new Date(snapshot.starts_at);
  const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const tzDate = new Date(date.toLocaleString("en-US", { timeZone }));
  const offset = utcDate.getTime() - tzDate.getTime();
  date.setTime(date.getTime() - offset);
  const range = alert.timeRanges[date.getDay()];
  if (!range) return false;
  const minuteOfDay = date.getHours() * 60 + date.getMinutes();
  return range.startMin <= minuteOfDay && range.endMin >= minuteOfDay;
};

export const classifySnapshotMatch = (
  snapshot: ClassSnapshot,
  alert: Alert
): MatchDetail => {
  const failures: NearMissReason[] = [];

  const statusFails =
    (alert.maxStatus === "free" && snapshot.status !== "free") ||
    (alert.maxStatus === "waitlist" && snapshot.status === "full");
  if (statusFails) failures.push("status");

  if (
    alert.disciplines &&
    alert.disciplines.indexOf(snapshot.disciplineId) === -1
  )
    failures.push("discipline");

  if (
    alert.instructors &&
    !snapshot.instructors.some(
      (i) => alert.instructors!.indexOf(String(i.id)) !== -1
    )
  )
    failures.push("instructor");

  if (!checkSnapshotTimeRange(snapshot, alert)) failures.push("time");

  if (failures.length === 0) return { type: "match" };
  if (failures.length === 1) return { type: "near-miss", reason: failures[0] };
  return { type: "skipped" };
};
