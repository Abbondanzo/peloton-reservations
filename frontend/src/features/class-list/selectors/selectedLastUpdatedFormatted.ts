import { createSelector } from '@reduxjs/toolkit';
import { selectAsyncActiveClassList } from './selectAsyncActiveClassList';

export const selectedLastUpdatedFormatted = createSelector(
  [selectAsyncActiveClassList],
  (asyncClassList) => {
    if (!asyncClassList.data || !asyncClassList.fulfilledTimeStamp) {
      return undefined;
    }
    const formatter = new Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: 'numeric',
    });
    return formatter.format(asyncClassList.fulfilledTimeStamp);
  }
);
