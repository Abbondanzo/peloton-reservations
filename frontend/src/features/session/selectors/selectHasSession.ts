import { createSelector } from "@reduxjs/toolkit";
import { selectSession } from "./selectSession";

export const selectHasSession = createSelector([selectSession], (session) => {
  return !session.loading && !!session.session;
});
