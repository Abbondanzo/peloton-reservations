import { createSelector } from '@reduxjs/toolkit';
import { selectActiveClassList } from './../../class-list/selectors/selectActiveClassList';

export const selectSortedInstructors = createSelector(
  [selectActiveClassList],
  (classList) => {
    if (classList) {
      const sortedInstructors = [...classList.instructors];
      sortedInstructors.sort((a, b) => a.name.localeCompare(b.name));
      return sortedInstructors;
    }
    return classList;
  }
);
