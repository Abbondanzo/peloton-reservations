import * as Sentry from "@sentry/node";
import * as fs from "fs/promises";
import * as path from "path";
import { RawClass, RawClassResponse } from "shared";
import { logger } from "./logger";

interface Diff {
  old: RawClass;
  new: RawClass;
}

interface ScrapeResult {
  added: RawClass[];
  changed: Diff[];
  removed: RawClass[];
}

export class Schedule {
  private readonly studioId: string;
  private data: RawClass[] | undefined;

  constructor(studioId: string) {
    this.studioId = studioId;
  }

  async initialize() {
    const cached = await this.readCache();
    if (cached) {
      logger.log(
        `Using cached schedule for ${this.studioId} with ${cached.length} classes`
      );
      this.data = cached;
      return;
    }
    const results = await this.fetchAllClasses();
    logger.log(
      `Fetched schedule for ${this.studioId} with ${results.length} classes`
    );
    this.data = results;
    await this.writeCache(results);
  }

  async diff(): Promise<ScrapeResult> {
    if (!this.data) {
      throw new Error("Called diff before initializing schedule");
    }
    const results = await this.fetchAllClasses();
    const comparison = this.compareClasses(this.data, results);
    this.data = results;
    await this.writeCache(results);
    return comparison;
  }

  private get cachePath(): string {
    const dataDir = process.env.DATA_DIR ?? path.join(process.cwd(), "data");
    return path.join(dataDir, `${this.studioId}.json`);
  }

  private async readCache(): Promise<RawClass[] | null> {
    try {
      const raw = await fs.readFile(this.cachePath, "utf-8");
      return JSON.parse(raw) as RawClass[];
    } catch {
      return null;
    }
  }

  private async writeCache(data: RawClass[]): Promise<void> {
    try {
      await fs.mkdir(path.dirname(this.cachePath), { recursive: true });
      await fs.writeFile(this.cachePath, JSON.stringify(data), "utf-8");
    } catch {
      // Non-fatal: if we can't write, we just lose persistence for this cycle
    }
  }

  private async fetchAllClasses(): Promise<RawClass[]> {
    const queryParams = new URLSearchParams({
      expand: "instructors,offering_type,offering_type.category",
      local_starts_at_gte: new Date().toISOString().replace("Z", ""),
      page_size: "500",
      sort: "start",
    });
    const baseUrl = `https://schedule.studio.onepeloton.com/api/v2/events?${queryParams}`;

    const firstPage = await this.fetchPage(baseUrl);
    if (!firstPage.next) {
      return firstPage.results;
    }
    // Only paginate when the schedule grows beyond a single page
    const allClasses = [...firstPage.results];
    let nextUrl: string | null = this.rebaseNextUrl(firstPage.next);
    while (nextUrl) {
      const page = await this.fetchPage(nextUrl);
      allClasses.push(...page.results);
      nextUrl = page.next ? this.rebaseNextUrl(page.next) : null;
    }
    return allClasses;
  }

  private rebaseNextUrl(next: string): string {
    const { search } = new URL(next);
    return `https://schedule.studio.onepeloton.com/api/v2/events${search}`;
  }

  private async fetchPage(url: string): Promise<RawClassResponse> {
    const response = await Sentry.startSpan(
      {
        name: "peloton.schedule.fetch",
        op: "http.client",
        attributes: { "studio.id": this.studioId },
      },
      () =>
        fetch(url, {
          headers: {
            "Teamup-Request-Mode": "customer",
            "Teamup-Provider-ID": this.studioId,
          },
        })
    );
    if (!response.ok) {
      throw new Error(
        `Peloton API returned ${response.status} for studio ${this.studioId}`
      );
    }
    return response.json();
  }

  private compareClasses(
    oldClasses: RawClass[],
    newClasses: RawClass[]
  ): ScrapeResult {
    const added: RawClass[] = [];
    const changed: Diff[] = [];

    const oldCopy = [...oldClasses];
    for (const newClass of newClasses) {
      if (oldCopy.length === 0) {
        added.push(newClass);
        continue;
      }
      const index = oldCopy.findIndex(
        (oldClass) => oldClass.id === newClass.id
      );
      if (index === -1) {
        added.push(newClass);
        continue;
      }
      const [oldClass] = oldCopy.splice(index, 1);
      if (this.compareClass(oldClass, newClass)) {
        changed.push({ old: oldClass, new: newClass });
      }
    }

    return {
      added,
      changed,
      removed: oldCopy,
    };
  }

  private compareClass(oldClass: RawClass, newClass: RawClass) {
    return (
      oldClass.occupancy !== newClass.occupancy ||
      oldClass.max_occupancy !== newClass.max_occupancy ||
      oldClass.waiting_count !== newClass.waiting_count
    );
  }
}
