import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AsyncData } from "../../store/types/AsyncData";
import { Alert } from "../types/Alert";

type AlertState = AsyncData<Alert[]>;

const initialState = {
  state: "idle",
} as AlertState;

export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addAlert(state, action: PayloadAction<Alert>) {
      if (state.state === "fulfilled") {
        state.data.push(action.payload);
      }
    },
  },
});

export default alertsSlice.reducer;
