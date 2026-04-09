import { RawClass, STUDIOS } from "shared";
import { logger } from "./logger";
import { Schedule } from "./schedule";

export interface DiffDelegate {
  handleAddition(studioId: string, classes: RawClass[]): void;
  handleChange(
    studioId: string,
    classes: { new: RawClass; old: RawClass }[]
  ): void;
}

export class Manager {
  private static readonly SCHEDULE_INTERVAL_MS = 10_000;
  private static readonly LOG_NO_CHANGES = false;

  private readonly schedules: { [key: string]: Schedule } = {};

  private running = true;

  private readonly abortController: AbortController;
  private readonly delegate: DiffDelegate;

  constructor(delegate: DiffDelegate) {
    this.abortController = new AbortController();
    this.delegate = delegate;
  }

  async initialize() {
    const promises: Promise<void>[] = [];
    Object.keys(STUDIOS).forEach((studioId) => {
      const schedule = new Schedule(studioId);
      this.schedules[studioId] = schedule;
      promises.push(
        schedule.initialize().catch((error) => {
          logger.error(
            `Skipping studio ${STUDIOS[studioId].location}: ${error.message}`
          );
          delete this.schedules[studioId];
        })
      );
    });
    await Promise.all(promises);
  }

  async loop() {
    while (this.running) {
      for (const [studioId, schedule] of Object.entries(this.schedules)) {
        try {
          const diff = await schedule.diff();
          if (diff.added.length || diff.changed.length || diff.removed.length) {
            logger.log(
              `Diff for ${studioId}: added ${diff.added.length} changed ${diff.changed.length} removed ${diff.removed.length}`
            );
          } else if (Manager.LOG_NO_CHANGES) {
            logger.log(`No changes for ${STUDIOS[studioId].location}`);
          }
          if (diff.added.length > 0) {
            this.delegate.handleAddition(studioId, diff.added);
          }
          if (diff.changed.length > 0) {
            this.delegate.handleChange(studioId, diff.changed);
          }
        } catch (error) {
          logger.error(error);
        }
      }
      await this.wait(Manager.SCHEDULE_INTERVAL_MS);
    }
  }

  cancel() {
    this.running = false;
    this.abortController.abort();
  }

  private wait(time: number) {
    return new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        resolve();
      }, time);
      this.abortController.signal.onabort = () => {
        clearTimeout(timeout);
        reject();
      };
    });
  }
}
