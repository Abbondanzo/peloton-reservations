import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/constants/auth";
import { store } from "../../store/constants/store";
import { removeSession, setSession } from "./sessionSlice";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    store.dispatch(setSession({ id: uid }));
  } else {
    store.dispatch(removeSession());
  }
});
