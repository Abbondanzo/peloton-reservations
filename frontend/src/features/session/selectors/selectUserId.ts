import { createSelector } from "@reduxjs/toolkit";
import { selectSession } from "./selectSession";

export const selectUserId = createSelector([selectSession], (session) => {
  if (session.state !== "fulfilled") {
    return undefined;
  }
  return session.data?.id;
});
