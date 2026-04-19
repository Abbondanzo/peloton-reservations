import type { Alert } from "./alerts";
import type { RawClass } from "./classApi";
import { isFree, isWaitlistFull } from "./classStatus";
import { STUDIOS } from "./studios";

export type ChangeType = "added" | "became_free" | "waitlist_opened";

export type NearMissReason = "instructor" | "time" | "discipline" | "status";

export type MatchDetail =
  | { type: "match" }
  | { type: "near-miss"; reason: NearMissReason }
  | { type: "skipped" };

const checkStatus = (rawClass: RawClass, alert: Alert): boolean => {
  if (alert.maxStatus === "free" && !isFree(rawClass)) return false;
  if (alert.maxStatus === "waitlist" && isWaitlistFull(rawClass)) return false;
  return true;
};

const checkDiscipline = (rawClass: RawClass, alert: Alert): boolean => {
  if (!alert.disciplines) return true;
  return alert.disciplines.some(
    (d) => d === String(rawClass.offering_type.category.id)
  );
};

const checkInstructor = (rawClass: RawClass, alert: Alert): boolean => {
  if (!alert.instructors) return true;
  return rawClass.instructors.some(
    (i) => alert.instructors!.indexOf(String(i.id)) !== -1
  );
};

const checkTimeRange = (rawClass: RawClass, alert: Alert): boolean => {
  if (!alert.timeRanges) return true;
  const timeZone = STUDIOS[alert.studioId]?.timezone;
  if (!timeZone) return false;
  const date = new Date(rawClass.starts_at);
  const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const tzDate = new Date(date.toLocaleString("en-US", { timeZone }));
  const offset = utcDate.getTime() - tzDate.getTime();
  date.setTime(date.getTime() - offset);
  const range = alert.timeRanges[date.getDay()];
  if (!range) return false;
  const minuteOfDay = date.getHours() * 60 + date.getMinutes();
  return range.startMin <= minuteOfDay && range.endMin >= minuteOfDay;
};

export const matchesAlert = (rawClass: RawClass, alert: Alert): boolean =>
  checkStatus(rawClass, alert) &&
  checkDiscipline(rawClass, alert) &&
  checkInstructor(rawClass, alert) &&
  checkTimeRange(rawClass, alert);

export const classifyMatch = (
  rawClass: RawClass,
  alert: Alert
): MatchDetail => {
  const failures: NearMissReason[] = [];
  if (!checkStatus(rawClass, alert)) failures.push("status");
  if (!checkDiscipline(rawClass, alert)) failures.push("discipline");
  if (!checkInstructor(rawClass, alert)) failures.push("instructor");
  if (!checkTimeRange(rawClass, alert)) failures.push("time");
  if (failures.length === 0) return { type: "match" };
  if (failures.length === 1) return { type: "near-miss", reason: failures[0] };
  return { type: "skipped" };
};

export const getChangeType = (
  alert: Alert,
  oldClass: RawClass,
  newClass: RawClass
): ChangeType | null => {
  if (!matchesAlert(newClass, alert)) return null;
  if (alert.maxStatus === "free" && !isFree(oldClass) && isFree(newClass)) {
    return "became_free";
  }
  if (
    alert.maxStatus === "waitlist" &&
    isWaitlistFull(oldClass) &&
    !isWaitlistFull(newClass)
  ) {
    return "waitlist_opened";
  }
  return null;
};
