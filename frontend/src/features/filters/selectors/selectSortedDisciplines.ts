import { createSelector } from "@reduxjs/toolkit";
import { selectActiveClassList } from "./../../class-list/selectors/selectActiveClassList";

export const selectSortedDisciplines = createSelector(
  [selectActiveClassList],
  (classList) => {
    if (classList && classList.status === "fulfilled") {
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
