import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store/constants/store';
import { getClassesByStudioId } from '../slices/classListApiSlice';
import { selectStudioId } from './selectStudioId';

export const selectAsyncActiveClassList = createSelector(
  [selectStudioId, (state: RootState) => state],
  (studioId, state) => {
    return getClassesByStudioId.select(studioId)(state);
  }
);
