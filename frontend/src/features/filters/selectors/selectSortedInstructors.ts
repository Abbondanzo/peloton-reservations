import { createSelector } from "@reduxjs/toolkit";
import { selectActiveClassList } from "./../../class-list/selectors/selectActiveClassList";

export const selectSortedInstructors = createSelector(
  [selectActiveClassList],
  (classList) => {
    if (classList && classList.status === "fulfilled") {
      const sortedInstructors = [...classList.instructors];
      sortedInstructors.sort((a, b) => a.name.localeCompare(b.name));
      return {
        status: "fulfilled",
        instructors: sortedInstructors,
      } as const;
    }
    return classList;
  }
);
