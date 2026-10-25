import { describe, expect, it } from "vitest";
import { DEFAULT_STUDIO_ID } from "shared";
import { buildRootState } from "../../../test/buildRootState";
import { selectStudio } from "./selectStudio";
import { selectStudioId } from "./selectStudioId";

const rootState = (studioId: string) =>
  buildRootState({ studioSelector: { studioId } });

describe("selectStudioId", () => {
  it("reads the selected studio id", () => {
    expect(selectStudioId(rootState("7248663"))).toBe("7248663");
  });
});

describe("selectStudio", () => {
  it("resolves the studio for the selected id", () => {
    expect(selectStudio(rootState(DEFAULT_STUDIO_ID))).toEqual({
      location: "New York",
      timezone: "America/New_York",
    });
  });

  it("is undefined when no studio is selected", () => {
    expect(selectStudio(rootState(""))).toBeUndefined();
  });

  it("is undefined for an unknown studio id", () => {
    expect(selectStudio(rootState("9999999"))).toBeUndefined();
  });
});
