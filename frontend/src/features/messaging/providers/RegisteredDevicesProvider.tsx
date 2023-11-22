import { onValue, ref } from "firebase/database";
import { ReactNode, useEffect, useState } from "react";
import { database } from "../../firebase/constants/database";
import { AsyncData } from "../../store/types/AsyncData";
import { RegisteredDevicesContext } from "../context/RegisteredDevicesContext";
import { RegisteredDevice } from "../types/RegisteredDevice";

interface Props {
  children: ReactNode;
  userId: string;
}

export const RegisteredDevicesProvider = ({ children, userId }: Props) => {
  const [state, setState] = useState<
    AsyncData<{ [key: string]: RegisteredDevice }>
  >({
    state: "idle",
  });
  useEffect(() => {
    setState({ state: "loading" });
    const db = database;
    if (!db) {
      setState({
        state: "failed",
        error: new Error("No database set up"),
      });
      return () => {};
    }
    const dbRef = ref(db, `messagingTokens/${userId}`);
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const values: { [key: string]: RegisteredDevice } | null =
          snapshot.val();
        setState({ state: "fulfilled", data: values || {} });
      },
      (error) => {
        setState({ state: "failed", error });
      }
    );
    return () => unsubscribe();
  }, [userId]);

  return (
    <RegisteredDevicesContext.Provider value={state}>
      {children}
    </RegisteredDevicesContext.Provider>
  );
};
