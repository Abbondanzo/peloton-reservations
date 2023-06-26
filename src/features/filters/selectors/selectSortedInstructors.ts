import { RootState } from "./../../store/constants/store";
import { createSelector } from "@reduxjs/toolkit";

const selectClassList = (state: RootState) => state.classList;

export const selectSortedInstructors = createSelector(
  [selectClassList],
  (classList) => {
    if (classList.status === "fulfilled") {
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
