import { describe, expect, it } from "vitest";
import { BOOKABLE_STATUS_KEYS, isBookableStatus } from "./alerts";

describe("isBookableStatus", () => {
  it.each(BOOKABLE_STATUS_KEYS)("accepts %s", (status) => {
    expect(isBookableStatus(status)).toBe(true);
  });

  it.each(["", "FREE", "waiting", "unknown"])("rejects %j", (value) => {
    expect(isBookableStatus(value)).toBe(false);
  });

  it("lists the statuses from most to least bookable", () => {
    expect(BOOKABLE_STATUS_KEYS).toEqual(["free", "waitlist", "full"]);
  });
});
