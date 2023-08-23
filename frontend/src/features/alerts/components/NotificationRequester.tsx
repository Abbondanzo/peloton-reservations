import { captureException } from "@sentry/react";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Card } from "../../theme/components/Card";
import { Button } from "./atoms/Button";

const CardWithBottomMargin = styled(Card)`
  margin-bottom: 1em;
`;

const ButtonWithTopMargin = styled(Button)`
  margin-top: 1em;
`;

export const NotificationRequester = () => {
  const [permission, setPermission] = useState<
    NotificationPermission | undefined
  >(window.Notification ? window.Notification.permission : undefined);

  const requestPermission = useCallback(() => {
    if (
      window.Notification &&
      typeof window.Notification.requestPermission === "function"
    ) {
      window.Notification.requestPermission()
        .then((permission) => {
          setPermission(permission);
        })
        .catch((error) => {
          console.error(error);
          captureException(error);
        });
    }
  }, []);

  if (permission === undefined) {
    return (
      <CardWithBottomMargin>
        <h2>Unsupported Browser</h2>
        <p>
          This browser does not support the notification API and we cannot
          notify you using it
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
