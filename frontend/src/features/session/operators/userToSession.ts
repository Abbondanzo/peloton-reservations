import type { User } from "firebase/auth";
import type { Session } from "../types/Session";

export const userToSession = (user: User): Session => {
  return {
    id: user.uid,
    displayName: user.displayName || user.email || "",
  };
};
