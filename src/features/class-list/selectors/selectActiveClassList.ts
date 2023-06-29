import { RootState } from "./../../store/constants/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectActiveClassList = createSelector(
  [(state: RootState) => state.classList],
  (classList) => {
    if (!classList.studioId) return undefined;
    return classList.classLists[classList.studioId];
  }
);
