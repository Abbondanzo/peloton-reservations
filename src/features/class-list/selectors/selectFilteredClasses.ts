import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/constants/store";
import { Class } from "../types/Class";

const selectBookableStatus = (state: RootState) =>
  state.filters.showBookableStatus;

const selectDisciplines = (state: RootState) =>
  state.filters.selectedDisciplines;

const selectInstructors = (state: RootState) =>
  state.filters.selectedInstructors;

const selectClasses = (_: RootState, classes: Class[]) => classes;

export const selectFilteredClasses = createSelector(
  [selectBookableStatus, selectDisciplines, selectInstructors, selectClasses],
  (bookableStatus, selectedDisciplines, selectedInstructors, classes) => {
    return classes
      .filter((clazz) => {
        if (bookableStatus === "waitlist") return !clazz.waitlistFull;
        if (bookableStatus === "free") return clazz.free;
        if (bookableStatus === "full") return !clazz.cancelled;
        return false;
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
