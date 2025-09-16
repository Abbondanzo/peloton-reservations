import { createSelector } from "@reduxjs/toolkit";
import type { Class } from "../types/Class";
import { getLocalDate } from "../operators/getLocalDate";
import { selectFilteredClasses } from "./selectFilteredClasses";
import { selectStudio } from "./selectStudio";

interface ClassGroup {
  formattedDate: string;
  classes: Class[];
}

export const selectFilteredClassesGroups = createSelector(
  [selectFilteredClasses, selectStudio],
  (filteredClasses, studio) => {
    if (filteredClasses.length === 0) return [];
    const timeZone = studio?.timezone || "";
    const groups: ClassGroup[] = [];
    let i = 1;
    let formattedDate = getLocalDate(filteredClasses[0].start, timeZone, true);
    let classGroup: Class[] = [filteredClasses[0]];
    while (i < filteredClasses.length) {
      const currentClass = filteredClasses[i];
      const currentFormattedDate = getLocalDate(
        currentClass.start,
        timeZone,
        true
      );
      if (currentFormattedDate === formattedDate) {
        classGroup.push(currentClass);
      } else {
        groups.push({ formattedDate, classes: classGroup });
        formattedDate = currentFormattedDate;
        classGroup = [currentClass];
      }
      i++;
    }
    if (classGroup.length > 0) {
      groups.push({ formattedDate, classes: classGroup });
    }
    return groups;
  }
);
