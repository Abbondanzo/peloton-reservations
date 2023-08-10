import { createSelector } from "@reduxjs/toolkit";
import { selectSession } from "./selectSession";

export const selectHasSession = createSelector([selectSession], (session) => {
  return session.state === "fulfilled" && !!session.data;
});
