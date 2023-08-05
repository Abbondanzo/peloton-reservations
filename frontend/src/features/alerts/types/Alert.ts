import { Location } from "../../class-list/types/Location";
import { BookableStatus } from "../../filters/types/BookableStatus";

export interface TimeRange {
  startMin: number;
  endMin: number;
}

export interface Alert {
  id: string;
  created: number;
  instructors: string[] | null;
  disciplines: string[] | null;
  maxStatus: BookableStatus;
  numberOfWeeks: number;
  timeRanges: (TimeRange | null)[];
  studio: Location;
}
