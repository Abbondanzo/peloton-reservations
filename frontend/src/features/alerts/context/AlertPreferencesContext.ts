import { createContext } from "react";
import { AsyncData } from "./../../store/types/AsyncData";
import { AlertPreferences } from "./../types/AlertPreferences";

export const AlertPreferencesContext = createContext<
  AsyncData<Partial<AlertPreferences>>
>({
  state: "idle",
});
