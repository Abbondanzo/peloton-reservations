import { BookableStatus } from "../../filters/types/BookableStatus";

export interface TimeRange {
  startMin: number;
  endMin: number;
}

export interface Alert {
  id: string;
  created: number;
  instructors: Optional<string[]>;
  disciplines: Optional<string[]>;
  maxStatus: BookableStatus;
  numberOfWeeks: number;
  timeRanges: Optional<TimeRange>[];
  studioId: string;
}
