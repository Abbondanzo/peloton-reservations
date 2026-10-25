import { push, ref, remove, update } from "firebase/database";
import { buildAlert } from "shared/testing";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { addAlert } from "./addAlert";
import { deleteAlert } from "./deleteAlert";
import { editAlert } from "./editAlert";
import { setPreferences } from "./setPreferences";

vi.mock("../../firebase/constants/database", () => ({
  database: { __brand: "database" },
}));

vi.mock("firebase/database", () => ({
  ref: vi.fn((_db, path: string) => ({ path })),
  update: vi.fn().mockResolvedValue(undefined),
  remove: vi.fn().mockResolvedValue(undefined),
  push: vi.fn().mockResolvedValue({ key: "generated-id" }),
}));

const pathOf = (mock: { mock: { calls: unknown[][] } }, call = 0) =>
  (mock.mock.calls[call][0] as { path: string }).path;

beforeEach(() => {
  vi.mocked(push).mockResolvedValue({ key: "generated-id" } as never);
});

describe("addAlert", () => {
  it("pushes the alert under the user's alerts", async () => {
    await addAlert("u1", buildAlert());

    expect(vi.mocked(ref).mock.calls[0][1]).toBe("alerts/u1");
  });

  it("returns the alert stamped with the generated id", async () => {
    const alert = buildAlert({ id: "" });

    expect(await addAlert("u1", alert)).toEqual({
      ...alert,
      id: "generated-id",
    });
  });

  it("throws when Firebase hands back no key", async () => {
    vi.mocked(push).mockResolvedValue({ key: null } as never);

    await expect(addAlert("u1", buildAlert())).rejects.toThrow(
      "Missing ID from insertion operation"
    );
  });
});

describe("editAlert", () => {
  it("writes to the alert's own path", async () => {
    await editAlert("u1", buildAlert({ id: "a1" }));

    expect(pathOf(vi.mocked(update))).toBe("alerts/u1/a1");
  });

  it("nulls out absent optional fields so stale values are deleted", async () => {
    // update() is a partial write: omitting a key leaves the old value in
    // place, so absent optional fields must be sent as an explicit null.
    await editAlert("u1", buildAlert());

    expect(vi.mocked(update).mock.calls[0][1]).toMatchObject({
      name: null,
      watchedClassIds: null,
      disabled: null,
    });
  });

  it("keeps optional fields that are set", async () => {
    await editAlert(
      "u1",
      buildAlert({
        name: "Morning rides",
        watchedClassIds: ["100"],
        disabled: true,
      })
    );

    expect(vi.mocked(update).mock.calls[0][1]).toMatchObject({
      name: "Morning rides",
      watchedClassIds: ["100"],
      disabled: true,
    });
  });

  it("writes disabled: false rather than dropping it", async () => {
    // false is a real stored value that must overwrite a previous true.
    await editAlert("u1", buildAlert({ disabled: false }));

    expect(vi.mocked(update).mock.calls[0][1]).toMatchObject({
      disabled: false,
    });
  });

  it("carries the alert's filters through unchanged", async () => {
    const alert = buildAlert({ instructors: ["1"], disciplines: ["5"] });

    await editAlert("u1", alert);

    expect(vi.mocked(update).mock.calls[0][1]).toMatchObject({
      instructors: ["1"],
      disciplines: ["5"],
      maxStatus: alert.maxStatus,
      studioId: alert.studioId,
    });
  });
});

describe("deleteAlert", () => {
  it("removes the alert's own path", async () => {
    await deleteAlert("u1", "a1");

    expect(pathOf(vi.mocked(remove))).toBe("alerts/u1/a1");
  });
});

describe("setPreferences", () => {
  it("merges the given preferences into the user's node", async () => {
    await setPreferences("u1", { notificationDelayMin: 5 });

    expect(pathOf(vi.mocked(update))).toBe("alertPreferences/u1");
    expect(vi.mocked(update).mock.calls[0][1]).toEqual({
      notificationDelayMin: 5,
    });
  });

  it("passes a pause flag straight through", async () => {
    await setPreferences("u1", { pauseAll: false });

    expect(vi.mocked(update).mock.calls[0][1]).toEqual({ pauseAll: false });
  });
});
