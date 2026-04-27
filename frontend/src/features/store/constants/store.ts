import {
  type Action,
  type ThunkAction,
  configureStore,
} from "@reduxjs/toolkit";
import alertsReducer from "../../alerts/slices/alertsSlice";
import alertPreferencesReducer from "../../alerts/slices/alertPreferencesSlice";
import { pelotonApi } from "../../class-list/services/pelotonApi";
import { studioSlice } from "../../class-list/slices/studioSlice";
import filtersReducer from "../../filters/slices/filtersSlice";
import registeredDevicesReducer from "../../messaging/slices/registeredDevicesSlice";
import sessionReducer from "../../session/slices/sessionSlice";

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
    alertPreferences: alertPreferencesReducer,
    filters: filtersReducer,
    registeredDevices: registeredDevicesReducer,
    session: sessionReducer,
    [pelotonApi.reducerPath]: pelotonApi.reducer,
    [studioSlice.name]: studioSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pelotonApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
