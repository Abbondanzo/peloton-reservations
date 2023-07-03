import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { toggleInstructor } from "../slices/filtersSlice";

export const useInstructorFilters = () => {
  const selectedInstructors = useAppSelector(
    (state) => state.filters.selectedInstructors
  );
  const dispatch = useAppDispatch();
  const handleToggleInstructor = useCallback(
    (instructorId: string) => {
      dispatch(toggleInstructor(instructorId));
    },
    [dispatch]
  );
  return {
    selectedInstructors,
    toggleInstructor: handleToggleInstructor,
  };
};
