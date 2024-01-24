import { captureMessage } from "@sentry/react";
import { BookableStatus } from "../../filters/types/BookableStatus";
import { Class } from "../types/Class";
import { Discipline } from "../types/Discipline";
import { Instructor } from "../types/Instructor";

const mapInstructor = (rawInstructor: any): Instructor => {
  return {
    id: rawInstructor.id,
    name: rawInstructor.name,
    imageUrl: rawInstructor.picture_url,
    display: true,
  };
};

export const mapInstructors = (response: any): Instructor[] => {
  const unsortedInstructors: Instructor[] = response.results.map(mapInstructor);
  return unsortedInstructors.sort((a, b) => a.name.localeCompare(b.name));
};

const mapDiscipline = (rawDiscipline: any): Discipline => {
  return {
    id: rawDiscipline.id,
    name: rawDiscipline.name,
  };
};

export const mapDisciplines = (response: any): Discipline[] => {
  const unsortedDisciplines: Discipline[] = response.results.map(mapDiscipline);
  return unsortedDisciplines.sort((a, b) => a.name.localeCompare(b.name));
};

const MAX_WAITING_COUNT = 10;

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

export const mapClasses = (response: any): Class[] => {
  return response.results.map(mapClass);
};
