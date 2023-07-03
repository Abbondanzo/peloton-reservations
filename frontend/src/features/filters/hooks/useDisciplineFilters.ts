import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { toggleDiscipline } from "../slices/filtersSlice";

export const useDisciplineFilters = () => {
  const selectedDisciplines = useAppSelector(
    (state) => state.filters.selectedDisciplines
  );
  const dispatch = useAppDispatch();
  const handleToggleDiscipline = useCallback(
    (instructorId: string) => {
      dispatch(toggleDiscipline(instructorId));
    },
    [dispatch]
  );
  return {
    selectedDisciplines,
    toggleDiscipline: handleToggleDiscipline,
  };
};
