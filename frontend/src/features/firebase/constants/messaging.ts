import { getMessaging } from "firebase/messaging";
import { safeInit } from "../operators/safeInit";
import { app } from "./app";

export const messaging = safeInit(() => getMessaging(app));
