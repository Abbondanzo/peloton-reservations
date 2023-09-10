import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Alert } from "../types/Alert";

interface AlertState {
  alerts: Alert[];
}

const initialState: AlertState = {
  alerts: [],
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addAlert(state, action: PayloadAction<Alert>) {
      state.alerts.push(action.payload);
    },
    setAlerts(state, action: PayloadAction<Alert[]>) {
      state.alerts = action.payload;
    },
    removeAlerts(state) {
      state.alerts = [];
    },
  },
});

export const { addAlert, setAlerts, removeAlerts } = alertsSlice.actions;

export default alertsSlice.reducer;
