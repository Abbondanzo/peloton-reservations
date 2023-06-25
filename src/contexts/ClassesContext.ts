import { createContext } from "react";
import { Class } from "../types/Class";
import { Instructor } from "../types/Instructor";
import { Discipline } from "../types/Discipline";

export interface Data {
  classes: Class[];
  instructors: Instructor[];
  disciplines: Discipline[];
}

interface ClassesContextType {
  loading: boolean;
  error?: Error;
  data?: Data;
}

export const ClassesContext = createContext<ClassesContextType | null>(null);
