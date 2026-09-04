import { describe, expect, it } from "vitest";
import reducer, { removeSession, setLoading, setSession } from "./sessionSlice";

const SESSION = { id: "u1", displayName: "Peter", isAdmin: false };

describe("sessionSlice", () => {
  it("starts idle", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual({ state: "idle" });
  });

  it("moves to loading while auth resolves", () => {
    expect(reducer(undefined, setLoading())).toEqual({ state: "loading" });
  });

  it("stores the signed-in session", () => {
    expect(reducer({ state: "loading" }, setSession(SESSION))).toEqual({
      state: "fulfilled",
      data: SESSION,
    });
  });

  it("marks a signed-out user as fulfilled with no session", () => {
    expect(
      reducer({ state: "fulfilled", data: SESSION }, removeSession())
    ).toEqual({ state: "fulfilled", data: null });
  });

  it("replaces one session with another on re-auth", () => {
    const other = { id: "u2", displayName: "Sam", isAdmin: true };
    expect(
      reducer({ state: "fulfilled", data: SESSION }, setSession(other))
    ).toEqual({ state: "fulfilled", data: other });
  });
});
