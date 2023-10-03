import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import alertsReducer from '../../alerts/slices/alertsSlice';
import classListApiSlice from '../../class-list/slices/classListApiSlice';
import classListReducer from '../../class-list/slices/classListSlice';
import filtersReducer from '../../filters/slices/filtersSlice';
import sessionReducer from './../../session/slices/sessionSlice';

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
    classList: classListReducer,
    [classListApiSlice.reducerPath]: classListApiSlice.reducer,
    filters: filtersReducer,
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(classListApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
