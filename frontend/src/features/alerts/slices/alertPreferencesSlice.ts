import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AlertPreferences } from "shared";
import type { AsyncData } from "../../store/types/AsyncData";

interface AlertPreferencesCacheState {
  userId: string | null;
  data: AsyncData<Partial<AlertPreferences>>;
}

const initialState: AlertPreferencesCacheState = {
  userId: null,
  data: { state: "idle" },
};

const alertPreferencesSlice = createSlice({
  name: "alertPreferences",
  initialState,
  reducers: {
    setAlertPreferencesLoading(
      _state: AlertPreferencesCacheState,
      action: PayloadAction<string>
    ): AlertPreferencesCacheState {
      return { userId: action.payload, data: { state: "loading" } };
    },
    setAlertPreferencesData(
      _state: AlertPreferencesCacheState,
      action: PayloadAction<{ userId: string; data: Partial<AlertPreferences> }>
    ): AlertPreferencesCacheState {
      return {
        userId: action.payload.userId,
        data: { state: "fulfilled", data: action.payload.data },
      };
    },
    setAlertPreferencesFailed(
      _state: AlertPreferencesCacheState,
      action: PayloadAction<{ userId: string; error: { message: string } }>
    ): AlertPreferencesCacheState {
      return {
        userId: action.payload.userId,
        data: { state: "failed", error: action.payload.error },
      };
    },
  },
});

export const {
  setAlertPreferencesLoading,
  setAlertPreferencesData,
  setAlertPreferencesFailed,
} = alertPreferencesSlice.actions;

export default alertPreferencesSlice.reducer;
