import { onValue, ref } from "firebase/database";
import { type ReactNode, useEffect } from "react";
import { database } from "../../firebase/constants/database";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { store } from "../../store/constants/store";
import { RegisteredDevicesContext } from "../context/RegisteredDevicesContext";
import {
  setRegisteredDevicesData,
  setRegisteredDevicesFailed,
  setRegisteredDevicesLoading,
} from "../slices/registeredDevicesSlice";
import type { RegisteredDevice } from "../types/RegisteredDevice";

interface Props {
  children: ReactNode;
  userId: string;
}

export const RegisteredDevicesProvider = ({ children, userId }: Props) => {
  const dispatch = useAppDispatch();
  const devicesCache = useAppSelector((state) => state.registeredDevices);

  useEffect(() => {
    const db = database;
    if (!db) {
      dispatch(
        setRegisteredDevicesFailed({
          userId,
          error: { message: "No database set up" },
        })
      );
      return () => {};
    }

    // Skip loading state if we already have data for this user
    const cached = store.getState().registeredDevices;
    if (cached.userId !== userId || cached.data.state !== "fulfilled") {
      dispatch(setRegisteredDevicesLoading(userId));
    }

    const dbRef = ref(db, `messagingTokens/${userId}`);
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const values: { [key: string]: RegisteredDevice } | null =
          snapshot.val();
        dispatch(setRegisteredDevicesData({ userId, data: values || {} }));
      },
      (error) => {
        dispatch(
          setRegisteredDevicesFailed({ userId, error: { message: error.message } })
        );
      }
    );
    return () => unsubscribe();
  }, [userId, dispatch]);

  const contextValue =
    devicesCache.userId === userId
      ? devicesCache.data
      : { state: "loading" as const };

  return (
    <RegisteredDevicesContext.Provider value={contextValue}>
      {children}
    </RegisteredDevicesContext.Provider>
  );
};
