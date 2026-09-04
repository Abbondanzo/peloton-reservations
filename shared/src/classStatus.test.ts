import { describe, expect, it } from "vitest";
import {
  WAITLIST_MAX,
  getBookableStatus,
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

describe("isWaitlistFull", () => {
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
