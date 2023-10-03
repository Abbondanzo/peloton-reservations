import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError => {
  return typeof error === 'object' && error != null && 'status' in error;
};

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
const isErrorWithMessage = (error: unknown): error is { message: string } => {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  );
};

export const getFriendlyError = (
  error: FetchBaseQueryError | SerializedError
): string => {
  if (isFetchBaseQueryError(error)) {
    return 'error' in error ? error.error : JSON.stringify(error.data);
  } else if (isErrorWithMessage(error)) {
    return error.message;
  } else {
    return 'Error!';
  }
};
