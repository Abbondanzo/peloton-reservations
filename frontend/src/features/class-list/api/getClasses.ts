import { base } from "../../api/base";

interface RawDiscipline {
  id: string;
  name: string;
}

interface RawClass {
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

interface Response {
  data: {
    classes: RawClass[];
    disciplines: RawDiscipline[];
    instructors: RawInstructor[];
  };
}

export const getClasses = (classId: string): Promise<Response> => {
  return base.get(
    `https://api.onepeloton.com/ecomm/studio/${classId}/scheduled_classes`
  );
};
