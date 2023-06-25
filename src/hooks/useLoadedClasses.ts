import { useClassesContext } from "./useClassesContext";

export const useLoadedClasses = () => {
  const context = useClassesContext();
  if (!context.data) {
    throw new Error("No data in ClassesContext");
  }
  return context.data;
};
