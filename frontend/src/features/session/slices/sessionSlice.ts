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
    setLoading() {
      return { state: "loading" };
    },
    setSession(_, action: PayloadAction<Session>) {
      return {
        state: "fulfilled",
        data: action.payload,
      };
    },
    removeSession() {
      return {
        state: "fulfilled",
        data: null,
      };
    },
  },
});

export const { setLoading, setSession, removeSession } = sessionSlice.actions;

export default sessionSlice.reducer;
