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

  const isIOSDevice = isIOS();
  const isStandalone =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!(navigator as any).standalone ||
    window.matchMedia("(display-mode: standalone)").matches;

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

  // iOS requires the app to be installed as a PWA before push notifications
  // are supported. requestPermission() throws when called outside standalone mode.
  if (isIOSDevice && !isStandalone) {
    return (
      <CardWithBottomMargin>
        <WarningTitle>Installation Required</WarningTitle>
        <p>
          To receive notifications on iOS, you must first add this app to your
          home screen. Tap the share button in Safari and select &ldquo;Add to
          Home Screen&rdquo;, then open the app from there.
        </p>
      </CardWithBottomMargin>
    );
  }

  if (permission === undefined || !("serviceWorker" in navigator)) {
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
