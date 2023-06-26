import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src/createAction";
import { getBookableStatusSearchParams } from "../operators/bookableStatusSearchParams";
import { setBookableStatusSearchParams } from "./../operators/bookableStatusSearchParams";
import { BookableStatus } from "./../types/BookableStatus";

export interface FilterState {
  showBookableStatus: BookableStatus;
}

const initialState: FilterState = {
  showBookableStatus: getBookableStatusSearchParams("waitlist"),
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setBookableStatus(state, action: PayloadAction<BookableStatus>) {
      state.showBookableStatus = action.payload;
      setBookableStatusSearchParams(action.payload);
    },
  },
});

export const { setBookableStatus } = filtersSlice.actions;

export default filtersSlice.reducer;
