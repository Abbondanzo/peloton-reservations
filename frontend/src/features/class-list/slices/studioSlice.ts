import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DEFAULT_STUDIO_ID } from "shared";
import { getStoredStudioId } from "../operators/studioStorage";

export interface StudioState {
  studioId: string;
}

const initialState: StudioState = {
  studioId: getStoredStudioId(DEFAULT_STUDIO_ID),
};

export const studioSlice = createSlice({
  name: "studioSelector",
  initialState,
  reducers: {
    setStudioId(state, action: PayloadAction<string>) {
      state.studioId = action.payload;
    },
  },
});

export const { setStudioId } = studioSlice.actions;
