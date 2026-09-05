import { describe, expect, it } from "vitest";
import { buildRootState } from "../../../test/buildRootState";
import type { RootState } from "../../store/constants/store";
import type { Session } from "../types/Session";
import { selectHasSession } from "./selectHasSession";
import { selectIsAdmin } from "./selectIsAdmin";
import { selectUserId } from "./selectUserId";

const rootState = (session: RootState["session"]) =>
  buildRootState({ session });

const SESSION: Session = { id: "u1", displayName: "Peter", isAdmin: false };
const signedIn = rootState({ state: "fulfilled", data: SESSION });
const signedOut = rootState({ state: "fulfilled", data: null });
const loading = rootState({ state: "loading" });

describe("selectHasSession", () => {
  it("is true for a signed-in user", () => {
    expect(selectHasSession(signedIn)).toBe(true);
  });

  it("is false once auth resolves with no user", () => {
    expect(selectHasSession(signedOut)).toBe(false);
  });

  it("is false while auth is still resolving", () => {
    expect(selectHasSession(loading)).toBe(false);
  });
});

describe("selectUserId", () => {
  it("returns the signed-in user's id", () => {
    expect(selectUserId(signedIn)).toBe("u1");
  });

  it("is undefined when signed out", () => {
    expect(selectUserId(signedOut)).toBeUndefined();
  });

  it("is undefined while auth is still resolving", () => {
    expect(selectUserId(loading)).toBeUndefined();
  });
});

describe("selectIsAdmin", () => {
  it("is true only for an admin session", () => {
    expect(
      selectIsAdmin(
        rootState({ state: "fulfilled", data: { ...SESSION, isAdmin: true } })
      )
    ).toBe(true);
  });

  it("is false for a non-admin session", () => {
    expect(selectIsAdmin(signedIn)).toBe(false);
  });

  it("is false when signed out", () => {
    expect(selectIsAdmin(signedOut)).toBe(false);
  });

  it("is false while auth is still resolving", () => {
    expect(selectIsAdmin(loading)).toBe(false);
  });
});
