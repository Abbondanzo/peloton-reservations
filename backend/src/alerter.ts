import { RawClass } from 'shared';
import { DiffDelegate } from './manager';

export class Alerter implements DiffDelegate {
  async initialize() {}

  handleAddition(studioId: string, classes: RawClass[]): void {
    throw new Error('Method not implemented.');
  }

  handleChange(
    studioId: string,
    classes: { new: RawClass; old: RawClass }[]
  ): void {
    throw new Error('Method not implemented.');
  }
}
