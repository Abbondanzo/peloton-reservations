import { describe, expect, it } from "vitest";
import { buildAlert } from "shared/testing";
import { getFriendlyTitle } from "./getFriendlyTitle";

describe("getFriendlyTitle", () => {
  it("describes an unfiltered free alert", () => {
    expect(getFriendlyTitle(buildAlert())).toBe(
      "All instructors,  All disciplines, Free"
    );
  });

  it("singularizes a one-item filter", () => {
    expect(
      getFriendlyTitle(buildAlert({ instructors: ["1"], disciplines: ["5"] }))
    ).toBe("1 instructor,  1 discipline, Free");
  });

  it("pluralizes a multi-item filter", () => {
    expect(
      getFriendlyTitle(
        buildAlert({ instructors: ["1", "2"], disciplines: ["5", "6", "7"] })
      )
    ).toBe("2 instructors,  3 disciplines, Free");
  });

  it.each([
    ["free", "Free"],
    ["waitlist", "Waitlisted"],
    ["full", "Full"],
  ] as const)("renders the %s status as %s", (maxStatus, label) => {
    expect(getFriendlyTitle(buildAlert({ maxStatus }))).toContain(label);
  });

  it("treats an empty filter list as no filter", () => {
    expect(getFriendlyTitle(buildAlert({ instructors: [] }))).toContain(
      "0 instructors"
    );
  });
});
