import { describe, expect, it } from "vitest";
import { buildSnapshot, classifySnapshotMatch } from "./classHistory";
import type { ClassSnapshot } from "./classHistory";
import { WAITLIST_MAX } from "./classStatus";
import { buildAlert, buildInstructor, buildRawClass } from "./testing/fixtures";

describe("buildSnapshot", () => {
  it("captures the class shape needed to replay an alert", () => {
    const rawClass = buildRawClass({
      occupancy: 42,
      max_occupancy: 60,
      waiting_count: 3,
    });
    expect(buildSnapshot(rawClass, 1700000000000)).toEqual({
      snapshotAt: 1700000000000,
      starts_at: "2026-04-29T09:00:00-04:00",
      instructors: [{ id: "1", name: "Alex Toussaint" }],
      disciplineId: "5",
      occupancy: 42,
      maxOccupancy: 60,
      waitingCount: 3,
      status: "free",
      name: "45 min Club Bangers Ride",
    });
  });

  it("stringifies numeric instructor and discipline ids", () => {
    const snapshot = buildSnapshot(
      buildRawClass({ instructors: [buildInstructor({ id: 77 })] }),
      1
    );
    expect(snapshot.instructors[0].id).toBe("77");
    expect(snapshot.disciplineId).toBe("5");
  });

  it("computes the status at snapshot time", () => {
    const snapshot = buildSnapshot(
      buildRawClass({
        occupancy: 60,
        max_occupancy: 60,
        waiting_count: WAITLIST_MAX,
      }),
      1
    );
    expect(snapshot.status).toBe("full");
  });

  it("defaults snapshotAt to now", () => {
    const before = Date.now();
    const snapshot = buildSnapshot(buildRawClass());
    expect(snapshot.snapshotAt).toBeGreaterThanOrEqual(before);
    expect(snapshot.snapshotAt).toBeLessThanOrEqual(Date.now());
  });

  it("preserves a null class name", () => {
    expect(buildSnapshot(buildRawClass({ name: null }), 1).name).toBeNull();
  });
});

describe("classifySnapshotMatch", () => {
  const snapshot = (overrides: Partial<ClassSnapshot> = {}): ClassSnapshot => ({
    ...buildSnapshot(buildRawClass(), 1700000000000),
    ...overrides,
  });

  it("returns a match when every check passes", () => {
    expect(classifySnapshotMatch(snapshot(), buildAlert())).toEqual({
      type: "match",
    });
  });

  it("fails status when a free alert sees a waitlisted snapshot", () => {
    expect(
      classifySnapshotMatch(
        snapshot({ status: "waitlist" }),
        buildAlert({ maxStatus: "free" })
      )
    ).toEqual({ type: "near-miss", reason: "status" });
  });

  it("passes status when a waitlist alert sees a waitlisted snapshot", () => {
    expect(
      classifySnapshotMatch(
        snapshot({ status: "waitlist" }),
        buildAlert({ maxStatus: "waitlist" })
      )
    ).toEqual({ type: "match" });
  });

  it("fails status when a waitlist alert sees a full snapshot", () => {
    expect(
      classifySnapshotMatch(
        snapshot({ status: "full" }),
        buildAlert({ maxStatus: "waitlist" })
      )
    ).toEqual({ type: "near-miss", reason: "status" });
  });

  it("accepts any status for a full alert", () => {
    expect(
      classifySnapshotMatch(
        snapshot({ status: "full" }),
        buildAlert({ maxStatus: "full" })
      )
    ).toEqual({ type: "match" });
  });

  it("fails discipline when the snapshot discipline is not selected", () => {
    expect(
      classifySnapshotMatch(snapshot(), buildAlert({ disciplines: ["9"] }))
    ).toEqual({ type: "near-miss", reason: "discipline" });
  });

  it("fails instructor when no snapshot instructor is selected", () => {
    expect(
      classifySnapshotMatch(snapshot(), buildAlert({ instructors: ["99"] }))
    ).toEqual({ type: "near-miss", reason: "instructor" });
  });

  it("fails time when the snapshot start falls outside the day's range", () => {
    const alert = buildAlert({
      timeRanges: [
        null,
        null,
        null,
        { startMin: 12 * 60, endMin: 14 * 60 },
        null,
        null,
        null,
      ],
    });
    expect(classifySnapshotMatch(snapshot(), alert)).toEqual({
      type: "near-miss",
      reason: "time",
    });
  });

  it("returns skipped when more than one check fails", () => {
    expect(
      classifySnapshotMatch(
        snapshot({ status: "full" }),
        buildAlert({ maxStatus: "free", disciplines: ["9"] })
      )
    ).toEqual({ type: "skipped" });
  });

  it("agrees with classifyMatch on the same underlying class", () => {
    // A snapshot is a lossy projection of a class; the two classifiers must
    // still reach the same verdict for the checks they share.
    const alert = buildAlert({ instructors: ["1"], disciplines: ["5"] });
    expect(classifySnapshotMatch(snapshot(), alert)).toEqual({ type: "match" });
  });
});
