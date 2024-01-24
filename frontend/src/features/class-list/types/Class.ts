import { BookableStatus } from "../../filters/types/BookableStatus";
import { Discipline } from "./Discipline";
import { Instructor } from "./Instructor";

export interface Class {
  id: string;
  name: string;
  /** ISO timestamp . */
  start: string;
  /** Number of seconds. */
  duration: number;
  status: BookableStatus;
  instructor: Instructor;
  discipline: Discipline;
}
