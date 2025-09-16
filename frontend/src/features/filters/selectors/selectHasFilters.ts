import type { RootState } from "../../store/constants/store";

export const selectHasFilters = (state: RootState) => {
  return (
    state.filters.selectedDisciplines.length > 0 ||
    state.filters.selectedInstructors.length > 0
  );
};
