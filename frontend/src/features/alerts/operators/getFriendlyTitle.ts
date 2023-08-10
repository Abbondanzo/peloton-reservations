import { isNotEmpty } from "./../../utils/optional";
import { Alert } from "../types/Alert";

export const getFriendlyTitle = (alert: Alert) => {
  let instructorStatus = "All instructors";
  if (isNotEmpty(alert.instructors)) {
    instructorStatus =
      alert.instructors.length === 1
        ? "1 instructor"
        : `${alert.instructors.length} instructors`;
  }
  let disciplineStatus = "All disciplines";
  if (isNotEmpty(alert.disciplines)) {
    disciplineStatus =
      alert.disciplines.length === 1
        ? "1 discipline"
        : `${alert.disciplines.length} disciplines`;
  }
  return `${instructorStatus},  ${disciplineStatus}`;
};
