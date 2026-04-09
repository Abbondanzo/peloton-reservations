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
    const response = await this.fetchClasses();
    if (!response.results) {
      throw new Error(
        `Failed to initialize schedule for studio ${this.studioId}: no results in response`
      );
    }
    this.data = response.results;
  }

  async diff(): Promise<ScrapeResult> {
    if (!this.data) {
      throw new Error("Called diff before initializing schedule");
    }
    const response = await this.fetchClasses();
    const comparison = this.compareClasses(this.data, response.results);
    this.data = response.results;
    return comparison;
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
