import { Location } from "../../class-list/types/Location";
import { BookableStatus } from "../../filters/types/BookableStatus";

export interface Alert {
  id: string;
  instructors: string[];
  disciplines: string[];
  maxStatus: BookableStatus;
  dateRanges: [number, number][];
  studio: Location;
}
