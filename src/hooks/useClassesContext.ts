import { ClassesContext } from "../contexts/ClassesContext";
import { useContext } from "react";

export const useClassesContext = () => {
  const context = useContext(ClassesContext);
  if (!context) {
    throw new Error("ClassesProvider not wrapping this component");
  }
  return context;
};
