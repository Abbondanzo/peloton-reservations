import { createContext } from "react";

interface Context {
  refreshToken: () => void;
  deleteToken: () => Promise<void>;
}

export const MessagingContext = createContext<Context>({
  refreshToken: () => {},
  deleteToken: () => Promise.reject<void>("Not implemented"),
});
