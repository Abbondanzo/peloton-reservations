import type { RawClass, RawClassResponse } from "./classApi";

export const PELOTON_API_BASE = "https://schedule.studio.onepeloton.com/api/v2";

export const PELOTON_CORS_PROXY = "https://cors.abbondanzo.workers.dev";

export const getPelotonHeaders = (
  studioId: string
): Record<string, string> => ({
  "Teamup-Request-Mode": "customer",
  "Teamup-Provider-ID": studioId,
});

export const buildEventsUrl = (params: {
  localStartsAtGte?: Date;
  localStartsAtLte?: Date;
  fields?: string[];
  expand?: string[];
  corsProxy?: boolean;
}): string => {
  const {
    localStartsAtGte = new Date(),
    localStartsAtLte,
    fields,
    expand,
    corsProxy = false,
  } = params;

  const base = corsProxy
    ? `${PELOTON_CORS_PROXY}/${PELOTON_API_BASE}`
    : PELOTON_API_BASE;

  const query = new URLSearchParams({
    local_starts_at_gte: localStartsAtGte.toISOString().replace("Z", ""),
    page_size: "500",
    sort: "start",
  });

  if (fields && fields.length > 0) query.set("fields", fields.join(","));
  if (expand && expand.length > 0) query.set("expand", expand.join(","));
  if (localStartsAtLte) {
    query.set(
      "local_starts_at_lte",
      localStartsAtLte.toISOString().replace("Z", "")
    );
  }

  return `${base}/events?${query}`;
};

export const rebasePelotonUrl = (next: string, corsProxy = false): string => {
  const { search } = new URL(next);
  const base = corsProxy
    ? `${PELOTON_CORS_PROXY}/${PELOTON_API_BASE}`
    : PELOTON_API_BASE;
  return `${base}/events${search}`;
};

/**
 * Follows all pagination pages using a caller-supplied fetchPage function.
 * The caller controls how each request is made (e.g. Sentry spans, error handling).
 */
export const fetchAllPelotonPages = async (
  firstUrl: string,
  fetchPage: (url: string) => Promise<RawClassResponse>,
  corsProxy = false
): Promise<RawClass[]> => {
  const first = await fetchPage(firstUrl);
  if (!first.next) return first.results;
  const all = [...first.results];
  let next: string | null = rebasePelotonUrl(first.next, corsProxy);
  while (next) {
    const page = await fetchPage(next);
    all.push(...page.results);
    next = page.next ? rebasePelotonUrl(page.next, corsProxy) : null;
  }
  return all;
};
