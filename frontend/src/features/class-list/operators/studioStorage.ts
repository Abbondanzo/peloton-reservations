import { captureException } from "@sentry/react";

const getStored = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    captureException(error);
    return null;
  }
};

const setStored = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    captureException(error);
  }
};

const STORAGE_KEY = "STUDIO_ID";

export const getStoredStudioId = (defaultValue: string): string => {
  const value = getStored(STORAGE_KEY);
  if (value === null) {
    return defaultValue;
  }
  return value;
};

export const setStoredStudioId = (studioId: string) => {
  setStored(STORAGE_KEY, studioId);
};
