import { useEffect } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MessagingProvider } from "./features/messaging/providers/MessagingProvider";
import { router } from "./features/navigation/constants/router";
import { SessionProvider } from "./features/session/components/SessionProvider";
import { store } from "./features/store/constants/store";
import { darkTheme, lightTheme } from "./features/theme/constants/theme";
import { ThemeModeContext } from "./features/theme/context/ThemeModeContext";
import { GlobalStyle } from "./features/theme/components/GlobalStyle";
import { useThemeMode } from "./features/theme/hooks/useThemeMode";

function App() {
  const { isDark, toggle } = useThemeMode();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const classUrl = params.get("classUrl");
    if (!classUrl) return;
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.hash
    );
    window.location.assign(
      new URL(classUrl, "https://schedule.studio.onepeloton.com").href
    );
  }, []);

  return (
    <ThemeModeContext.Provider value={{ isDark, toggle }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <SessionProvider>
            <MessagingProvider>
              <RouterProvider router={router} />
            </MessagingProvider>
          </SessionProvider>
        </Provider>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
