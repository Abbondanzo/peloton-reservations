import { createContext } from "react";
import type { AsyncData } from "../../store/types/AsyncData";
import type { RegisteredDevice } from "../types/RegisteredDevice";

export const RegisteredDevicesContext = createContext<
  AsyncData<{ [key: string]: RegisteredDevice }>
>({
  state: "idle",
});
