import { onAuthStateChanged } from "firebase/auth";
import { get, ref } from "firebase/database";
import { type ReactNode, useEffect } from "react";
import { auth } from "../../firebase/constants/auth";
import { database } from "../../firebase/constants/database";
import { useAppDispatch } from "../../store/hooks/useStore";
import { userToSession } from "../operators/userToSession";
import { removeSession, setLoading, setSession } from "../slices/sessionSlice";

interface Props {
  children: ReactNode;
}

export const SessionProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading());
    if (!auth) {
      dispatch(removeSession());
      return () => {};
    }
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      dispatch(setLoading());
      if (user) {
        let isAdmin = false;
        try {
          const snapshot = database
            ? await get(ref(database, `admins/${user.uid}`))
            : null;
          isAdmin = snapshot?.val() === true;
        } catch {
          // Default to non-admin if the check fails; user can sign out and back in
        }
        dispatch(setSession(userToSession(user, isAdmin)));
      } else {
        dispatch(removeSession());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return <>{children}</>;
};
