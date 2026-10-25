import type { User } from "firebase/auth";
import { describe, expect, it } from "vitest";
import { userToSession } from "./userToSession";

const user = (overrides: Partial<User>): User =>
  ({ uid: "uid-1", displayName: null, email: null, ...overrides }) as User;

describe("userToSession", () => {
  it("prefers the display name", () => {
    expect(
      userToSession(
        user({ displayName: "Peter", email: "peter@example.com" }),
        false
      )
    ).toEqual({ id: "uid-1", displayName: "Peter", isAdmin: false });
  });

  it("falls back to the email when there is no display name", () => {
    expect(
      userToSession(user({ email: "peter@example.com" }), false).displayName
    ).toBe("peter@example.com");
  });

  it("falls back to an empty label when neither is set", () => {
    expect(userToSession(user({}), false).displayName).toBe("");
  });

  it("carries the admin flag through", () => {
    expect(userToSession(user({}), true).isAdmin).toBe(true);
  });
});
