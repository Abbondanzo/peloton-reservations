import type { RootState } from "../features/store/constants/store";
import { makeTestStore } from "./renderWithStore";

/**
 * A real RootState built from the app's own reducers, with whole slices
 * replaced — so selector tests never drift from the store's actual shape.
 */
export const buildRootState = (
  overrides: Partial<RootState> = {}
): RootState => ({
  ...makeTestStore().getState(),
  ...overrides,
});

export const buildFilterState = (
  overrides: Partial<RootState["filters"]> = {}
): RootState["filters"] => ({
  selectedBookableStatuses: ["free", "waitlist"],
  selectedDisciplines: [],
  selectedInstructors: [],
  ...overrides,
});
