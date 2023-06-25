import { ReactNode, useMemo } from "react";
import { ClassesContext, Data } from "../contexts/ClassesContext";
// import { getClasses } from "../api/getClasses";
import { useQuery } from "@apollo/client";
import { GetClasses, getClasses } from "../queries/getClasses";
import { Instructor } from "../types/Instructor";
import { Class } from "../types/Class";

interface Props {
  classId: string;
  children: ReactNode;
}

export const ClassesProvider = ({ classId, children }: Props) => {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery<GetClasses>(getClasses, {
    variables: { classId },
  });
  const data: Data | undefined = useMemo(() => {
    if (!rawData) return rawData;
    const instructors = rawData.getClasses.data.instructors.map(
      (instructor): Instructor => {
        return {
          id: instructor.id,
          name: instructor.full_name,
          imageUrl: instructor.image_url,
          display: instructor.display,
        };
      }
    );
    const classes = rawData.getClasses.data.classes.map((clazz): Class => {
      const instructor = instructors.find(
        (instructor) => instructor.id === clazz.instructor_id
      ) || {
        id: "0",
        name: "None",
        imageUrl: "",
        display: false,
      };

      return {
        ...clazz,
        name:
          clazz.name || `${clazz.duration / 60} min ${instructor.name} Class`,
        waitlistFull: clazz.waitlist_full,
        instructor,
      };
    });
    const disciplines = rawData.getClasses.data.disciplines;
    return {
      classes,
      instructors,
      disciplines,
    };
  }, [rawData]);
  return (
    <ClassesContext.Provider
      value={{
        loading,
        error,
        data,
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
};
