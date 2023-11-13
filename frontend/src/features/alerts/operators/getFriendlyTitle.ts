import { Alert, BookableStatus } from "shared";
import { isNotEmpty } from "../../utils/optional";

const getFriendlyStatus = (status: BookableStatus) => {
  switch (status) {
    case "free":
      return "Free";
    case "waitlist":
      return "Waitlisted";
    case "full":
      return "Full";
  }
};

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
  return `${instructorStatus},  ${disciplineStatus}, ${getFriendlyStatus(
    alert.maxStatus
  )}`;
};
