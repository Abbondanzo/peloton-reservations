import { RawClassResponse, STUDIOS } from 'shared';

export class Schedule {
  private readonly classes: { [key: string]: RawClassResponse } = {};

  async initialize() {
    const promises = Object.keys(STUDIOS).map(async (studioId) => {
      const response = await this.fetchClass(studioId);
      return {
        studioId,
        response,
      };
    });
    const responses = await Promise.all(promises);
    responses.forEach((response) => {
      this.classes[response.studioId] = response.response;
    });
  }

  private async fetchClass(studioId: string): Promise<RawClassResponse> {
    const response = await fetch(
      `https://api.onepeloton.com/ecomm/studio/${studioId}/scheduled_classes`
    );
    return response.json();
  }
}
