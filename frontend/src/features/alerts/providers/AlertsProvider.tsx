import { onValue, ref } from "firebase/database";
import { type ReactNode, useEffect } from "react";
import type { Alert } from "shared";
import { PATHS } from "shared";
import { database } from "../../firebase/constants/database";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { store } from "../../store/constants/store";
import { DAY_NAMES } from "../constants/days";
import { AlertsContext } from "../context/AlertsContext";
import {
  setAlertsData,
  setAlertsFailed,
  setAlertsLoading,
} from "../slices/alertsSlice";

interface Props {
  children: ReactNode;
  userId: string;
}

export const AlertsProvider = ({ children, userId }: Props) => {
  const dispatch = useAppDispatch();
  const alertsCache = useAppSelector((state) => state.alerts);

  useEffect(() => {
    const db = database;
    if (!db) {
      dispatch(
        setAlertsFailed({ userId, error: { message: "No database set up" } })
      );
      return () => {};
    }

    // Skip loading state if we already have data for this user
    const cached = store.getState().alerts;
    if (cached.userId !== userId || cached.data.state !== "fulfilled") {
      dispatch(setAlertsLoading(userId));
    }

    const dbRef = ref(db, PATHS.alerts(userId));
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const values: { [key: string]: Omit<Alert, "id"> } | null =
          snapshot.val();
        if (!values) {
          dispatch(setAlertsData({ userId, data: [] }));
          return;
        }
        const alerts: Alert[] = Object.entries(values).map(([key, value]) => ({
          ...value,
          timeRanges: new Array(DAY_NAMES.length)
            .fill(null)
            .map((_, index) => value.timeRanges[index] || null),
          id: key,
        }));
        dispatch(setAlertsData({ userId, data: alerts }));
      },
      (error) => {
        dispatch(
          setAlertsFailed({ userId, error: { message: error.message } })
        );
      }
    );
    return () => unsubscribe();
  }, [userId, dispatch]);

  const contextValue =
    alertsCache.userId === userId
      ? alertsCache.data
      : { state: "loading" as const };

  return (
    <AlertsContext.Provider value={contextValue}>
      {children}
    </AlertsContext.Provider>
  );
};
