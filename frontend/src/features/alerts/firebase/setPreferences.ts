import { ref, update } from "firebase/database";
import { AlertPreferences } from "shared";
import { database } from "../../firebase/constants/database";

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
