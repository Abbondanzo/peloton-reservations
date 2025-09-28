import type { RawClassResponse } from "shared";
import { base } from "../../api/base";

export const getClasses = (classId: string): Promise<RawClassResponse> => {
  return base.proxyGet(
    `https://api.onepeloton.com/ecomm/studio/${classId}/scheduled_classes`
  );
};
