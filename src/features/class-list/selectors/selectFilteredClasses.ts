import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/constants/store";
import { Class } from "../types/Class";

const selectBookableStatus = (state: RootState) =>
  state.filters.showBookableStatus;

const selectInstructors = (state: RootState) =>
  state.filters.selectedInstructors;

const selectClasses = (_: RootState, classes: Class[]) => classes;

export const selectFilteredClasses = createSelector(
  [selectBookableStatus, selectInstructors, selectClasses],
  (bookableStatus, selectedInstructors, classes) => {
    if (bookableStatus === "full") return classes;
    return classes
      .filter((clazz) => {
        if (bookableStatus === "waitlist") return !clazz.waitlistFull;
        if (bookableStatus === "free") return clazz.free;
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
      });
  }
);
