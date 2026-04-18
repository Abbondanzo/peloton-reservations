import { ref, update } from "firebase/database";
import type { Alert } from "shared";
import { PATHS } from "shared";
import { database } from "../../firebase/constants/database";

export const editAlert = async (
  userId: string,
  alert: Alert
): Promise<void> => {
  const db = database;
  if (!db) {
    throw new Error("No Firebase database connection to use");
  }
  await update(ref(db, PATHS.alert(userId, alert.id)), alert);
};
