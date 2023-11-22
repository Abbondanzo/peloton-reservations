import { ref, set } from "@firebase/database";
import { database } from "../../firebase/constants/database";
import { RegisteredDevice } from "../types/RegisteredDevice";

export const setToken = async (
  userId: string,
  token: string
): Promise<void> => {
  const db = database;
  if (!db) {
    throw new Error("No Firebase database connection to use");
  }
  const tokenRef = ref(db, `messagingTokens/${userId}/${token}`);
  const registeredDevice: RegisteredDevice = {
    timestamp: new Date().getTime(),
    userAgent: navigator.userAgent,
  };
  await set(tokenRef, registeredDevice);
};
