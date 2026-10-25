import { describe, expect, it } from "vitest";
import { DEFAULT_STUDIO_ID } from "shared";
import { buildClass } from "../../../test/buildClass";
import { buildFilterState, buildRootState } from "../../../test/buildRootState";
import { selectFilteredClassesGroups } from "./selectFilteredClassesGroups";

const rootState = (studioId = DEFAULT_STUDIO_ID) =>
  buildRootState({
    filters: buildFilterState({
      selectedBookableStatuses: ["free", "waitlist", "full"],
    }),
    studioSelector: { studioId },
  });

const at = (id: string, start: string) => buildClass({ id, start });

describe("selectFilteredClassesGroups", () => {
  it("returns no groups when nothing survives filtering", () => {
    expect(selectFilteredClassesGroups(rootState(), [])).toEqual([]);
  });

  it("puts same-day classes in one labelled group", () => {
    const groups = selectFilteredClassesGroups(rootState(), [
      at("1", "2026-04-29T09:00:00-04:00"),
      at("2", "2026-04-29T18:00:00-04:00"),
    ]);
    expect(groups).toHaveLength(1);
    expect(groups[0].formattedDate).toBe("Wednesday, April 29");
    expect(groups[0].classes.map((c) => c.id)).toEqual(["1", "2"]);
  });

  it("starts a new group at each day boundary", () => {
    const groups = selectFilteredClassesGroups(rootState(), [
      at("1", "2026-04-29T09:00:00-04:00"),
      at("2", "2026-04-30T09:00:00-04:00"),
      at("3", "2026-04-30T10:00:00-04:00"),
    ]);
    expect(groups.map((g) => g.classes.map((c) => c.id))).toEqual([
      ["1"],
      ["2", "3"],
    ]);
  });

  it("groups by the studio's calendar day, not the viewer's", () => {
    // 23:30 New York on the 29th is already the 30th in UTC.
    const groups = selectFilteredClassesGroups(rootState(), [
      at("1", "2026-04-29T09:00:00-04:00"),
      at("2", "2026-04-29T23:30:00-04:00"),
    ]);
    expect(groups).toHaveLength(1);
  });

  it("uses London days when the London studio is selected", () => {
    const groups = selectFilteredClassesGroups(rootState("7248663"), [
      at("1", "2026-04-29T23:30:00-04:00"),
    ]);
    // The same instant is already 04:30 on the 30th in London.
    expect(groups[0].formattedDate).toBe("Thursday, April 30");
  });

  it("emits the trailing group", () => {
    const groups = selectFilteredClassesGroups(rootState(), [
      at("1", "2026-04-29T09:00:00-04:00"),
      at("2", "2026-04-30T09:00:00-04:00"),
    ]);
    expect(groups[groups.length - 1].classes.map((c) => c.id)).toEqual(["2"]);
  });
});
