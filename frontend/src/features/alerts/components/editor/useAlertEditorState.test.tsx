import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { ALL_DAY_TIME_RANGE, DEFAULT_STUDIO_ID, type Alert } from "shared";
import { beforeEach, describe, expect, it } from "vitest";
import { makeTestStore } from "../../../../test/renderWithStore";
import { setStoredStudioId } from "../../../class-list/operators/studioStorage";
import { setStudioId } from "../../../class-list/slices/studioSlice";
import { useAlertEditorState } from "./useAlertEditorState";

const renderEditorState = (alertToEdit: Partial<Alert> = {}) => {
  const store = makeTestStore();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  return {
    store,
    ...renderHook(() => useAlertEditorState(alertToEdit), { wrapper }),
  };
};

beforeEach(() => {
  window.localStorage.clear();
});

describe("defaults for a new alert", () => {
  it("starts with no filters and an all-day schedule", () => {
    const { result } = renderEditorState();

    expect(result.current.name).toBe("");
    expect(result.current.selectedInstructors).toBeNull();
    expect(result.current.selectedDisciplines).toBeNull();
    expect(result.current.timeRanges).toHaveLength(7);
    expect(result.current.timeRanges[0]).toEqual(ALL_DAY_TIME_RANGE);
  });

  it("defaults to free-spot alerts with the waitlist watcher off", () => {
    const { result } = renderEditorState();

    expect(result.current.maxStatus).toBe("free");
    expect(result.current.waitlistAlerts).toBe(false);
    expect(result.current.watchedClassIds).toBeNull();
  });

  it("falls back to the stored studio", () => {
    setStoredStudioId("7248663");

    const { result } = renderEditorState();

    expect(result.current.selectedStudioId).toBe("7248663");
  });
});

describe("seeding from an existing alert", () => {
  const existing = (studioId: string): Partial<Alert> => ({
    name: "Morning rides",
    instructors: ["1"],
    disciplines: ["5"],
    maxStatus: "waitlist",
    waitlistAlerts: true,
    watchedClassIds: ["100"],
    studioId,
    timeRanges: [null, ALL_DAY_TIME_RANGE, null, null, null, null, null],
  });

  it("seeds every field from the alert", () => {
    const alert = existing(DEFAULT_STUDIO_ID);

    const { result } = renderEditorState(alert);

    expect(result.current).toMatchObject({
      name: "Morning rides",
      selectedInstructors: ["1"],
      selectedDisciplines: ["5"],
      maxStatus: "waitlist",
      waitlistAlerts: true,
      watchedClassIds: ["100"],
      timeRanges: alert.timeRanges,
    });
  });

  it("selects the alert's studio", () => {
    const { result } = renderEditorState(existing("7248663"));

    expect(result.current.selectedStudioId).toBe("7248663");
  });

  it("keeps the seeded filters when the alert's studio is not the stored one", () => {
    // The store starts on the stored studio and only switches to the alert's
    // once the mount effect runs. That sync must not read as a studio change,
    // or the alert loses the filters it was saved with.
    setStoredStudioId(DEFAULT_STUDIO_ID);

    const { result } = renderEditorState(existing("7248663"));

    expect(result.current.selectedInstructors).toEqual(["1"]);
    expect(result.current.selectedDisciplines).toEqual(["5"]);
    expect(result.current.selectedStudioId).toBe("7248663");
  });
});

describe("editing", () => {
  it("updates each field independently", () => {
    const { result } = renderEditorState();

    act(() => result.current.setName("Evening rides"));
    act(() => result.current.setMaxStatus("waitlist"));
    act(() => result.current.setWaitlistAlerts(true));

    expect(result.current).toMatchObject({
      name: "Evening rides",
      maxStatus: "waitlist",
      waitlistAlerts: true,
    });
  });

  it("keeps a chosen instructor list", () => {
    const { result } = renderEditorState();

    act(() => result.current.setSelectedInstructors(["1", "2"]));

    expect(result.current.selectedInstructors).toEqual(["1", "2"]);
  });
});

describe("changing studio", () => {
  const editing = (studioId = DEFAULT_STUDIO_ID) =>
    renderEditorState({ studioId });

  it("selects the new studio", () => {
    const { result } = editing();

    act(() => result.current.setSelectedStudioId("7248663"));

    expect(result.current.selectedStudioId).toBe("7248663");
  });

  it("clears filters that were set, since ids do not carry across studios", () => {
    const { result } = editing();
    act(() => result.current.setSelectedInstructors(["1"]));
    act(() => result.current.setSelectedDisciplines(["5"]));

    act(() => result.current.setSelectedStudioId("7248663"));

    expect(result.current.selectedInstructors).toEqual([]);
    expect(result.current.selectedDisciplines).toEqual([]);
  });

  it("leaves 'any instructor' and 'any discipline' alone", () => {
    const { result } = editing();

    act(() => result.current.setSelectedStudioId("7248663"));

    expect(result.current.selectedInstructors).toBeNull();
    expect(result.current.selectedDisciplines).toBeNull();
  });

  it("keeps filters when the studio is re-selected unchanged", () => {
    const { result } = editing();
    act(() => result.current.setSelectedInstructors(["1"]));

    act(() => result.current.setSelectedStudioId(DEFAULT_STUDIO_ID));

    expect(result.current.selectedInstructors).toEqual(["1"]);
  });

  it("keeps filters when the store's studio changes on its own", () => {
    // Only the user picking a studio in the editor resets the filters. A bare
    // dispatch is exactly what the mount-time sync looks like, and reacting to
    // it is what used to wipe an alert's saved filters on open.
    const { store, result } = editing();
    act(() => result.current.setSelectedInstructors(["1"]));

    act(() => {
      store.dispatch(setStudioId("7248663"));
    });

    expect(result.current.selectedInstructors).toEqual(["1"]);
  });
});
