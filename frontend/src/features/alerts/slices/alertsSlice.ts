import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Alert } from "shared";
import type { AsyncData } from "../../store/types/AsyncData";

interface AlertsCacheState {
  userId: string | null;
  data: AsyncData<Alert[]>;
}

const initialState: AlertsCacheState = {
  userId: null,
  data: { state: "idle" },
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlertsLoading(
      _state: AlertsCacheState,
      action: PayloadAction<string>
    ): AlertsCacheState {
      return { userId: action.payload, data: { state: "loading" } };
    },
    setAlertsData(
      _state: AlertsCacheState,
      action: PayloadAction<{ userId: string; data: Alert[] }>
    ): AlertsCacheState {
      return {
        userId: action.payload.userId,
        data: { state: "fulfilled", data: action.payload.data },
      };
    },
    setAlertsFailed(
      _state: AlertsCacheState,
      action: PayloadAction<{ userId: string; error: { message: string } }>
    ): AlertsCacheState {
      return {
        userId: action.payload.userId,
        data: { state: "failed", error: action.payload.error },
      };
    },
  },
});

export const { setAlertsLoading, setAlertsData, setAlertsFailed } =
  alertsSlice.actions;

export default alertsSlice.reducer;
