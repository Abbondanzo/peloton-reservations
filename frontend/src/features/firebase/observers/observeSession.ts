import { onAuthStateChanged } from "firebase/auth";
import { removeSession, setSession } from "../../session/slices/sessionSlice";
import { store } from "../../store/constants/store";
import { auth } from "../constants/auth";
import { userToSession } from "../operators/userToSession";

export const observeSession = () => {
  if (!auth) {
    store.dispatch(removeSession());
    return;
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(setSession(userToSession(user)));
    } else {
      store.dispatch(removeSession());
    }
  });
};
