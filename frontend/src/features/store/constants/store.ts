import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import alertsReducer from "../../alerts/slices/alertsSlice";
import { pelotonApi } from "../../class-list/services/pelotonApi";
import classListReducer from "../../class-list/slices/classListSlice";
import filtersReducer from "../../filters/slices/filtersSlice";
import sessionReducer from "../../session/slices/sessionSlice";

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
    classList: classListReducer,
    filters: filtersReducer,
    session: sessionReducer,
    [pelotonApi.reducerPath]: pelotonApi.reducer,
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
