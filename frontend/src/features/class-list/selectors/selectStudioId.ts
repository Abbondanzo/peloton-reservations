import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/constants/store";

export const selectStudioId = createSelector(
  [(state: RootState) => state.studioSelector],
  (studio) => {
    return studio.studioId;
  }
);
