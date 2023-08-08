import { onValue, ref } from "firebase/database";
import { ReactNode, useEffect, useState } from "react";
import { database } from "../../firebase/constants/database";
import { AsyncData } from "../../store/types/AsyncData";
import { AlertsContext } from "../context/AlertsContext";
import { Alert } from "../types/Alert";

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
