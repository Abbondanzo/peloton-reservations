import { getSearchParams, setSearchParams } from "./searchParams";

const KEY = "instructors";

export const getInstructorsSearchParams = (
  defaultValue: string[]
): string[] => {
  const value = getSearchParams(KEY);
  if (value === null) {
    return defaultValue;
  }
  return value.split(";");
};

export const setInstructorsSearchParams = (instructorIds: string[]) => {
  setSearchParams(KEY, instructorIds.join(";"));
};
