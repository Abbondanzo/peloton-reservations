import { createSelector } from "@reduxjs/toolkit";
import { selectSession } from "./selectSession";

export const selectUserId = createSelector([selectSession], (session) => {
  return session.session?.id;
});
