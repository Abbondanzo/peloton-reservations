import { describe, expect, it } from "vitest";
import {
  RATE_LIMIT_MESSAGE,
  getErrorMessage,
  isRateLimitError,
} from "./pelotonApi";

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

  it("returns a friendly message when the request is rate limited", () => {
    expect(
      getErrorMessage({ status: 429, data: { message: "Too Many Requests" } })
    ).toBe(RATE_LIMIT_MESSAGE);
  });

  it("returns a friendly message when a rate limited body fails to parse", () => {
    expect(
      getErrorMessage({
        status: "PARSING_ERROR",
        originalStatus: 429,
        data: "Too Many Requests",
        error: "Unexpected token T in JSON",
      })
    ).toBe(RATE_LIMIT_MESSAGE);
  });
});

describe("isRateLimitError", () => {
  it("is true for a 429 response", () => {
    expect(isRateLimitError({ status: 429, data: {} })).toBe(true);
  });

  it("is true for a parsing error that kept the 429 status", () => {
    expect(
      isRateLimitError({
        status: "PARSING_ERROR",
        originalStatus: 429,
        data: "Too Many Requests",
        error: "Unexpected token T in JSON",
      })
    ).toBe(true);
  });

  it("is false for other failures", () => {
    expect(isRateLimitError({ status: 500, data: {} })).toBe(false);
    expect(
      isRateLimitError({ status: "FETCH_ERROR", error: "Network down" })
    ).toBe(false);
    expect(isRateLimitError({ message: "Something broke" })).toBe(false);
  });
});
