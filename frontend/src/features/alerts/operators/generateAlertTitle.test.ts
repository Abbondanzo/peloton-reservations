import { describe, expect, it } from "vitest";
import { generateAlertTitle } from "./generateAlertTitle";

describe("generateAlertTitle", () => {
  it("describes an unfiltered alert", () => {
    expect(generateAlertTitle(null, null)).toBe(
      "Any Class with Any Instructor"
    );
  });

  it("treats an empty list the same as no filter", () => {
    expect(generateAlertTitle([], [])).toBe("Any Class with Any Instructor");
  });

  it("names a single discipline and instructor", () => {
    expect(generateAlertTitle(["Cycling"], ["Alex Toussaint"])).toBe(
      "Cycling with Alex Toussaint"
    );
  });

  it("joins exactly two names with 'or'", () => {
    expect(generateAlertTitle(["Cycling", "Yoga"], ["Alex", "Robin"])).toBe(
      "Cycling or Yoga with Alex or Robin"
    );
  });

  it("counts three or more names instead of listing them", () => {
    expect(
      generateAlertTitle(
        ["Cycling", "Yoga", "Strength"],
        ["Alex", "Robin", "Cody", "Emma"]
      )
    ).toBe("3 Disciplines with 4 Instructors");
  });

  it("mixes a named side with a counted side", () => {
    expect(generateAlertTitle(["Cycling"], ["Alex", "Robin", "Cody"])).toBe(
      "Cycling with 3 Instructors"
    );
  });
});
