import { onAuthStateChanged } from "firebase/auth";
import { type ReactNode, useEffect } from "react";
import { auth } from "../../firebase/constants/auth";
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setSession(userToSession(user)));
      } else {
        dispatch(removeSession());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return <>{children}</>;
};
