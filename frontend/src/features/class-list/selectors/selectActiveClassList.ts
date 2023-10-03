import { createSelector } from '@reduxjs/toolkit';
import { selectAsyncActiveClassList } from './selectAsyncActiveClassList';

export const selectActiveClassList = createSelector(
  [selectAsyncActiveClassList],
  (asyncClassList) => {
    return asyncClassList.data;
  }
);
