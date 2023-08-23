import { captureException } from "@sentry/react";
import { getToken, onMessage } from "firebase/messaging";
import { ReactNode, useEffect } from "react";
import { messaging } from "../../firebase/constants/messaging";
import { setToken } from "../firebase/setToken";
import { useAppSelector } from "../../store/hooks/useStore";
import { selectUserId } from "../../session/selectors/selectUserId";

interface Props {
  children: ReactNode;
}

export const MessagingProvider = ({ children }: Props): JSX.Element => {
  useEffect(() => {
    if (messaging) {
      const messageUnsubscribe = onMessage(messaging, (payload) => {
        console.log("[MessagingProvider] Received message ", payload);
        if (!payload.notification) return;
        const { title, ...options } = payload.notification;
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification(title || "Alert", options);
        });
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
      getToken(messaging, {
        vapidKey:
          "BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",
      })
        .then((token) => {
          return setToken(userId, token);
        })
        .catch((error) => {
          captureException(error);
        });
    }
  }, [userId]);
  return children as any;
};
