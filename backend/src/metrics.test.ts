import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Metrics } from "./metrics";

const update = vi.fn();
const ref = vi.fn(() => ({ update }));

vi.mock("firebase-admin", () => ({
  default: {
    database: Object.assign(() => ({ ref }), {
      ServerValue: { increment: (n: number) => ({ ".sv": { increment: n } }) },
    }),
  },
}));

const increment = (n: number) => ({ ".sv": { increment: n } });

const originalNodeEnv = process.env.NODE_ENV;

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-04-29T13:45:00.000Z"));
  process.env.NODE_ENV = "production";
  update.mockResolvedValue(undefined);
});

afterEach(() => {
  process.env.NODE_ENV = originalNodeEnv;
  vi.useRealTimers();
});

describe("recordDiff", () => {
  it("writes atomic increments under today's UTC date and studio", async () => {
    await Metrics.recordDiff("7248695", 1, 2, 3);

    expect(ref).toHaveBeenCalledExactlyOnceWith(
      "metrics/2026-04-29/diffs/7248695"
    );
    expect(update).toHaveBeenCalledExactlyOnceWith({
      added: increment(1),
      changed: increment(2),
      removed: increment(3),
    });
  });

  it("omits counters that did not move", async () => {
    await Metrics.recordDiff("7248695", 0, 5, 0);

    expect(update).toHaveBeenCalledExactlyOnceWith({ changed: increment(5) });
  });

  it("skips the write entirely when nothing changed", async () => {
    await Metrics.recordDiff("7248695", 0, 0, 0);

    expect(update).not.toHaveBeenCalled();
  });

  it("does not write outside production", async () => {
    process.env.NODE_ENV = "development";

    await Metrics.recordDiff("7248695", 1, 1, 1);

    expect(update).not.toHaveBeenCalled();
  });
});

describe("recordFcm", () => {
  it("writes delivery counters under today's UTC date", async () => {
    await Metrics.recordFcm(3, 1, 1);

    expect(ref).toHaveBeenCalledExactlyOnceWith(
      "metrics/2026-04-29/notifications"
    );
    expect(update).toHaveBeenCalledExactlyOnceWith({
      sent: increment(3),
      failed: increment(1),
      usersReached: increment(1),
    });
  });

  it("omits counters that are zero", async () => {
    await Metrics.recordFcm(2, 0, 1);

    expect(update).toHaveBeenCalledExactlyOnceWith({
      sent: increment(2),
      usersReached: increment(1),
    });
  });

  it("still writes when every counter is zero, unlike recordDiff", async () => {
    // recordFcm has no early return for an all-zero payload; it issues an
    // empty update rather than skipping the round trip.
    await Metrics.recordFcm(0, 0, 0);

    expect(update).toHaveBeenCalledExactlyOnceWith({});
  });

  it("does not write outside production", async () => {
    process.env.NODE_ENV = "test";

    await Metrics.recordFcm(1, 0, 1);

    expect(update).not.toHaveBeenCalled();
  });
});
