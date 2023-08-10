import { ref, update } from "firebase/database";
import { database } from "../../firebase/constants/database";
import { AlertPreferences } from "./../types/AlertPreferences";

export const setPreferences = async (
  userId: string,
  alertPreferences: Partial<AlertPreferences>
): Promise<void> => {
  const db = database;
  if (!db) {
    throw new Error("No Firebase database connection to use");
  }
  await update(ref(db, `alertPreferences/${userId}`), alertPreferences);
};
