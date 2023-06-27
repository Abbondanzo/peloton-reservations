import { RootState } from "./../../store/constants/store";
import { createSelector } from "@reduxjs/toolkit";

const selectClassList = (state: RootState) => state.classList;

export const selectSortedDisciplines = createSelector(
  [selectClassList],
  (classList) => {
    if (classList.status === "fulfilled") {
      const sortedDisciplines = [...classList.disciplines];
      sortedDisciplines.sort((a, b) => a.name.localeCompare(b.name));
      return {
        status: "fulfilled",
        disciplines: sortedDisciplines,
      } as const;
    }
    return classList;
  }
);
