import { User } from "firebase/auth";
import { Session } from "../../session/types/Session";

export const userToSession = (user: User): Session => {
  return {
    id: user.uid,
  };
};
