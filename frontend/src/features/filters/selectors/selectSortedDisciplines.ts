import { createSelector } from '@reduxjs/toolkit';
import { selectActiveClassList } from './../../class-list/selectors/selectActiveClassList';

export const selectSortedDisciplines = createSelector(
  [selectActiveClassList],
  (classList) => {
    if (classList) {
      const sortedDisciplines = [...classList.disciplines];
      sortedDisciplines.sort((a, b) => a.name.localeCompare(b.name));
      return sortedDisciplines;
    }
    return classList;
  }
);
