import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import classListReducer from "../../class-list/slices/classListSlice";
import filtersReducer from "../../filters/slices/filtersSlice";

export const store = configureStore({
  reducer: {
    classList: classListReducer,
    filters: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
