import { ref, remove, set } from "@firebase/database";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { deleteToken } from "./deleteToken";
import { setToken } from "./setToken";

vi.mock("../../firebase/constants/database", () => ({
  database: { __brand: "database" },
}));

vi.mock("@firebase/database", () => ({
  ref: vi.fn((_db, path: string) => ({ path })),
  set: vi.fn().mockResolvedValue(undefined),
  remove: vi.fn().mockResolvedValue(undefined),
}));

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-04-29T13:00:00.000Z"));
  Object.defineProperty(window.navigator, "userAgent", {
    value: "TestBrowser/1.0",
    configurable: true,
  });
});

afterEach(() => {
  vi.useRealTimers();
});

describe("setToken", () => {
  it("registers the device under the user's token path", async () => {
    await setToken("u1", "token-a");

    expect(vi.mocked(ref).mock.calls[0][1]).toBe("messagingTokens/u1/token-a");
  });

  it("records when and from what the device registered", async () => {
    await setToken("u1", "token-a");

    expect(vi.mocked(set).mock.calls[0][1]).toEqual({
      timestamp: Date.now(),
      userAgent: "TestBrowser/1.0",
    });
  });
});

describe("deleteToken", () => {
  it("removes the user's token path", async () => {
    await deleteToken("u1", "token-a");

    expect(
      (vi.mocked(remove).mock.calls[0][0] as unknown as { path: string }).path
    ).toBe("messagingTokens/u1/token-a");
  });
});
