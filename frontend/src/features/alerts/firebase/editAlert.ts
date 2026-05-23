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
  // Firebase uses null to delete a key; coerce absent optional fields to null
  // so stale values are removed rather than left unchanged.
  const data: Record<string, unknown> = {
    ...alert,
    name: alert.name ?? null,
    watchedClassIds: alert.watchedClassIds ?? null,
    disabled: alert.disabled ?? null,
  };
  await update(ref(db, PATHS.alert(userId, alert.id)), data);
};
