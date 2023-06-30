import { STUDIOS } from "./../constants/studios";
import { RootState } from "./../../store/constants/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectStudio = createSelector(
  [(state: RootState) => state.classList],
  (classList) => {
    if (!classList.studioId) return undefined;
    return STUDIOS[classList.studioId];
  }
);
