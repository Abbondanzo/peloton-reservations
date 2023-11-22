import { createSelector } from "@reduxjs/toolkit";
import { Class } from "../types/Class";
import { getLocalDate } from "./../operators/getLocalDate";
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
    let formattedDate = getLocalDate(
      new Date(filteredClasses[0].start * 1000),
      timeZone,
      true
    );
    let classGroup: Class[] = [filteredClasses[0]];
    while (i < filteredClasses.length) {
      const currentClass = filteredClasses[i];
      const currentFormattedDate = getLocalDate(
        new Date(currentClass.start * 1000),
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
