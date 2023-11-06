import { RawClass, RawClassResponse } from 'shared';

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
  private data: RawClassResponse['data'];

  constructor(studioId: string) {
    this.studioId = studioId;
  }

  async initialize() {
    const response = await this.fetchClass();
    this.data = response.data;
  }

  async diff(): Promise<ScrapeResult> {
    if (!this.data) {
      throw new Error('Called diff before initializing schedule');
    }
    const response = await this.fetchClass();
    const comparison = this.compareClasses(
      this.data.classes,
      response.data.classes
    );
    this.data = response.data;
    return comparison;
  }

  private async fetchClass(): Promise<RawClassResponse> {
    const response = await fetch(
      `https://api.onepeloton.com/ecomm/studio/${this.studioId}/scheduled_classes`
    );
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
      added: added,
      changed: changed,
      removed: oldCopy,
    };
  }

  private compareClass(oldClass: RawClass, newClass: RawClass) {
    const keysToCheck: (keyof RawClass)[] = [
      'bookable',
      'cancelled',
      'free',
      'full',
      'waitlist_full',
    ];
    return keysToCheck.some((key) => {
      return oldClass[key] !== newClass[key];
    });
  }
}
