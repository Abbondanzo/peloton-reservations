import { ref, remove } from "firebase/database";
import { database } from "../../firebase/constants/database";

export const deleteAlert = async (
  userId: string,
  alertId: string
): Promise<void> => {
  const db = database;
  if (!db) {
    throw new Error("No Firebase database connection to use");
  }
  await remove(ref(db, `alerts/${userId}/${alertId}`));
};
