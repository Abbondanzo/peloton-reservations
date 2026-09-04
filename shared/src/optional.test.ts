import { describe, expect, it } from "vitest";
import { isEmpty, isNotEmpty } from "./optional";

describe("isEmpty", () => {
  it.each([
    ["null", null],
    ["undefined", undefined],
  ])("is true for %s", (_label, value) => {
    expect(isEmpty(value as null)).toBe(true);
  });

  it.each([
    ["zero", 0],
    ["the empty string", ""],
    ["false", false],
    ["an empty array", []],
  ])("is false for %s, which is present but falsy", (_label, value) => {
    expect(isEmpty(value as unknown as null)).toBe(false);
  });
});

describe("isNotEmpty", () => {
  it("is the inverse of isEmpty", () => {
    for (const value of [null, undefined, 0, "", false, [], "x"]) {
      expect(isNotEmpty(value as never)).toBe(!isEmpty(value as never));
    }
  });
});
