import { STUDIOS } from 'shared';
import { Schedule } from './schedule';
import { logger } from './logger';

export class Manager {
  private readonly schedules: { [key: string]: Schedule } = {};

  private running = true;

  async initialize() {
    const promises: Promise<void>[] = [];
    Object.keys(STUDIOS).forEach((studioId) => {
      const schedule = new Schedule(studioId);
      promises.push(schedule.initialize());
      this.schedules[studioId] = schedule;
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
          }
        } catch (error) {
          logger.error(error);
        }
      }
      await this.wait(this.getRandomTimeout());
    }
  }

  private wait(time: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), time);
    });
  }

  /**
   * Generate a random millisecond timeout between 5 and 10 seconds, in milliseconds.
   */
  private getRandomTimeout() {
    return 5000 + Math.floor(5000 * Math.random());
  }
}
