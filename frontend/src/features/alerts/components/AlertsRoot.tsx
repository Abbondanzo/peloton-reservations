import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Paths } from "../../navigation/constants/paths";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";
import { AlertPreferencesProvider } from "../providers/AlertPreferencesProvider";
import { AlertsProvider } from "../providers/AlertsProvider";
import { Alert } from "../types/Alert";
import { NotificationRequester } from "./NotificationRequester";
import { AlertEditor } from "./editor/AlertEditor";
import { AsyncAlertsList } from "./list/AsyncAlertsList";

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1em 0;
`;

const OverflowWrapper = styled.div`
  overflow: auto;
  height: 100%;
`;

const AlertsBody = () => {
  const sessionState = useAppSelector(selectSession);
  const [alertToEdit, setAlertToEdit] = useState<Partial<Alert>>();

  if (sessionState.state === "loading") {
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  }

  if (sessionState.state !== "fulfilled" || !sessionState.data) {
    return (
      <Card>
        <p>
          You need to be logged in to create alerts. Sign in or create an
          account by <Link to={Paths.SIGN_IN}>clicking here</Link>.
        </p>
      </Card>
    );
  }

  return (
    <AlertsProvider userId={sessionState.data.id}>
      <AlertPreferencesProvider userId={sessionState.data.id}>
        <NotificationRequester />
        {alertToEdit ? (
          <Card>
            <AlertEditor
              alertToEdit={alertToEdit}
              onSave={() => setAlertToEdit(undefined)}
              onCancel={() => setAlertToEdit(undefined)}
            />
          </Card>
        ) : (
          <AsyncAlertsList
            onAdd={() => setAlertToEdit({})}
            onEdit={(alert) => setAlertToEdit(alert)}
            onDuplicate={(alert: Alert) =>
              setAlertToEdit({ ...alert, id: undefined, created: undefined })
            }
          />
        )}
      </AlertPreferencesProvider>
    </AlertsProvider>
  );
};

export const AlertsRoot = () => {
  return (
    <NavbarProvider>
      <OverflowWrapper>
        <Content>
          <AlertsBody />
        </Content>
      </OverflowWrapper>
    </NavbarProvider>
  );
};
