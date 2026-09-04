import { describe, expect, it } from "vitest";
import { buildClass } from "../../../test/buildClass";
import { buildFilterState, buildRootState } from "../../../test/buildRootState";
import type { RootState } from "../../store/constants/store";
import { selectFilteredClasses } from "./selectFilteredClasses";

const rootState = (filters: Partial<RootState["filters"]> = {}) =>
  buildRootState({ filters: buildFilterState(filters) });

const free = buildClass({ id: "1", status: "free" });
const waitlisted = buildClass({ id: "2", status: "waitlist" });
const full = buildClass({ id: "3", status: "full" });

describe("selectFilteredClasses", () => {
  it("keeps only classes in a selected status", () => {
    const result = selectFilteredClasses(rootState(), [free, waitlisted, full]);
    expect(result.map((c) => c.id)).toEqual(["1", "2"]);
  });

  it("keeps nothing when no status is selected", () => {
    expect(
      selectFilteredClasses(rootState({ selectedBookableStatuses: [] }), [free])
    ).toEqual([]);
  });

  it("treats an empty instructor filter as no instructor filter", () => {
    expect(
      selectFilteredClasses(rootState({ selectedInstructors: [] }), [free])
    ).toHaveLength(1);
  });

  it("narrows to the selected instructors", () => {
    const other = buildClass({
      id: "4",
      instructor: { ...free.instructor, id: "99" },
    });
    const result = selectFilteredClasses(
      rootState({ selectedInstructors: ["99"] }),
      [free, other]
    );
    expect(result.map((c) => c.id)).toEqual(["4"]);
  });

  it("narrows to the selected disciplines", () => {
    const other = buildClass({
      id: "4",
      discipline: { ...free.discipline, id: "9" },
    });
    const result = selectFilteredClasses(
      rootState({ selectedDisciplines: ["9"] }),
      [free, other]
    );
    expect(result.map((c) => c.id)).toEqual(["4"]);
  });

  it("applies status, instructor and discipline filters together", () => {
    const wanted = buildClass({ id: "5", status: "free" });
    const wrongStatus = buildClass({ id: "6", status: "full" });
    const wrongInstructor = buildClass({
      id: "7",
      instructor: { ...free.instructor, id: "99" },
    });
    const result = selectFilteredClasses(
      rootState({
        selectedInstructors: ["1"],
        selectedDisciplines: ["5"],
      }),
      [wanted, wrongStatus, wrongInstructor]
    );
    expect(result.map((c) => c.id)).toEqual(["5"]);
  });

  it("preserves the incoming order", () => {
    const result = selectFilteredClasses(rootState(), [waitlisted, free]);
    expect(result.map((c) => c.id)).toEqual(["2", "1"]);
  });
});
