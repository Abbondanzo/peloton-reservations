import { createSelector } from "@reduxjs/toolkit";
import { selectActiveClassList } from "./selectActiveClassList";

export const selectedLastUpdatedFormatted = createSelector(
  [selectActiveClassList],
  (classList) => {
    if (!classList || classList.status !== "fulfilled") {
      return undefined;
    }
    const formatter = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    return formatter.format(classList.updatedAt);
  }
);
