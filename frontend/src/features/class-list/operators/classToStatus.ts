import { BookableStatus } from "../../filters/types/BookableStatus";
import { Class } from "../types/Class";

export const classToStatus = (clazz: Class): BookableStatus | undefined => {
  if (clazz.free) return "free";
  if (!clazz.waitlistFull) return "waitlist";
  if (!clazz.cancelled) return "full";
};
