import { push, ref } from "firebase/database";
import { database } from "../../firebase/constants/database";
import { Alert } from "../types/Alert";

export const addAlert = async (
  userId: string,
  alert: Alert
): Promise<Alert> => {
  const db = database;
  if (!db) {
    throw new Error("No Firebase database connection to use");
  }
  const addedAlertId = (await push(ref(db, `alerts/${userId}`), alert)).key;
  if (!addedAlertId) {
    throw new Error("Missing ID from insertion operation");
  }
  return {
    ...alert,
    id: addedAlertId,
  };
};
