import { createContext } from "react";
import { AlertPreferences } from "shared";
import { AsyncData } from "../../store/types/AsyncData";

export const AlertPreferencesContext = createContext<
  AsyncData<Partial<AlertPreferences>>
>({
  state: "idle",
});
