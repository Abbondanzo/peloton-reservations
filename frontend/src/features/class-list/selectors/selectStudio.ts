import { createSelector } from "@reduxjs/toolkit";
import { STUDIOS } from "shared";
import { selectStudioId } from "./selectStudioId";

export const selectStudio = createSelector([selectStudioId], (studioId) => {
  if (!studioId) return undefined;
  return STUDIOS[studioId];
});
