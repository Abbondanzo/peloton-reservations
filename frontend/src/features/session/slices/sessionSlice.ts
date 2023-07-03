import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Session } from "./../types/Session";

export interface SessionState {
  loading: boolean;
  session?: Session;
}

const initialState: SessionState = {
  loading: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<Session>) {
      state.session = action.payload;
    },
    removeSession(state) {
      state.session = undefined;
    },
  },
});

export const { setSession, removeSession } = sessionSlice.actions;

export default sessionSlice.reducer;
