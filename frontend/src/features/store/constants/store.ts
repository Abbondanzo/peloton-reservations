import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import classListReducer from "../../class-list/slices/classListSlice";
import filtersReducer from "../../filters/slices/filtersSlice";
import sessionReducer from "./../../session/slices/sessionSlice";

export const store = configureStore({
  reducer: {
    classList: classListReducer,
    filters: filtersReducer,
    session: sessionReducer,
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
