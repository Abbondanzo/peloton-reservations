import { describe, expect, it } from "vitest";
import { PATHS } from "./firebasePaths";

describe("PATHS", () => {
  it("builds alert paths", () => {
    expect(PATHS.alerts("user-1")).toBe("alerts/user-1");
    expect(PATHS.alert("user-1", "alert-2")).toBe("alerts/user-1/alert-2");
  });

  it("builds alert preference paths", () => {
    expect(PATHS.alertPreferences("user-1")).toBe("alertPreferences/user-1");
  });

  it("builds messaging token paths", () => {
    expect(PATHS.messagingTokens("user-1")).toBe("messagingTokens/user-1");
    expect(PATHS.messagingToken("user-1", "tok")).toBe(
      "messagingTokens/user-1/tok"
    );
  });

  it("builds class history paths", () => {
    expect(PATHS.classHistory("7248695")).toBe("classHistory/7248695");
    expect(PATHS.classSnapshot("7248695", "100")).toBe(
      "classHistory/7248695/100"
    );
  });

  it("accepts a numeric class id and renders it as a path segment", () => {
    expect(PATHS.classSnapshot("7248695", 100)).toBe(
      "classHistory/7248695/100"
    );
    expect(PATHS.selloutRecord("1", 100)).toBe("selloutStats/1/100");
  });

  it("nests a sellout record under its instructor's stats", () => {
    expect(
      PATHS.selloutRecord("1", "100").startsWith(PATHS.selloutStats("1"))
    ).toBe(true);
  });
});
