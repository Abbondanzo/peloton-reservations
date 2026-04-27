import { onValue, ref } from "firebase/database";
import { type ReactNode, useEffect } from "react";
import type { AlertPreferences } from "shared";
import { PATHS } from "shared";
import { database } from "../../firebase/constants/database";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { store } from "../../store/constants/store";
import { AlertPreferencesContext } from "../context/AlertPreferencesContext";
import {
  setAlertPreferencesData,
  setAlertPreferencesFailed,
  setAlertPreferencesLoading,
} from "../slices/alertPreferencesSlice";

interface Props {
  children: ReactNode;
  userId: string;
}

export const AlertPreferencesProvider = ({ children, userId }: Props) => {
  const dispatch = useAppDispatch();
  const preferencesCache = useAppSelector((state) => state.alertPreferences);

  useEffect(() => {
    const db = database;
    if (!db) {
      dispatch(
        setAlertPreferencesFailed({
          userId,
          error: { message: "No database set up" },
        })
      );
      return () => {};
    }

    // Skip loading state if we already have data for this user
    const cached = store.getState().alertPreferences;
    if (cached.userId !== userId || cached.data.state !== "fulfilled") {
      dispatch(setAlertPreferencesLoading(userId));
    }

    const dbRef = ref(db, PATHS.alertPreferences(userId));
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const values: Partial<AlertPreferences> | null = snapshot.val();
        dispatch(setAlertPreferencesData({ userId, data: values || {} }));
      },
      (error) => {
        dispatch(
          setAlertPreferencesFailed({ userId, error: { message: error.message } })
        );
      }
    );
    return () => unsubscribe();
  }, [userId, dispatch]);

  const contextValue =
    preferencesCache.userId === userId
      ? preferencesCache.data
      : { state: "loading" as const };

  return (
    <AlertPreferencesContext.Provider value={contextValue}>
      {children}
    </AlertPreferencesContext.Provider>
  );
};
