import { describe, expect, it } from "vitest";
import { buildAlert } from "shared/testing";
import reducer, {
  setAlertsData,
  setAlertsFailed,
  setAlertsLoading,
} from "./alertsSlice";

describe("alertsSlice", () => {
  it("starts idle with no user", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual({
      userId: null,
      data: { state: "idle" },
    });
  });

  it("records which user is being loaded", () => {
    expect(reducer(undefined, setAlertsLoading("u1"))).toEqual({
      userId: "u1",
      data: { state: "loading" },
    });
  });

  it("stores the loaded alerts against their user", () => {
    const alerts = [buildAlert()];
    expect(
      reducer(undefined, setAlertsData({ userId: "u1", data: alerts }))
    ).toEqual({ userId: "u1", data: { state: "fulfilled", data: alerts } });
  });

  it("stores a failure against its user", () => {
    expect(
      reducer(
        undefined,
        setAlertsFailed({ userId: "u1", error: { message: "denied" } })
      )
    ).toEqual({
      userId: "u1",
      data: { state: "failed", error: { message: "denied" } },
    });
  });

  it("discards the previous user's alerts when another signs in", () => {
    const first = reducer(
      undefined,
      setAlertsData({ userId: "u1", data: [buildAlert()] })
    );
    expect(reducer(first, setAlertsLoading("u2"))).toEqual({
      userId: "u2",
      data: { state: "loading" },
    });
  });
});
