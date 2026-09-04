import { describe, expect, it } from "vitest";
import { DEFAULT_STUDIO_ID } from "shared";
import { setStudioId, studioSlice } from "./studioSlice";

const reducer = studioSlice.reducer;

describe("studioSlice", () => {
  it("starts from the stored or default studio", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual({
      studioId: DEFAULT_STUDIO_ID,
    });
  });

  it("switches studios", () => {
    expect(
      reducer({ studioId: DEFAULT_STUDIO_ID }, setStudioId("7248663"))
    ).toEqual({ studioId: "7248663" });
  });
});
