import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  getStoredBookableStatus,
  getStoredDisciplines,
  getStoredInstructors,
  setStoredBookableStatus,
  setStoredDisciplines,
  setStoredInstructors,
} from "./filterStorage";

beforeEach(() => {
  window.localStorage.clear();
});

describe("bookable status filters", () => {
  it("returns the fallback when nothing is stored", () => {
    expect(getStoredBookableStatus(["free"])).toEqual(["free"]);
  });

  it("round-trips a selection", () => {
    setStoredBookableStatus(["free", "waitlist"]);
    expect(getStoredBookableStatus([])).toEqual(["free", "waitlist"]);
  });

  it("distinguishes an empty stored selection from an absent one", () => {
    setStoredBookableStatus([]);
    expect(getStoredBookableStatus(["free"])).toEqual([]);
  });

  it("drops values that are no longer valid statuses", () => {
    window.localStorage.setItem("BOOKABLE_STATUS_FILTERS", "free;bogus;full");
    expect(getStoredBookableStatus([])).toEqual(["free", "full"]);
  });
});

describe.each([
  [
    "disciplines",
    "DISCIPLINE_FILTERS",
    getStoredDisciplines,
    setStoredDisciplines,
  ],
  [
    "instructors",
    "INSTRUCTOR_FILTERS",
    getStoredInstructors,
    setStoredInstructors,
  ],
] as const)("%s filters", (_label, key, getStored, setStored) => {
  it("returns the fallback when nothing is stored", () => {
    expect(getStored(["default"])).toEqual(["default"]);
  });

  it("round-trips a selection", () => {
    setStored(["1", "2"]);
    expect(getStored([])).toEqual(["1", "2"]);
  });

  it("clears the key rather than storing an empty string", () => {
    setStored(["1"]);
    setStored([]);
    expect(window.localStorage.getItem(key)).toBeNull();
    expect(getStored(["fallback"])).toEqual(["fallback"]);
  });

  it("ignores empty segments from a malformed value", () => {
    window.localStorage.setItem(key, ";1;;2;");
    expect(getStored([])).toEqual(["1", "2"]);
  });

  it("falls back when localStorage reads throw", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("SecurityError");
    });
    expect(getStored(["fallback"])).toEqual(["fallback"]);
  });

  it("swallows a localStorage write failure", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    expect(() => setStored(["1"])).not.toThrow();
  });

  it("swallows a localStorage remove failure", () => {
    vi.spyOn(Storage.prototype, "removeItem").mockImplementation(() => {
      throw new Error("SecurityError");
    });
    expect(() => setStored([])).not.toThrow();
  });
});
