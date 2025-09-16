import { captureException } from "@sentry/react";
import type { BookableStatus } from "../types/BookableStatus";
import { isBookableStatus } from "./isBookableStatus";

const getStored = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    captureException(error);
    return null;
  }
};

const setStored = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    captureException(error);
  }
};

const removeStored = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    captureException(error);
  }
};

const BOOKABLE_STATUS_KEY = "BOOKABLE_STATUS_FILTERS";
const DISCIPLINE_KEY = "DISCIPLINE_FILTERS";
const INSTRUCTOR_KEY = "INSTRUCTOR_FILTERS";

export const getStoredBookableStatus = (
  defaultValue: BookableStatus[]
): BookableStatus[] => {
  const value = getStored(BOOKABLE_STATUS_KEY);
  if (value === null) {
    return defaultValue;
  }
  return value.split(";").filter(isBookableStatus);
};

export const setStoredBookableStatus = (show: BookableStatus[]) => {
  setStored(BOOKABLE_STATUS_KEY, show.join(";"));
};

export const getStoredDisciplines = (defaultValue: string[]): string[] => {
  const value = getStored(DISCIPLINE_KEY);
  if (value === null) {
    return defaultValue;
  }
  return value.split(";").filter(Boolean);
};

export const setStoredDisciplines = (instructorIds: string[]) => {
  if (instructorIds.length === 0) {
    removeStored(DISCIPLINE_KEY);
  } else {
    setStored(DISCIPLINE_KEY, instructorIds.join(";"));
  }
};

export const getStoredInstructors = (defaultValue: string[]): string[] => {
  const value = getStored(INSTRUCTOR_KEY);
  if (value === null) {
    return defaultValue;
  }
  return value.split(";").filter(Boolean);
};

export const setStoredInstructors = (instructorIds: string[]) => {
  if (instructorIds.length === 0) {
    removeStored(INSTRUCTOR_KEY);
  } else {
    setStored(INSTRUCTOR_KEY, instructorIds.join(";"));
  }
};
