import { describe, expect, it } from "vitest";
import reducer, {
  setAlertPreferencesData,
  setAlertPreferencesFailed,
  setAlertPreferencesLoading,
} from "./alertPreferencesSlice";

describe("alertPreferencesSlice", () => {
  it("starts idle with no user", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual({
      userId: null,
      data: { state: "idle" },
    });
  });

  it("records which user is being loaded", () => {
    expect(reducer(undefined, setAlertPreferencesLoading("u1"))).toEqual({
      userId: "u1",
      data: { state: "loading" },
    });
  });

  it("stores loaded preferences against their user", () => {
    const prefs = { notificationDelayMin: 5 };
    expect(
      reducer(undefined, setAlertPreferencesData({ userId: "u1", data: prefs }))
    ).toEqual({ userId: "u1", data: { state: "fulfilled", data: prefs } });
  });

  it("stores a failure against its user", () => {
    expect(
      reducer(
        undefined,
        setAlertPreferencesFailed({ userId: "u1", error: { message: "nope" } })
      )
    ).toEqual({
      userId: "u1",
      data: { state: "failed", error: { message: "nope" } },
    });
  });
});
