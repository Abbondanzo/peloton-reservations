import { captureException } from "@sentry/react";
import { onMessage } from "firebase/messaging";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { getAppToken, messaging } from "../../firebase/constants/messaging";
import { selectUserId } from "../../session/selectors/selectUserId";
import { useAppSelector } from "../../store/hooks/useStore";
import { MessagingContext } from "../context/MessagingContext";
import { deleteToken as deleteTokenAPI } from "../firebase/deleteToken";
import { setToken as setTokenAPI } from "../firebase/setToken";

interface Props {
  children: ReactNode;
}

export const MessagingProvider = ({ children }: Props): JSX.Element => {
  const [token, setToken] = useState<string>();
  useEffect(() => {
    if (messaging) {
      const messageUnsubscribe = onMessage(messaging, (payload) => {
        console.log("[MessagingProvider] Received message ", payload);
        if (!payload.notification) return;
        const { title, ...options } = payload.notification;
        console.log(title, options);
      });
      return () => {
        messageUnsubscribe();
      };
    }
    return () => {};
  }, []);
  const userId = useAppSelector(selectUserId);
  useEffect(() => {
    if (messaging && userId) {
      getAppToken()
        .then((token) => {
          setToken(token);
          return setTokenAPI(userId, token);
        })
        .catch((error) => {
          captureException(error);
        });
    }
  }, [userId]);
  const refreshToken = useCallback(() => {
    if (messaging && userId) {
      getAppToken()
        .then((token) => {
          setToken(token);
          return setTokenAPI(userId, token);
        })
        .catch((error) => {
          captureException(error);
        });
    }
  }, [userId]);
  const deleteToken = useCallback(async () => {
    if (token && userId) {
      await deleteTokenAPI(userId, token);
      setToken(undefined);
    }
  }, [token, userId]);
  return (
    <MessagingContext.Provider value={{ token, refreshToken, deleteToken }}>
      {children}
    </MessagingContext.Provider>
  );
};
