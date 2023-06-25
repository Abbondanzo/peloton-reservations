import { gql } from "@apollo/client";

interface Discipline {
  id: string;
  name: string;
}

interface Class {
  id: string;
  name: string | null;
  room_id: string;
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
  disciplines: Discipline[];
}

interface Region {
  id: string;
  name: string;
}

interface Instructor {
  id: string;
  full_name: string;
  short_name: string;
  image_url: string;
  region: Region;
  display: boolean;
}

export interface GetClasses {
  getClasses: {
    data: {
      classes: Class[];
      disciplines: Discipline[];
      instructors: Instructor[];
    };
  };
}

export const getClasses = gql`
  query GetClasses($classId: String!) {
    getClasses(classId: $classId)
      @rest(path: "ecomm/studio/:classId/scheduled_classes") {
      data {
        classes {
          id
          name
          room_id
          start
          duration
          instructor_id
          bookable
          full
          cancelled
          waitlist_full
          free
          disciplines {
            id
            name
          }
        }
        disciplines {
          id
          name
        }
        instructors {
          id
          full_name
          short_name
          image_url
          region
          display
        }
      }
    }
  }
`;
