import { RawClassResponse } from "shared";
import { base } from "../../api/base";

interface Options {
  studioId: string;
}

export const getEvents = (classId: string): Promise<RawClassResponse> => {
  return base.proxyGet(
    `https://api.onepeloton.com/ecomm/studio/${classId}/scheduled_classes`
  );
};
