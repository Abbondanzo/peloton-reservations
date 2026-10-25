import { describe, expect, it } from "vitest";
import { buildFilterState, buildRootState } from "../../../test/buildRootState";
import type { RootState } from "../../store/constants/store";
import { selectHasFilters } from "./selectHasFilters";

const rootState = (filters: Partial<RootState["filters"]>) =>
  buildRootState({ filters: buildFilterState(filters) });

describe("selectHasFilters", () => {
  it("is false when no discipline or instructor is selected", () => {
    expect(selectHasFilters(rootState({}))).toBe(false);
  });

  it("is true when a discipline is selected", () => {
    expect(selectHasFilters(rootState({ selectedDisciplines: ["5"] }))).toBe(
      true
    );
  });

  it("is true when an instructor is selected", () => {
    expect(selectHasFilters(rootState({ selectedInstructors: ["1"] }))).toBe(
      true
    );
  });

  it("ignores the status filter, which is always set to something", () => {
    expect(
      selectHasFilters(
        rootState({ selectedBookableStatuses: ["free", "full"] })
      )
    ).toBe(false);
  });
});
