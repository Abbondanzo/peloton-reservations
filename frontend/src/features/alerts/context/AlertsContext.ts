import { createContext } from "react";
import { Alert } from "../types/Alert";
import { AsyncData } from "./../../store/types/AsyncData";

export const AlertsContext = createContext<AsyncData<Alert[]>>({
  state: "idle",
});
