import { captureException } from "@sentry/react";
import { onMessage } from "firebase/messaging";
import { ReactNode, useEffect } from "react";
import { getAppToken, messaging } from "../../firebase/constants/messaging";
import { selectUserId } from "../../session/selectors/selectUserId";
import { useAppSelector } from "../../store/hooks/useStore";
import { setToken } from "../firebase/setToken";

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
      getAppToken()
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
