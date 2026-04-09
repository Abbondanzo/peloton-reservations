import * as fs from "fs/promises";
import * as path from "path";
import { RawClass, RawClassResponse } from "shared";

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
      this.data = cached;
      return;
    }
    const response = await this.fetchClasses();
    if (!response.results) {
      throw new Error(
        `Failed to initialize schedule for studio ${this.studioId}: no results in response`
      );
    }
    this.data = response.results;
    await this.writeCache(this.data);
  }

  async diff(): Promise<ScrapeResult> {
    if (!this.data) {
      throw new Error("Called diff before initializing schedule");
    }
    const response = await this.fetchClasses();
    const comparison = this.compareClasses(this.data, response.results);
    this.data = response.results;
    await this.writeCache(this.data);
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

  private async fetchClasses(): Promise<RawClassResponse> {
    const queryParams = new URLSearchParams({
      expand: "instructors,offering_type,offering_type.category",
      local_starts_at_gte: new Date().toISOString().replace("Z", ""),
      page_size: "100",
      sort: "start",
    });
    const response = await fetch(
      `https://schedule.studio.onepeloton.com/api/v2/events?${queryParams}`,
      {
        headers: {
          "Teamup-Request-Mode": "customer",
          "Teamup-Provider-ID": this.studioId,
        },
      }
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
