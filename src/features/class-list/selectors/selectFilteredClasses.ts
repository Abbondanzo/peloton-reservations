import { RootState } from "../../store/constants/store";
import { Class } from "../types/Class";

export const selectFilteredClasses = (state: RootState, classes: Class[]) => {
  if (state.filters.showBookableStatus === "full") return classes;
  return classes.filter((clazz) => {
    if (state.filters.showBookableStatus === "waitlist")
      return !clazz.waitlistFull;
    if (state.filters.showBookableStatus === "free") return clazz.free;
    return false;
  });
};
