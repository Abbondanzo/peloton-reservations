import { beforeEach, describe, expect, it } from "vitest";
import type { BookableStatus } from "../types/BookableStatus";
import reducer, {
  resetDisciplines,
  resetInstructors,
  setDisciplines,
  toggleBookableStatus,
  toggleDiscipline,
  toggleInstructor,
} from "./filtersSlice";

const state = (overrides: Partial<ReturnType<typeof reducer>> = {}) => ({
  selectedBookableStatuses: ["free", "waitlist"] as BookableStatus[],
  selectedInstructors: [] as string[],
  selectedDisciplines: [] as string[],
  ...overrides,
});

beforeEach(() => {
  window.localStorage.clear();
});

describe("toggleBookableStatus", () => {
  it("adds a status that is not selected", () => {
    const next = reducer(state(), toggleBookableStatus("full"));
    expect(next.selectedBookableStatuses).toEqual(["free", "waitlist", "full"]);
  });

  it("removes a status that is selected", () => {
    const next = reducer(state(), toggleBookableStatus("free"));
    expect(next.selectedBookableStatuses).toEqual(["waitlist"]);
  });

  it("persists the selection so it survives a reload", () => {
    reducer(state(), toggleBookableStatus("full"));
    expect(window.localStorage.getItem("BOOKABLE_STATUS_FILTERS")).toBe(
      "free;waitlist;full"
    );
  });
});

describe("toggleInstructor", () => {
  it("adds an unselected instructor", () => {
    expect(reducer(state(), toggleInstructor("1")).selectedInstructors).toEqual(
      ["1"]
    );
  });

  it("removes a selected instructor", () => {
    expect(
      reducer(state({ selectedInstructors: ["1", "2"] }), toggleInstructor("1"))
        .selectedInstructors
    ).toEqual(["2"]);
  });

  it("persists the selection", () => {
    reducer(state(), toggleInstructor("1"));
    expect(window.localStorage.getItem("INSTRUCTOR_FILTERS")).toBe("1");
  });
});

describe("resetInstructors", () => {
  it("clears the selection and its stored value", () => {
    const next = reducer(
      state({ selectedInstructors: ["1", "2"] }),
      resetInstructors()
    );
    expect(next.selectedInstructors).toEqual([]);
    expect(window.localStorage.getItem("INSTRUCTOR_FILTERS")).toBeNull();
  });
});

describe("toggleDiscipline", () => {
  it("adds an unselected discipline", () => {
    expect(reducer(state(), toggleDiscipline("5")).selectedDisciplines).toEqual(
      ["5"]
    );
  });

  it("removes a selected discipline", () => {
    expect(
      reducer(state({ selectedDisciplines: ["5"] }), toggleDiscipline("5"))
        .selectedDisciplines
    ).toEqual([]);
  });
});

describe("setDisciplines", () => {
  it("replaces the whole selection", () => {
    const next = reducer(
      state({ selectedDisciplines: ["5"] }),
      setDisciplines(["6", "7"])
    );
    expect(next.selectedDisciplines).toEqual(["6", "7"]);
    expect(window.localStorage.getItem("DISCIPLINE_FILTERS")).toBe("6;7");
  });
});

describe("resetDisciplines", () => {
  it("clears the selection and its stored value", () => {
    const next = reducer(
      state({ selectedDisciplines: ["5"] }),
      resetDisciplines()
    );
    expect(next.selectedDisciplines).toEqual([]);
    expect(window.localStorage.getItem("DISCIPLINE_FILTERS")).toBeNull();
  });
});

describe("filter independence", () => {
  it("leaves the other filters untouched when one changes", () => {
    const initial = state({
      selectedInstructors: ["1"],
      selectedDisciplines: ["5"],
    });
    const next = reducer(initial, toggleBookableStatus("full"));
    expect(next.selectedInstructors).toEqual(["1"]);
    expect(next.selectedDisciplines).toEqual(["5"]);
  });
});
