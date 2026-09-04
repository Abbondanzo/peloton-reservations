import { renderHook } from "@testing-library/react";
import { onValue } from "firebase/database";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useSelloutStats } from "./useSelloutStats";

vi.mock("../../firebase/constants/database", () => ({
  database: { __brand: "database" },
}));

vi.mock("firebase/database", () => ({
  ref: vi.fn((_db, path: string) => ({ path })),
  onValue: vi.fn(),
}));

const MINUTE = 60_000;

type Handlers = {
  emit: (value: unknown) => void;
  fail: (error: Error) => void;
};

const handlers = (): Handlers => {
  const [, onNext, onError] = vi.mocked(onValue).mock.calls[0];
  return {
    emit: (value) =>
      (onNext as (s: { val: () => unknown }) => void)({ val: () => value }),
    fail: (error) => (onError as unknown as (e: Error) => void)(error),
  };
};

const record = (overrides: Record<string, unknown> = {}) => ({
  classId: "100",
  className: "45 min Ride",
  instructorName: "Alex",
  addedAt: 1700000000000,
  timeToWaitlistMs: 10 * MINUTE,
  timeToFullMs: 20 * MINUTE,
  ...overrides,
});

const unsubscribe = vi.fn();

beforeEach(() => {
  vi.mocked(onValue).mockReturnValue(unsubscribe as never);
});

describe("useSelloutStats", () => {
  it("starts loading while the subscription is open", () => {
    const { result } = renderHook(() => useSelloutStats());

    expect(result.current).toEqual({ state: "loading" });
  });

  it("rolls an instructor's records up into medians", () => {
    const { result, rerender } = renderHook(() => useSelloutStats());

    handlers().emit({
      "1": {
        c1: record({ classId: "c1", timeToWaitlistMs: 10 * MINUTE }),
        c2: record({ classId: "c2", timeToWaitlistMs: 30 * MINUTE }),
        c3: record({ classId: "c3", timeToWaitlistMs: 20 * MINUTE }),
      },
    });
    rerender();

    expect(result.current).toEqual({
      state: "fulfilled",
      data: [
        {
          instructorId: "1",
          instructorName: "Alex",
          classCount: 3,
          medianTimeToWaitlistMs: 20 * MINUTE,
          waitlistSampleSize: 3,
          medianTimeToFullMs: 20 * MINUTE,
          fullSampleSize: 3,
        },
      ],
    });
  });

  it("averages the middle two for an even sample", () => {
    const { result, rerender } = renderHook(() => useSelloutStats());

    handlers().emit({
      "1": {
        c1: record({ timeToWaitlistMs: 10 * MINUTE }),
        c2: record({ timeToWaitlistMs: 20 * MINUTE }),
      },
    });
    rerender();

    expect(
      result.current.state === "fulfilled" &&
        result.current.data[0].medianTimeToWaitlistMs
    ).toBe(15 * MINUTE);
  });

  it("reports a null median when no class reached that milestone", () => {
    const { result, rerender } = renderHook(() => useSelloutStats());

    handlers().emit({
      "1": { c1: record({ timeToWaitlistMs: null, timeToFullMs: null }) },
    });
    rerender();

    expect(
      result.current.state === "fulfilled" && result.current.data[0]
    ).toMatchObject({
      medianTimeToWaitlistMs: null,
      waitlistSampleSize: 0,
      medianTimeToFullMs: null,
      fullSampleSize: 0,
      classCount: 1,
    });
  });

  it("counts only the classes that reached a milestone in its sample size", () => {
    const { result, rerender } = renderHook(() => useSelloutStats());

    handlers().emit({
      "1": {
        c1: record({ timeToWaitlistMs: 10 * MINUTE, timeToFullMs: null }),
        c2: record({
          timeToWaitlistMs: 20 * MINUTE,
          timeToFullMs: 40 * MINUTE,
        }),
      },
    });
    rerender();

    expect(
      result.current.state === "fulfilled" && result.current.data[0]
    ).toMatchObject({
      classCount: 2,
      waitlistSampleSize: 2,
      fullSampleSize: 1,
      medianTimeToFullMs: 40 * MINUTE,
    });
  });

  it("keeps instructors separate", () => {
    const { result, rerender } = renderHook(() => useSelloutStats());

    handlers().emit({
      "1": { c1: record({ instructorName: "Alex" }) },
      "2": { c2: record({ instructorName: "Robin" }) },
    });
    rerender();

    expect(
      result.current.state === "fulfilled" &&
        result.current.data.map((d) => d.instructorName)
    ).toEqual(["Alex", "Robin"]);
  });

  it("skips malformed records", () => {
    const { result, rerender } = renderHook(() => useSelloutStats());

    handlers().emit({
      "1": {
        good: record(),
        missingId: record({ classId: undefined }),
        notAnObject: "nonsense",
      },
    });
    rerender();

    expect(
      result.current.state === "fulfilled" && result.current.data[0].classCount
    ).toBe(1);
  });

  it("skips an instructor whose records are all malformed", () => {
    const { result, rerender } = renderHook(() => useSelloutStats());

    handlers().emit({ "1": { bad: { classId: 5 } } });
    rerender();

    expect(result.current).toEqual({ state: "fulfilled", data: [] });
  });

  it("resolves to an empty list when nothing is stored", () => {
    const { result, rerender } = renderHook(() => useSelloutStats());

    handlers().emit(null);
    rerender();

    expect(result.current).toEqual({ state: "fulfilled", data: [] });
  });

  it("surfaces a subscription error", () => {
    const { result, rerender } = renderHook(() => useSelloutStats());
    const error = new Error("permission denied");

    handlers().fail(error);
    rerender();

    expect(result.current).toEqual({ state: "failed", error });
  });

  it("tears the subscription down on unmount", () => {
    renderHook(() => useSelloutStats()).unmount();

    expect(unsubscribe).toHaveBeenCalledOnce();
  });
});
