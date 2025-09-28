import { ref, remove } from "@firebase/database";
import { database } from "../../firebase/constants/database";

export const deleteToken = async (
  userId: string,
  token: string
): Promise<void> => {
  const db = database;
  if (!db) {
    throw new Error("No Firebase database connection to use");
  }
  const tokenRef = ref(db, `messagingTokens/${userId}/${token}`);
  await remove(tokenRef);
};
