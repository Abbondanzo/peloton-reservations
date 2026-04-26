import { createContext } from "react";

interface ThemeModeContextValue {
  isDark: boolean;
  toggle: () => void;
}

export const ThemeModeContext = createContext<ThemeModeContextValue>({
  isDark: false,
  toggle: () => {},
});
