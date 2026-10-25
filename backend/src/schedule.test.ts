import * as fs from "fs/promises";
import * as os from "os";
import * as path from "path";
import type { RawClass, RawClassResponse } from "shared";
import { buildRawClass } from "shared/testing";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Schedule } from "./schedule";

vi.mock("@sentry/node", () => ({
  startSpan: (_options: unknown, callback: () => unknown) => callback(),
}));

vi.mock("./logger", () => ({
  logger: { log: vi.fn(), error: vi.fn() },
}));

const STUDIO_ID = "7248695";

const response = (results: RawClass[]): RawClassResponse => ({
  count: results.length,
  next: null,
  previous: null,
  results,
});

const okResponse = (results: RawClass[]) => ({
  ok: true,
  status: 200,
  json: async () => response(results),
});

const errorResponse = (status: number) => ({
  ok: false,
  status,
  json: async () => ({}),
});

let dataDir: string;
let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(async () => {
  dataDir = await fs.mkdtemp(path.join(os.tmpdir(), "schedule-test-"));
  process.env.DATA_DIR = dataDir;
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(async () => {
  vi.unstubAllGlobals();
  delete process.env.DATA_DIR;
  await fs.rm(dataDir, { recursive: true, force: true });
});

describe("initialize", () => {
  it("fetches the schedule and writes it to the cache", async () => {
    fetchMock.mockResolvedValue(okResponse([buildRawClass({ id: 1 })]));

    await new Schedule(STUDIO_ID).initialize();

    expect(fetchMock).toHaveBeenCalledOnce();
    const cached = JSON.parse(
      await fs.readFile(path.join(dataDir, `${STUDIO_ID}.json`), "utf-8")
    );
    expect(cached).toHaveLength(1);
    expect(cached[0].id).toBe(1);
  });

  it("sends the studio-scoped Peloton headers", async () => {
    fetchMock.mockResolvedValue(okResponse([]));

    await new Schedule(STUDIO_ID).initialize();

    expect(fetchMock.mock.calls[0][1]).toEqual({
      headers: {
        "Teamup-Request-Mode": "customer",
        "Teamup-Provider-ID": STUDIO_ID,
      },
    });
  });

  it("reuses the on-disk cache instead of refetching after a restart", async () => {
    await fs.writeFile(
      path.join(dataDir, `${STUDIO_ID}.json`),
      JSON.stringify([buildRawClass({ id: 7 })])
    );
    fetchMock.mockResolvedValue(okResponse([]));

    const schedule = new Schedule(STUDIO_ID);
    await schedule.initialize();

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("falls back to fetching when the cache file is corrupt", async () => {
    await fs.writeFile(path.join(dataDir, `${STUDIO_ID}.json`), "not json");
    fetchMock.mockResolvedValue(okResponse([buildRawClass({ id: 1 })]));

    await new Schedule(STUDIO_ID).initialize();

    expect(fetchMock).toHaveBeenCalledOnce();
  });

  it("scopes the cache file per studio", async () => {
    fetchMock.mockResolvedValue(okResponse([]));

    await new Schedule("7248663").initialize();

    expect(await fs.readdir(dataDir)).toEqual(["7248663.json"]);
  });
});

describe("diff", () => {
  const initialized = async (classes: RawClass[]) => {
    fetchMock.mockResolvedValueOnce(okResponse(classes));
    const schedule = new Schedule(STUDIO_ID);
    await schedule.initialize();
    return schedule;
  };

  it("throws when called before initialize", async () => {
    await expect(new Schedule(STUDIO_ID).diff()).rejects.toThrow(
      "Called diff before initializing schedule"
    );
  });

  it("reports nothing when the schedule is unchanged", async () => {
    const classes = [buildRawClass({ id: 1 }), buildRawClass({ id: 2 })];
    const schedule = await initialized(classes);
    fetchMock.mockResolvedValueOnce(okResponse(classes));

    expect(await schedule.diff()).toEqual({
      added: [],
      changed: [],
      removed: [],
    });
  });

  it("reports classes that appeared", async () => {
    const schedule = await initialized([buildRawClass({ id: 1 })]);
    fetchMock.mockResolvedValueOnce(
      okResponse([buildRawClass({ id: 1 }), buildRawClass({ id: 2 })])
    );

    const diff = await schedule.diff();
    expect(diff.added.map((c) => c.id)).toEqual([2]);
    expect(diff.changed).toEqual([]);
    expect(diff.removed).toEqual([]);
  });

  it("reports classes that disappeared", async () => {
    const schedule = await initialized([
      buildRawClass({ id: 1 }),
      buildRawClass({ id: 2 }),
    ]);
    fetchMock.mockResolvedValueOnce(okResponse([buildRawClass({ id: 1 })]));

    const diff = await schedule.diff();
    expect(diff.removed.map((c) => c.id)).toEqual([2]);
    expect(diff.added).toEqual([]);
  });

  it("treats every class as added when starting from an empty schedule", async () => {
    const schedule = await initialized([]);
    fetchMock.mockResolvedValueOnce(
      okResponse([buildRawClass({ id: 1 }), buildRawClass({ id: 2 })])
    );

    expect((await schedule.diff()).added.map((c) => c.id)).toEqual([1, 2]);
  });

  it.each([
    ["occupancy", { occupancy: 11 }],
    ["max_occupancy", { max_occupancy: 61 }],
    ["waiting_count", { waiting_count: 1 }],
  ])("reports a change when %s moves", async (_field, change) => {
    const schedule = await initialized([buildRawClass({ id: 1 })]);
    fetchMock.mockResolvedValueOnce(
      okResponse([buildRawClass({ id: 1, ...change })])
    );

    const diff = await schedule.diff();
    expect(diff.changed).toHaveLength(1);
    expect(diff.changed[0].old.id).toBe(1);
    expect(diff.changed[0].new).toMatchObject(change);
  });

  it("ignores fields that do not affect bookability", async () => {
    const schedule = await initialized([buildRawClass({ id: 1 })]);
    fetchMock.mockResolvedValueOnce(
      okResponse([buildRawClass({ id: 1, name: "Renamed Ride" })])
    );

    expect((await schedule.diff()).changed).toEqual([]);
  });

  it("compares against the previous diff, not the original snapshot", async () => {
    const schedule = await initialized([buildRawClass({ id: 1 })]);
    fetchMock.mockResolvedValueOnce(
      okResponse([buildRawClass({ id: 1, occupancy: 11 })])
    );
    await schedule.diff();

    fetchMock.mockResolvedValueOnce(
      okResponse([buildRawClass({ id: 1, occupancy: 11 })])
    );
    expect((await schedule.diff()).changed).toEqual([]);
  });

  it("persists the new schedule so a restart resumes from it", async () => {
    const schedule = await initialized([buildRawClass({ id: 1 })]);
    fetchMock.mockResolvedValueOnce(okResponse([buildRawClass({ id: 2 })]));
    await schedule.diff();

    const cached = JSON.parse(
      await fs.readFile(path.join(dataDir, `${STUDIO_ID}.json`), "utf-8")
    );
    expect(cached.map((c: RawClass) => c.id)).toEqual([2]);
  });
});

describe("fetch retries", () => {
  // Real timers: the backoff sleeps interleave with real fs I/O for the cache
  // write, which fake timers stall. Worst case is ~3.5s of backoff, so these
  // tests get a wider timeout instead.
  const RETRY_TIMEOUT_MS = 20_000;

  const runInitialize = () =>
    new Schedule(STUDIO_ID).initialize().then(
      () => ({ ok: true }) as const,
      (error: Error) => ({ ok: false, error }) as const
    );

  it(
    "retries a 5xx and succeeds once the API recovers",
    async () => {
      fetchMock
        .mockResolvedValueOnce(errorResponse(503))
        .mockResolvedValueOnce(errorResponse(500))
        .mockResolvedValueOnce(okResponse([buildRawClass({ id: 1 })]));

      const result = await runInitialize();

      expect(result.ok).toBe(true);
      expect(fetchMock).toHaveBeenCalledTimes(3);
    },
    RETRY_TIMEOUT_MS
  );

  it("does not retry a 4xx", async () => {
    fetchMock.mockResolvedValue(errorResponse(404));

    const result = await runInitialize();

    expect(result).toMatchObject({ ok: false });
    expect(fetchMock).toHaveBeenCalledOnce();
  });

  it(
    "gives up after the retry budget is spent",
    async () => {
      fetchMock.mockResolvedValue(errorResponse(500));

      const result = await runInitialize();

      expect(result).toMatchObject({ ok: false });
      // One initial attempt plus three retries.
      expect(fetchMock).toHaveBeenCalledTimes(4);
      expect(result.ok === false && result.error.message).toContain(
        "Peloton API returned 500"
      );
    },
    RETRY_TIMEOUT_MS
  );
});
