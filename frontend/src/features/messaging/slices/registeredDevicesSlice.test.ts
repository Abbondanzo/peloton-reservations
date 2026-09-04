import { describe, expect, it } from "vitest";
import reducer, {
  setRegisteredDevicesData,
  setRegisteredDevicesFailed,
  setRegisteredDevicesLoading,
} from "./registeredDevicesSlice";

const DEVICES = {
  "token-a": { timestamp: 1700000000000, userAgent: "Chrome" },
};

describe("registeredDevicesSlice", () => {
  it("starts idle with no user", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual({
      userId: null,
      data: { state: "idle" },
    });
  });

  it("records which user is being loaded", () => {
    expect(reducer(undefined, setRegisteredDevicesLoading("u1"))).toEqual({
      userId: "u1",
      data: { state: "loading" },
    });
  });

  it("stores devices keyed by token against their user", () => {
    expect(
      reducer(
        undefined,
        setRegisteredDevicesData({ userId: "u1", data: DEVICES })
      )
    ).toEqual({ userId: "u1", data: { state: "fulfilled", data: DEVICES } });
  });

  it("stores a failure against its user", () => {
    expect(
      reducer(
        undefined,
        setRegisteredDevicesFailed({ userId: "u1", error: { message: "nope" } })
      )
    ).toEqual({
      userId: "u1",
      data: { state: "failed", error: { message: "nope" } },
    });
  });
});
