import type { ClassSnapshot } from "shared";
import { describe, expect, it } from "vitest";
import { groupByDay } from "./groupByDay";

const snapshot = (snapshotAt: number): ClassSnapshot => ({
  snapshotAt,
  starts_at: "2026-04-29T09:00:00-04:00",
  instructors: [{ id: "1", name: "Alex" }],
  disciplineId: "5",
  occupancy: 10,
  maxOccupancy: 60,
  waitingCount: 0,
  status: "free",
  name: "45 min Club Bangers Ride",
});

const NY = "America/New_York";
const at = (iso: string) => snapshot(new Date(iso).getTime());

describe("groupByDay", () => {
  it("returns nothing for no snapshots", () => {
    expect(groupByDay([], NY)).toEqual([]);
  });

  it("groups snapshots detected on the same studio-local day", () => {
    const groups = groupByDay(
      [at("2026-04-29T13:00:00Z"), at("2026-04-29T20:00:00Z")],
      NY
    );
    expect(groups).toHaveLength(1);
    expect(groups[0].label).toBe("Wednesday, April 29");
    expect(groups[0].snapshots).toHaveLength(2);
  });

  it("splits snapshots across studio-local days", () => {
    const groups = groupByDay(
      [at("2026-04-29T13:00:00Z"), at("2026-04-30T13:00:00Z")],
      NY
    );
    expect(groups.map((g) => g.label)).toEqual([
      "Wednesday, April 29",
      "Thursday, April 30",
    ]);
  });

  it("groups by the studio's day, not UTC's", () => {
    // 02:00 UTC on the 30th is still the evening of the 29th in New York.
    const groups = groupByDay(
      [at("2026-04-29T13:00:00Z"), at("2026-04-30T02:00:00Z")],
      NY
    );
    expect(groups).toHaveLength(1);
  });

  it("labels the same instant differently for a different studio", () => {
    const late = [at("2026-04-30T02:00:00Z")];
    expect(groupByDay(late, NY)[0].label).toBe("Wednesday, April 29");
    expect(groupByDay(late, "Europe/London")[0].label).toBe(
      "Thursday, April 30"
    );
  });

  it("tags each group with its weekday index", () => {
    const groups = groupByDay(
      [at("2026-04-29T13:00:00Z"), at("2026-05-03T13:00:00Z")],
      NY
    );
    // Wednesday, then Sunday.
    expect(groups.map((g) => g.dayIndex)).toEqual([3, 0]);
  });

  it("preserves the order snapshots arrive in", () => {
    const first = at("2026-04-29T13:00:00Z");
    const second = at("2026-04-29T20:00:00Z");
    expect(groupByDay([second, first], NY)[0].snapshots).toEqual([
      second,
      first,
    ]);
  });
});
