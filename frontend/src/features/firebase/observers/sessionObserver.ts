import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/constants/auth";
import { removeSession, setSession } from "../../session/slices/sessionSlice";
import { store } from "../../store/constants/store";
import { userToSession } from "../operators/userToSession";

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(setSession(userToSession(user)));
  } else {
    store.dispatch(removeSession());
  }
});
