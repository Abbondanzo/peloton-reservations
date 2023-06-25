import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import classListReducer from "../slices/classListSlice";

export const store = configureStore({
  reducer: {
    classList: classListReducer,
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
