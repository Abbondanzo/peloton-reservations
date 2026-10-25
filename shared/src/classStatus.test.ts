import { describe, expect, it } from "vitest";
import {
  WAITLIST_MAX,
  getBookableStatus,
  getWaitlistMax,
  isFree,
  isWaitlistFull,
} from "./classStatus";
import { buildRawClass } from "./testing/fixtures";

describe("isFree", () => {
  it("is true while occupancy is below capacity", () => {
    expect(isFree(buildRawClass({ occupancy: 59, max_occupancy: 60 }))).toBe(
      true
    );
  });

  it("is false once occupancy reaches capacity", () => {
    expect(isFree(buildRawClass({ occupancy: 60, max_occupancy: 60 }))).toBe(
      false
    );
  });

  it("is false when occupancy exceeds capacity", () => {
    expect(isFree(buildRawClass({ occupancy: 61, max_occupancy: 60 }))).toBe(
      false
    );
  });
});

describe("getWaitlistMax", () => {
  const offeringType = buildRawClass().offering_type;

  it("prefers the class's own override", () => {
    expect(
      getWaitlistMax(
        buildRawClass({
          waitlist_max_override: 25,
          offering_type: { ...offeringType, waitlist_max: 10 },
        })
      )
    ).toBe(25);
  });

  it("falls back to the offering type's cap when there is no override", () => {
    expect(
      getWaitlistMax(
        buildRawClass({
          waitlist_max_override: 0,
          offering_type: { ...offeringType, waitlist_max: 15 },
        })
      )
    ).toBe(15);
  });

  it("falls back to the default when neither is usable", () => {
    expect(
      getWaitlistMax(
        buildRawClass({
          waitlist_max_override: 0,
          offering_type: { ...offeringType, waitlist_max: 0 },
        })
      )
    ).toBe(WAITLIST_MAX);
  });
});

describe("isWaitlistFull", () => {
  it("uses the class's own cap rather than the default", () => {
    const offeringType = buildRawClass().offering_type;
    const roomyWaitlist = buildRawClass({
      occupancy: 60,
      max_occupancy: 60,
      waiting_count: 12,
      offering_type: { ...offeringType, waitlist_max: 15 },
    });

    expect(isWaitlistFull(roomyWaitlist)).toBe(false);
    expect(getBookableStatus(roomyWaitlist)).toBe("waitlist");
  });

  it("is false below the waitlist cap", () => {
    expect(
      isWaitlistFull(buildRawClass({ waiting_count: WAITLIST_MAX - 1 }))
    ).toBe(false);
  });

  it("is true at the waitlist cap", () => {
    expect(isWaitlistFull(buildRawClass({ waiting_count: WAITLIST_MAX }))).toBe(
      true
    );
  });

  it("is true above the waitlist cap", () => {
    expect(
      isWaitlistFull(buildRawClass({ waiting_count: WAITLIST_MAX + 5 }))
    ).toBe(true);
  });
});

describe("getBookableStatus", () => {
  it("reports free when seats remain, regardless of waitlist", () => {
    const rawClass = buildRawClass({
      occupancy: 10,
      max_occupancy: 60,
      waiting_count: WAITLIST_MAX,
    });
    expect(getBookableStatus(rawClass)).toBe("free");
  });

  it("reports waitlist when the class is sold out but the waitlist has room", () => {
    const rawClass = buildRawClass({
      occupancy: 60,
      max_occupancy: 60,
      waiting_count: 3,
    });
    expect(getBookableStatus(rawClass)).toBe("waitlist");
  });

  it("reports full when the class and its waitlist are both at capacity", () => {
    const rawClass = buildRawClass({
      occupancy: 60,
      max_occupancy: 60,
      waiting_count: WAITLIST_MAX,
    });
    expect(getBookableStatus(rawClass)).toBe("full");
  });
});
