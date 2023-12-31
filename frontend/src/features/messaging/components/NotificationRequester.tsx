import { captureException } from "@sentry/react";
import { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../../alerts/components/atoms/Button";
import { Card } from "../../theme/components/Card";
import { MessagingContext } from "../context/MessagingContext";
import { isIOS } from "../operators/isIOS";

const CardWithBottomMargin = styled(Card)`
  margin-bottom: 1em;
`;

const ButtonWithTopMargin = styled(Button)`
  margin-top: 1em;
`;

const WarningTitle = styled.h2`
  color: ${(props) => props.theme.colors.accent};
`;

export const NotificationRequester = () => {
  const [permission, setPermission] = useState<
    NotificationPermission | undefined
  >(window.Notification ? window.Notification.permission : undefined);
  const { refreshToken } = useContext(MessagingContext);

  const requestPermission = useCallback(() => {
    if (
      window.Notification &&
      typeof window.Notification.requestPermission === "function"
    ) {
      window.Notification.requestPermission()
        .then((permission) => {
          setPermission(permission);
          if (permission === "granted") {
            refreshToken();
          }
        })
        .catch((error) => {
          console.error(error);
          captureException(error);
        });
    }
  }, [refreshToken]);

  if (permission === undefined || !("serviceWorker" in navigator)) {
    if (isIOS()) {
      return (
        <CardWithBottomMargin>
          <WarningTitle>Unsupported Browser</WarningTitle>
          <p>
            Notifications are not supported by iOS's Safari browser. In order to
            receive notifications, you must add this app to your home screen.
            Alerts for new classes will only display if you keep this tab open.
          </p>
        </CardWithBottomMargin>
      );
    }

    return (
      <CardWithBottomMargin>
        <WarningTitle>Unsupported Browser</WarningTitle>
        <p>
          This browser does not support sending you notifications in the
          background. Alerts for new classes will only display if you keep this
          tab open.
        </p>
      </CardWithBottomMargin>
    );
  }

  if (permission !== "granted") {
    return (
      <CardWithBottomMargin>
        <h2>Grant notification permissions</h2>
        <p>
          In order to get notified when any of your alerts trigger, you need to
          grant permission to send notifications
        </p>
        <ButtonWithTopMargin type="button" onClick={requestPermission}>
          Grant Permission
        </ButtonWithTopMargin>
      </CardWithBottomMargin>
    );
  }

  return null;
};
