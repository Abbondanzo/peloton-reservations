import { User } from "firebase/auth";
import { Session } from "../types/Session";

export const userToSession = (user: User): Session => {
  return {
    id: user.uid,
    displayName: user.displayName || user.email || "",
  };
};
