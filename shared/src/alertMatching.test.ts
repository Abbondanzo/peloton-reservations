import { describe, expect, it } from "vitest";
import {
  classifyMatch,
  getChangeType,
  getWaitlistChangeType,
  matchesAlert,
} from "./alertMatching";
import { WAITLIST_MAX } from "./classStatus";
import { buildAlert, buildInstructor, buildRawClass } from "./testing/fixtures";

const FULL = { occupancy: 60, max_occupancy: 60, waiting_count: WAITLIST_MAX };
const WAITLISTED = { occupancy: 60, max_occupancy: 60, waiting_count: 2 };
const FREE = { occupancy: 10, max_occupancy: 60, waiting_count: 0 };

describe("matchesAlert — status", () => {
  it("matches a free class for a free alert", () => {
    expect(
      matchesAlert(buildRawClass(FREE), buildAlert({ maxStatus: "free" }))
    ).toBe(true);
  });

  it("rejects a waitlisted class for a free alert", () => {
    expect(
      matchesAlert(buildRawClass(WAITLISTED), buildAlert({ maxStatus: "free" }))
    ).toBe(false);
  });

  it("matches a waitlisted class for a waitlist alert", () => {
    expect(
      matchesAlert(
        buildRawClass(WAITLISTED),
        buildAlert({ maxStatus: "waitlist" })
      )
    ).toBe(true);
  });

  it("rejects a class with a full waitlist for a waitlist alert", () => {
    expect(
      matchesAlert(buildRawClass(FULL), buildAlert({ maxStatus: "waitlist" }))
    ).toBe(false);
  });

  it("accepts any status for a full alert", () => {
    const alert = buildAlert({ maxStatus: "full" });
    expect(matchesAlert(buildRawClass(FULL), alert)).toBe(true);
    expect(matchesAlert(buildRawClass(WAITLISTED), alert)).toBe(true);
    expect(matchesAlert(buildRawClass(FREE), alert)).toBe(true);
  });
});

describe("matchesAlert — discipline", () => {
  it("matches any discipline when the filter is null", () => {
    expect(matchesAlert(buildRawClass(), buildAlert())).toBe(true);
  });

  it("compares discipline ids as strings", () => {
    // Class category id is the number 5; the alert stores string ids.
    expect(
      matchesAlert(buildRawClass(), buildAlert({ disciplines: ["5"] }))
    ).toBe(true);
  });

  it("rejects a discipline outside the filter", () => {
    expect(
      matchesAlert(buildRawClass(), buildAlert({ disciplines: ["7", "8"] }))
    ).toBe(false);
  });

  it("treats an empty discipline list as matching nothing", () => {
    expect(matchesAlert(buildRawClass(), buildAlert({ disciplines: [] }))).toBe(
      false
    );
  });
});

describe("matchesAlert — instructor", () => {
  it("matches any instructor when the filter is null", () => {
    expect(matchesAlert(buildRawClass(), buildAlert())).toBe(true);
  });

  it("matches when any of the class instructors is selected", () => {
    const rawClass = buildRawClass({
      instructors: [
        buildInstructor({ id: 1, name: "Alex" }),
        buildInstructor({ id: 2, name: "Robin" }),
      ],
    });
    expect(matchesAlert(rawClass, buildAlert({ instructors: ["2"] }))).toBe(
      true
    );
  });

  it("rejects when no class instructor is selected", () => {
    expect(
      matchesAlert(buildRawClass(), buildAlert({ instructors: ["99"] }))
    ).toBe(false);
  });

  it("rejects a class with no instructors when a filter is set", () => {
    expect(
      matchesAlert(
        buildRawClass({ instructors: [] }),
        buildAlert({ instructors: ["1"] })
      )
    ).toBe(false);
  });
});

describe("matchesAlert — time range", () => {
  // 2026-04-29T09:00:00-04:00 is Wednesday (day index 3) at 09:00 New York time.
  const wednesdayRange = (range: { startMin: number; endMin: number } | null) =>
    buildAlert({
      timeRanges: [null, null, null, range, null, null, null],
    });

  it("matches any time when timeRanges is null", () => {
    const alert = buildAlert();
    // The Alert type declares timeRanges as an array, but persisted alerts
    // created before per-day ranges existed can be missing it entirely.
    (alert as { timeRanges: unknown }).timeRanges = null;
    expect(matchesAlert(buildRawClass(), alert)).toBe(true);
  });

  it("matches inside the studio-local range for that weekday", () => {
    expect(
      matchesAlert(
        buildRawClass(),
        wednesdayRange({ startMin: 8 * 60, endMin: 10 * 60 })
      )
    ).toBe(true);
  });

  it("matches at the inclusive range boundaries", () => {
    expect(
      matchesAlert(
        buildRawClass(),
        wednesdayRange({ startMin: 9 * 60, endMin: 9 * 60 })
      )
    ).toBe(true);
  });

  it("rejects a class before the range starts", () => {
    expect(
      matchesAlert(
        buildRawClass(),
        wednesdayRange({ startMin: 10 * 60, endMin: 12 * 60 })
      )
    ).toBe(false);
  });

  it("rejects a class on a day with no range", () => {
    // Thursday-only range; the class is on Wednesday.
    expect(
      matchesAlert(
        buildRawClass(),
        buildAlert({
          timeRanges: [
            null,
            null,
            null,
            null,
            { startMin: 0, endMin: 24 * 60 },
            null,
            null,
          ],
        })
      )
    ).toBe(false);
  });

  it("uses studio-local time, not the viewer's time", () => {
    // 23:30 New York Wednesday is already Thursday in UTC. A Wednesday-late
    // range must still match.
    const lateClass = buildRawClass({ starts_at: "2026-04-29T23:30:00-04:00" });
    expect(
      matchesAlert(
        lateClass,
        wednesdayRange({ startMin: 23 * 60, endMin: 24 * 60 })
      )
    ).toBe(true);
  });

  it("evaluates London classes in London time", () => {
    // 2026-04-29T09:00:00+01:00 is 09:00 in Europe/London.
    const londonClass = buildRawClass({
      starts_at: "2026-04-29T09:00:00+01:00",
    });
    const alert = buildAlert({
      studioId: "7248663",
      timeRanges: [
        null,
        null,
        null,
        { startMin: 8 * 60 + 30, endMin: 9 * 60 + 30 },
        null,
        null,
        null,
      ],
    });
    expect(matchesAlert(londonClass, alert)).toBe(true);
  });

  it("rejects when the alert points at an unknown studio", () => {
    expect(
      matchesAlert(
        buildRawClass(),
        buildAlert({
          studioId: "does-not-exist",
          timeRanges: new Array(7).fill({ startMin: 0, endMin: 24 * 60 }),
        })
      )
    ).toBe(false);
  });
});

describe("classifyMatch", () => {
  it("returns a match when every check passes", () => {
    expect(classifyMatch(buildRawClass(FREE), buildAlert())).toEqual({
      type: "match",
    });
  });

  it("returns a near-miss naming the single failing check", () => {
    expect(
      classifyMatch(buildRawClass(FREE), buildAlert({ instructors: ["99"] }))
    ).toEqual({ type: "near-miss", reason: "instructor" });
  });

  it("reports a status-only failure as a status near-miss", () => {
    expect(
      classifyMatch(
        buildRawClass(WAITLISTED),
        buildAlert({ maxStatus: "free" })
      )
    ).toEqual({ type: "near-miss", reason: "status" });
  });

  it("returns skipped when more than one check fails", () => {
    expect(
      classifyMatch(
        buildRawClass(WAITLISTED),
        buildAlert({ maxStatus: "free", instructors: ["99"] })
      )
    ).toEqual({ type: "skipped" });
  });
});

describe("getChangeType", () => {
  it("reports became_free when a free alert's class opens up", () => {
    expect(
      getChangeType(
        buildAlert({ maxStatus: "free" }),
        buildRawClass(WAITLISTED),
        buildRawClass(FREE)
      )
    ).toBe("became_free");
  });

  it("returns null when the class was already free", () => {
    expect(
      getChangeType(
        buildAlert({ maxStatus: "free" }),
        buildRawClass(FREE),
        buildRawClass({ ...FREE, occupancy: 11 })
      )
    ).toBeNull();
  });

  it("reports waitlist_opened when a full waitlist drops below the cap", () => {
    expect(
      getChangeType(
        buildAlert({ maxStatus: "waitlist" }),
        buildRawClass(FULL),
        buildRawClass(WAITLISTED)
      )
    ).toBe("waitlist_opened");
  });

  it("returns null when the new class does not match the alert filters", () => {
    expect(
      getChangeType(
        buildAlert({ maxStatus: "free", instructors: ["99"] }),
        buildRawClass(WAITLISTED),
        buildRawClass(FREE)
      )
    ).toBeNull();
  });

  it("returns null for a full alert, which has no transition to report", () => {
    expect(
      getChangeType(
        buildAlert({ maxStatus: "full" }),
        buildRawClass(FULL),
        buildRawClass(FREE)
      )
    ).toBeNull();
  });
});

describe("getWaitlistChangeType", () => {
  const waitlistAlert = buildAlert({ waitlistAlerts: true });

  it("reports a change when the waiting count moves", () => {
    expect(
      getWaitlistChangeType(
        waitlistAlert,
        buildRawClass({ waiting_count: 2 }),
        buildRawClass({ waiting_count: 3 })
      )
    ).toBe("waitlist_changed");
  });

  it("returns null when waitlist alerts are off", () => {
    expect(
      getWaitlistChangeType(
        buildAlert(),
        buildRawClass({ waiting_count: 2 }),
        buildRawClass({ waiting_count: 3 })
      )
    ).toBeNull();
  });

  it("returns null when the waiting count is unchanged", () => {
    expect(
      getWaitlistChangeType(
        waitlistAlert,
        buildRawClass({ waiting_count: 2 }),
        buildRawClass({ waiting_count: 2 })
      )
    ).toBeNull();
  });

  it("ignores status, firing even when the class is full", () => {
    expect(
      getWaitlistChangeType(
        buildAlert({ waitlistAlerts: true, maxStatus: "free" }),
        buildRawClass({ ...FULL, waiting_count: WAITLIST_MAX }),
        buildRawClass({ ...FULL, waiting_count: WAITLIST_MAX + 1 })
      )
    ).toBe("waitlist_changed");
  });

  it("respects the instructor filter", () => {
    expect(
      getWaitlistChangeType(
        buildAlert({ waitlistAlerts: true, instructors: ["99"] }),
        buildRawClass({ waiting_count: 2 }),
        buildRawClass({ waiting_count: 3 })
      )
    ).toBeNull();
  });

  it("fires for a watched class id", () => {
    expect(
      getWaitlistChangeType(
        buildAlert({ waitlistAlerts: true, watchedClassIds: ["100"] }),
        buildRawClass({ waiting_count: 2 }),
        buildRawClass({ waiting_count: 3 })
      )
    ).toBe("waitlist_changed");
  });

  it("stays silent for a class outside the watched list", () => {
    expect(
      getWaitlistChangeType(
        buildAlert({ waitlistAlerts: true, watchedClassIds: ["999"] }),
        buildRawClass({ waiting_count: 2 }),
        buildRawClass({ waiting_count: 3 })
      )
    ).toBeNull();
  });

  it("treats an empty watched list as watching everything", () => {
    expect(
      getWaitlistChangeType(
        buildAlert({ waitlistAlerts: true, watchedClassIds: [] }),
        buildRawClass({ waiting_count: 2 }),
        buildRawClass({ waiting_count: 3 })
      )
    ).toBe("waitlist_changed");
  });
});
