import { onValue, ref } from "firebase/database";
import { ReactNode, useEffect, useState } from "react";
import { AlertPreferences } from "shared";
import { database } from "../../firebase/constants/database";
import { AsyncData } from "../../store/types/AsyncData";
import { AlertPreferencesContext } from "../context/AlertPreferencesContext";

interface Props {
  children: ReactNode;
  userId: string;
}

export const AlertPreferencesProvider = ({ children, userId }: Props) => {
  const [alertsState, setAlertsState] = useState<
    AsyncData<Partial<AlertPreferences>>
  >({
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
    const dbRef = ref(db, `alertPreferences/${userId}`);
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const values: Partial<AlertPreferences> | null = snapshot.val();
        setAlertsState({ state: "fulfilled", data: values || {} });
      },
      (error) => {
        setAlertsState({ state: "failed", error });
      }
    );
    return () => unsubscribe();
  }, [userId]);

  return (
    <AlertPreferencesContext.Provider value={alertsState}>
      {children}
    </AlertPreferencesContext.Provider>
  );
};
