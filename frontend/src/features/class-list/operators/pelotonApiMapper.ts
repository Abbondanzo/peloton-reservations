import { captureMessage } from "@sentry/react";
import type { BookableStatus } from "../../filters/types/BookableStatus";
import type { Class } from "../types/Class";
import type { Discipline } from "../types/Discipline";
import type { Instructor } from "../types/Instructor";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapInstructor = (rawInstructor: any): Instructor => {
  return {
    id: rawInstructor.id,
    name: rawInstructor.name,
    imageUrl: rawInstructor.picture_url,
    display: true,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapInstructors = (response: any): Instructor[] => {
  const unsortedInstructors: Instructor[] = response.results.map(mapInstructor);
  return unsortedInstructors.sort((a, b) => a.name.localeCompare(b.name));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDiscipline = (rawDiscipline: any): Discipline => {
  const height = rawDiscipline.image.original_height || 48;
  const width = rawDiscipline.image.original_width || 48;
  return {
    id: rawDiscipline.id,
    name: rawDiscipline.name,
    iconUrl: rawDiscipline.image.url
      .replace("{height}", height)
      .replace("{width}", width),
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapDisciplines = (response: any): Discipline[] => {
  const unsortedDisciplines: Discipline[] = response.results.map(mapDiscipline);
  return unsortedDisciplines.sort((a, b) => a.name.localeCompare(b.name));
};

const MAX_WAITING_COUNT = 10;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapClass = (rawClass: any): Class => {
  const rawInstructor = rawClass.instructors[0];
  const instructor = rawInstructor
    ? mapInstructor(rawInstructor)
    : { id: "0", name: "Unknown Instructor", imageUrl: "", display: false };

  const maxOccupancy = rawClass.max_occupancy as number;
  const occupancy = rawClass.occupancy as number;
  const waitingCount = rawClass.waiting_count as number;
  let status: BookableStatus = "full";
  if (occupancy < maxOccupancy) {
    status = "free";
  } else if (waitingCount < MAX_WAITING_COUNT) {
    status = "waitlist";
  }

  const start = new Date(rawClass.starts_at);
  const end = new Date(rawClass.ends_at);
  const duration = (end.getTime() - start.getTime()) / 1000;

  if (Number.isNaN(duration)) {
    captureMessage("Computed invalid duration", { extra: { rawClass } });
  }

  return {
    ...rawClass,
    id: rawClass.id,
    name: rawClass.name,
    start: rawClass.starts_at,
    end: rawClass.ends_at,
    duration,
    discipline: mapDiscipline(rawClass.offering_type.category),
    instructor,
    status,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapClasses = (response: any): Class[] => {
  return response.results.map(mapClass);
};
