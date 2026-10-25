import { describe, expect, it } from "vitest";
import { DEFAULT_STUDIO_ID, STUDIOS } from "./studios";

describe("STUDIOS", () => {
  it("maps the New York studio id to its IANA timezone", () => {
    expect(STUDIOS["7248695"]).toEqual({
      location: "New York",
      timezone: "America/New_York",
    });
  });

  it("maps the London studio id to its IANA timezone", () => {
    expect(STUDIOS["7248663"]).toEqual({
      location: "London",
      timezone: "Europe/London",
    });
  });

  it("defaults to a studio that exists", () => {
    expect(STUDIOS[DEFAULT_STUDIO_ID]).toBeDefined();
  });

  it("gives every studio a timezone the Intl API understands", () => {
    for (const { timezone } of Object.values(STUDIOS)) {
      expect(() =>
        new Intl.DateTimeFormat("en-US", { timeZone: timezone }).format(0)
      ).not.toThrow();
    }
  });
});
