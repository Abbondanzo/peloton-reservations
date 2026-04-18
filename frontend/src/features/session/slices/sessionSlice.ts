import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AsyncData } from "../../store/types/AsyncData";
import type { Session } from "../types/Session";

const initialState = {
  state: "idle",
} as AsyncData<Session | null>;

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setLoading(_state: AsyncData<Session | null>) {
      return { state: "loading" as const };
    },
    setSession(
      _state: AsyncData<Session | null>,
      action: PayloadAction<Session>
    ) {
      return {
        state: "fulfilled" as const,
        data: action.payload,
      };
    },
    removeSession(_state: AsyncData<Session | null>) {
      return {
        state: "fulfilled" as const,
        data: null,
      };
    },
  },
});

export const { setLoading, setSession, removeSession } = sessionSlice.actions;

export default sessionSlice.reducer;
