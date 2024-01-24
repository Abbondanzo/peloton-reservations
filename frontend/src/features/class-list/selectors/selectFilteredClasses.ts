import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/constants/store";
import { Class } from "../types/Class";

const selectBookableStatuses = (state: RootState) =>
  state.filters.selectedBookableStatuses;

const selectDisciplines = (state: RootState) =>
  state.filters.selectedDisciplines;

const selectInstructors = (state: RootState) =>
  state.filters.selectedInstructors;

const selectClasses = (_: RootState, classes: Class[]) => classes;

export const selectFilteredClasses = createSelector(
  [selectBookableStatuses, selectDisciplines, selectInstructors, selectClasses],
  (bookableStatuses, selectedDisciplines, selectedInstructors, classes) => {
    return classes
      .filter((clazz) => {
        return bookableStatuses.includes(clazz.status);
      })
      .filter((clazz) => {
        if (selectedInstructors.length > 0) {
          return selectedInstructors.some(
            (instructor) => instructor === clazz.instructor.id
          );
        } else {
          return true;
        }
      })
      .filter((clazz) => {
        if (selectedDisciplines.length > 0) {
          return selectedDisciplines.includes(clazz.discipline.id);
        } else {
          return true;
        }
      });
  }
);
