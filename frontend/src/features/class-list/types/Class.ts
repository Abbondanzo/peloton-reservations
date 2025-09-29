import type { BookableStatus } from "../../filters/types/BookableStatus";
import type { Discipline } from "./Discipline";
import type { Instructor } from "./Instructor";

export interface Class {
  id: string;
  name: string;
  /** ISO timestamp . */
  start: string;
  /** Number of seconds. */
  duration: number;
  customerUrl: string;
  status: BookableStatus;
  instructor: Instructor;
  discipline: Discipline;
}
