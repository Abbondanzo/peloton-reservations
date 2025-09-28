import {
  debugErrorMap,
  getAuth,
  initializeAuth,
  prodErrorMap,
} from "firebase/auth";
import { safeInit } from "../operators/safeInit";
import { app } from "./app";

const errorMap = import.meta.env.DEV ? debugErrorMap : prodErrorMap;

export const auth = safeInit(() => {
  if (!app) {
    throw new Error("Firebase app not initialized");
  }

  try {
    return getAuth(app);
  } catch {
    return initializeAuth(app, {
      errorMap,
    });
  }
});
