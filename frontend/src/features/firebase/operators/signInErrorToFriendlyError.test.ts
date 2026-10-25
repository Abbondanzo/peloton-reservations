import { describe, expect, it } from "vitest";
import { signInErrorToFriendlyError } from "./signInErrorToFriendlyError";

describe("signInErrorToFriendlyError", () => {
  it("explains a wrong password without leaking Firebase wording", () => {
    const message = signInErrorToFriendlyError({
      code: "auth/wrong-password",
      message: "FIREBASE INTERNAL ERROR",
    });
    expect(message).toBe(
      "Incorrect password. Please try again or reset your password."
    );
  });

  it.each([
    "auth/user-not-found",
    "auth/invalid-email",
    "auth/user-disabled",
    "auth/too-many-requests",
    "auth/invalid-credential",
    "auth/network-request-failed",
    "auth/popup-blocked",
  ])("gives a specific message for %s", (code) => {
    const message = signInErrorToFriendlyError({ code, message: "raw" });
    expect(message).not.toBe("raw");
    expect(message.length).toBeGreaterThan(0);
  });

  it("tells the user to sign in again for both expired-session codes", () => {
    const expected = "Your session has expired. Please sign in again.";
    expect(
      signInErrorToFriendlyError({
        code: "auth/invalid-user-token",
        message: "",
      })
    ).toBe(expected);
    expect(
      signInErrorToFriendlyError({
        code: "auth/user-token-expired",
        message: "",
      })
    ).toBe(expected);
  });

  it("falls back to the raw message for an unmapped code", () => {
    expect(
      signInErrorToFriendlyError({
        code: "auth/some-new-code",
        message: "Something specific went wrong",
      })
    ).toBe("Something specific went wrong");
  });

  it("falls back to a generic message when there is nothing to show", () => {
    expect(
      signInErrorToFriendlyError({ code: "auth/some-new-code", message: "" })
    ).toBe("An unexpected error occurred. Please try again.");
  });
});
