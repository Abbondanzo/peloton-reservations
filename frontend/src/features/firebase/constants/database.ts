import { getDatabase } from "firebase/database";
import { safeInit } from "../operators/safeInit";
import { app } from "./app";

export const database = safeInit(() => getDatabase(app));
