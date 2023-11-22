import { createContext } from "react";
import { AsyncData } from "../../store/types/AsyncData";
import { RegisteredDevice } from "../types/RegisteredDevice";

export const RegisteredDevicesContext = createContext<
  AsyncData<{ [key: string]: RegisteredDevice }>
>({
  state: "idle",
});
