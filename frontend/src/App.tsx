import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MessagingProvider } from "./features/alerts/providers/MessagingProvider";
import { router } from "./features/navigation/constants/router";
import { SessionProvider } from "./features/session/components/SessionProvider";
import { store } from "./features/store/constants/store";
import { theme } from "./features/theme/constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SessionProvider>
          <MessagingProvider>
            <RouterProvider router={router} />
          </MessagingProvider>
        </SessionProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
