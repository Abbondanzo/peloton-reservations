import { configureStore } from "@reduxjs/toolkit";
import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import alertPreferencesReducer from "../features/alerts/slices/alertPreferencesSlice";
import alertsReducer from "../features/alerts/slices/alertsSlice";
import { pelotonApi } from "../features/class-list/services/pelotonApi";
import { studioSlice } from "../features/class-list/slices/studioSlice";
import filtersReducer from "../features/filters/slices/filtersSlice";
import registeredDevicesReducer from "../features/messaging/slices/registeredDevicesSlice";
import sessionReducer from "../features/session/slices/sessionSlice";
import { lightTheme } from "../features/theme/constants/theme";

/** A store with the app's real reducers, isolated per test. */
export const makeTestStore = () =>
  configureStore({
    reducer: {
      alerts: alertsReducer,
      alertPreferences: alertPreferencesReducer,
      filters: filtersReducer,
      registeredDevices: registeredDevicesReducer,
      session: sessionReducer,
      [pelotonApi.reducerPath]: pelotonApi.reducer,
      [studioSlice.name]: studioSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pelotonApi.middleware),
  });

export const renderWithStore = (
  ui: ReactElement,
  {
    store = makeTestStore(),
    ...options
  }: Omit<RenderOptions, "wrapper"> & {
    store?: ReturnType<typeof makeTestStore>;
  } = {}
) => {
  const Providers = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </Provider>
  );
  return { store, ...render(ui, { wrapper: Providers, ...options }) };
};
