import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./../../store/constants/store";

export const selectStudioId = createSelector(
  [(state: RootState) => state.classList],
  (classList) => {
    return classList.studioId;
  }
);
