import { describe, expect, it, vi } from "vitest";
import type { RawClassResponse } from "./classApi";
import {
  PELOTON_API_BASE,
  PELOTON_CORS_PROXY,
  buildEventsUrl,
  fetchAllPelotonPages,
  getPelotonHeaders,
  rebasePelotonUrl,
} from "./pelotonApi";
import { buildRawClass } from "./testing/fixtures";

describe("getPelotonHeaders", () => {
  it("sends customer mode scoped to the studio", () => {
    expect(getPelotonHeaders("7248695")).toEqual({
      "Teamup-Request-Mode": "customer",
      "Teamup-Provider-ID": "7248695",
    });
  });
});

describe("buildEventsUrl", () => {
  const params = (url: string) => new URL(url).searchParams;

  it("always requests a full sorted page from the given start", () => {
    const url = buildEventsUrl({
      localStartsAtGte: new Date("2026-04-29T09:00:00.000Z"),
    });
    expect(url.startsWith(`${PELOTON_API_BASE}/events?`)).toBe(true);
    expect(params(url).get("local_starts_at_gte")).toBe(
      "2026-04-29T09:00:00.000"
    );
    expect(params(url).get("page_size")).toBe("500");
    expect(params(url).get("sort")).toBe("start");
  });

  it("strips the trailing Z so Peloton reads the timestamp as studio-local", () => {
    const url = buildEventsUrl({
      localStartsAtGte: new Date("2026-04-29T09:00:00.000Z"),
    });
    expect(params(url).get("local_starts_at_gte")).not.toContain("Z");
  });

  it("defaults the lower bound to now and omits the upper bound", () => {
    const url = buildEventsUrl({});
    expect(params(url).get("local_starts_at_gte")).toBeTruthy();
    expect(params(url).has("local_starts_at_lte")).toBe(false);
  });

  it("adds an upper bound when one is supplied", () => {
    const url = buildEventsUrl({
      localStartsAtLte: new Date("2026-05-06T00:00:00.000Z"),
    });
    expect(params(url).get("local_starts_at_lte")).toBe(
      "2026-05-06T00:00:00.000"
    );
  });

  it("joins fields and expand with commas", () => {
    const url = buildEventsUrl({
      fields: ["id", "name"],
      expand: ["instructors", "offering_type"],
    });
    expect(params(url).get("fields")).toBe("id,name");
    expect(params(url).get("expand")).toBe("instructors,offering_type");
  });

  it("omits empty fields and expand lists", () => {
    const url = buildEventsUrl({ fields: [], expand: [] });
    expect(params(url).has("fields")).toBe(false);
    expect(params(url).has("expand")).toBe(false);
  });

  it("prefixes the CORS proxy when requested", () => {
    const url = buildEventsUrl({ corsProxy: true });
    expect(
      url.startsWith(`${PELOTON_CORS_PROXY}/${PELOTON_API_BASE}/events?`)
    ).toBe(true);
  });
});

describe("rebasePelotonUrl", () => {
  it("keeps the query but re-points the host at the API base", () => {
    expect(
      rebasePelotonUrl("https://elsewhere.example.com/api/v9/events?page=2")
    ).toBe(`${PELOTON_API_BASE}/events?page=2`);
  });

  it("re-points through the proxy when requested", () => {
    expect(
      rebasePelotonUrl("https://elsewhere.example.com/events?page=2", true)
    ).toBe(`${PELOTON_CORS_PROXY}/${PELOTON_API_BASE}/events?page=2`);
  });
});

describe("fetchAllPelotonPages", () => {
  const page = (
    results: number[],
    next: string | null = null
  ): RawClassResponse => ({
    count: results.length,
    next,
    previous: null,
    results: results.map((id) => buildRawClass({ id })),
  });

  it("returns the first page's results when there is no next link", async () => {
    const fetchPage = vi.fn().mockResolvedValue(page([1, 2]));
    const all = await fetchAllPelotonPages("https://start", fetchPage);
    expect(all.map((c) => c.id)).toEqual([1, 2]);
    expect(fetchPage).toHaveBeenCalledExactlyOnceWith("https://start");
  });

  it("follows every next link and concatenates the pages in order", async () => {
    const fetchPage = vi
      .fn()
      .mockResolvedValueOnce(page([1], "https://peloton/events?page=2"))
      .mockResolvedValueOnce(page([2], "https://peloton/events?page=3"))
      .mockResolvedValueOnce(page([3]));
    const all = await fetchAllPelotonPages("https://start", fetchPage);
    expect(all.map((c) => c.id)).toEqual([1, 2, 3]);
    expect(fetchPage).toHaveBeenCalledTimes(3);
  });

  it("rebases each next link onto the API base before refetching", async () => {
    const fetchPage = vi
      .fn()
      .mockResolvedValueOnce(
        page([1], "https://elsewhere.example.com/e?page=2")
      )
      .mockResolvedValueOnce(page([2]));
    await fetchAllPelotonPages("https://start", fetchPage);
    expect(fetchPage).toHaveBeenLastCalledWith(
      `${PELOTON_API_BASE}/events?page=2`
    );
  });

  it("rebases through the proxy when paginating in the browser", async () => {
    const fetchPage = vi
      .fn()
      .mockResolvedValueOnce(
        page([1], "https://elsewhere.example.com/e?page=2")
      )
      .mockResolvedValueOnce(page([2]));
    await fetchAllPelotonPages("https://start", fetchPage, true);
    expect(fetchPage).toHaveBeenLastCalledWith(
      `${PELOTON_CORS_PROXY}/${PELOTON_API_BASE}/events?page=2`
    );
  });

  it("propagates a failure from any page", async () => {
    const fetchPage = vi
      .fn()
      .mockResolvedValueOnce(page([1], "https://peloton/events?page=2"))
      .mockRejectedValueOnce(new Error("boom"));
    await expect(
      fetchAllPelotonPages("https://start", fetchPage)
    ).rejects.toThrow("boom");
  });
});
