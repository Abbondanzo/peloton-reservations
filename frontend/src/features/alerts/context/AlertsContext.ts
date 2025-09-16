import { createContext } from "react";
import type { Alert } from "shared";
import type { AsyncData } from "../../store/types/AsyncData";

export const AlertsContext = createContext<AsyncData<Alert[]>>({
  state: "idle",
});
