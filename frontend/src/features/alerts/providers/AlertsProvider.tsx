import { onValue, ref } from "firebase/database";
import { type ReactNode, useEffect, useState } from "react";
import type { Alert } from "shared";
import { database } from "../../firebase/constants/database";
import type { AsyncData } from "../../store/types/AsyncData";
import { DAY_NAMES } from "../constants/days";
import { AlertsContext } from "../context/AlertsContext";

interface Props {
  children: ReactNode;
  userId: string;
}

export const AlertsProvider = ({ children, userId }: Props) => {
  const [alertsState, setAlertsState] = useState<AsyncData<Alert[]>>({
    state: "idle",
  });
  useEffect(() => {
    setAlertsState({ state: "loading" });
    const db = database;
    if (!db) {
      setAlertsState({
        state: "failed",
        error: new Error("No database set up"),
      });
      return () => {};
    }
    const dbRef = ref(db, `alerts/${userId}`);
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const values: { [key: string]: Omit<Alert, "id"> } | null =
          snapshot.val();
        if (!values) {
          setAlertsState({ state: "fulfilled", data: [] });
          return;
        }
        const alerts: Alert[] = Object.entries(values).map(([key, value]) => ({
          ...value,
          timeRanges: new Array(DAY_NAMES.length)
            .fill(null)
            .map((_, index) => value.timeRanges[index] || null),
          id: key,
        }));
        setAlertsState({ state: "fulfilled", data: alerts });
      },
      (error) => {
        setAlertsState({ state: "failed", error });
      }
    );
    return () => unsubscribe();
  }, [userId]);

  return (
    <AlertsContext.Provider value={alertsState}>
      {children}
    </AlertsContext.Provider>
  );
};
