import {
  getSearchParams,
  removeSearchParams,
  setSearchParams,
} from "./searchParams";

const KEY = "disciplines";

export const getDisciplinesSearchParams = (
  defaultValue: string[]
): string[] => {
  const value = getSearchParams(KEY);
  if (value === null) {
    return defaultValue;
  }
  return value.split(";").filter(Boolean);
};

export const setDisciplinesSearchParams = (instructorIds: string[]) => {
  if (instructorIds.length === 0) {
    removeSearchParams(KEY);
  } else {
    setSearchParams(KEY, instructorIds.join(";"));
  }
};
