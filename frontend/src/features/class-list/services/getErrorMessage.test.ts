import { describe, expect, it } from "vitest";
import { getErrorMessage } from "./pelotonApi";

describe("getErrorMessage", () => {
  it("reads the error string from a fetch failure", () => {
    expect(
      getErrorMessage({ status: "FETCH_ERROR", error: "Network down" })
    ).toBe("Network down");
  });

  it("reads the message from a serialized error", () => {
    expect(getErrorMessage({ message: "Something broke" })).toBe(
      "Something broke"
    );
  });

  it("is undefined when neither field is a string", () => {
    expect(
      getErrorMessage({ status: 500, data: { detail: "nope" } })
    ).toBeUndefined();
  });
});
