interface RawDiscipline {
  id: string;
  name: string;
}

export interface RawClass {
  id: string;
  room_id: string;
  name: string | null;
  /**
   * Start time, Unix seconds.
   */
  start: number;
  /**
   * Number of seconds.
   */
  duration: number;
  instructor_id: string;
  customer_url: string;
  bookable: boolean;
  full: boolean;
  cancelled: boolean;
  waitlist_full: boolean;
  free: boolean;
  disciplines: RawDiscipline[];
}

interface Region {
  id: string;
  name: string;
}

interface RawInstructor {
  id: string;
  full_name: string;
  short_name: string;
  image_url: string;
  region: Region;
  display: boolean;
}

export interface RawClassResponse {
  data: {
    classes: RawClass[];
    disciplines: RawDiscipline[];
    instructors: RawInstructor[];
  };
}
