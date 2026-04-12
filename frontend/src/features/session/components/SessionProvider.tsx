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
      if (user) {
        const snapshot =
          database ? await get(ref(database, `admins/${user.uid}`)) : null;
        const isAdmin = snapshot?.val() === true;
        dispatch(setSession(userToSession(user, isAdmin)));
      } else {
        dispatch(removeSession());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return <>{children}</>;
};
