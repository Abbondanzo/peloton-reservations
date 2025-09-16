import { createContext } from "react";
import type { AlertPreferences } from "shared";
import type { AsyncData } from "../../store/types/AsyncData";

export const AlertPreferencesContext = createContext<
  AsyncData<Partial<AlertPreferences>>
>({
  state: "idle",
});
