import { Discipline } from "./Discipline";
import { Instructor } from "./Instructor";

export interface Class {
  id: string;
  name: string;
  /**
   * Start time, Unix seconds.
   */
  start: number;
  /**
   * Number of seconds.
   */
  duration: number;
  instructor: Instructor;
  bookable: boolean;
  full: boolean;
  cancelled: boolean;
  waitlistFull: boolean;
  free: boolean;
  discipline: Discipline;
}
