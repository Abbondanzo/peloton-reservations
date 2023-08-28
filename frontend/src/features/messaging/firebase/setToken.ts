import { ref, set } from "@firebase/database";
import { database } from "../../firebase/constants/database";

export const setToken = async (
  userId: string,
  token: string
): Promise<void> => {
  const db = database;
  if (!db) {
    throw new Error("No Firebase database connection to use");
  }
  const tokenRef = ref(db, `messagingTokens/${userId}/${token}`);
  await set(tokenRef, {
    timestamp: new Date().getTime(),
  });
};
