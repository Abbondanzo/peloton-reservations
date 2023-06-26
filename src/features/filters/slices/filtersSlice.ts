import {
  setShouldShowWaitlist,
  shouldShowWaitlist,
} from "../operators/queryParameters";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src/createAction";

export interface FilterState {
  showWaitlist: boolean;
  showFull: boolean;
}

const initialState: FilterState = {
  showWaitlist: shouldShowWaitlist(true),
  showFull: false,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleWaitlist(state, action: PayloadAction<boolean>) {
      state.showWaitlist = action.payload;
      setShouldShowWaitlist(action.payload);
    },
    toggleFull(state, action: PayloadAction<boolean>) {
      state.showFull = action.payload;
    },
  },
});

export const { toggleWaitlist, toggleFull } = filtersSlice.actions;

export default filtersSlice.reducer;
