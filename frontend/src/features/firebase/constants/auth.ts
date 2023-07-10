import { getAuth } from "firebase/auth";
import { safeInit } from "./../operators/safeInit";
import { app } from "./app";

export const auth = safeInit(() => getAuth(app));
