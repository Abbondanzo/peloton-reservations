import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Paths } from "../../navigation/constants/paths";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";
import { AlertsContext } from "../context/AlertsContext";
import { AlertPreferencesProvider } from "../providers/AlertPreferencesProvider";
import { AlertsProvider } from "../providers/AlertsProvider";
import { Alert } from "../types/Alert";
import { AlertEditor } from "./AlertEditor";
import { AlertsList } from "./AlertsList";
import { Button } from "./atoms/Button";

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1em 0;
`;

const OverflowWrapper = styled.div`
  overflow: auto;
  height: 100%;
`;

const AlertsLoading = () => {
  return <p>Loading...</p>;
};

interface AsyncAlertsListProps {
  onAdd: () => void;
  onEdit: (alert: Alert) => void;
  onDuplicate: (alert: Alert) => void;
}

const AsyncAlertsList = ({
  onAdd,
  onEdit,
  onDuplicate,
}: AsyncAlertsListProps) => {
  const alertsState = useContext(AlertsContext);

  if (alertsState.state === "loading" || alertsState.state === "idle") {
    return <AlertsLoading />;
  }

  if (alertsState.state === "failed") {
    return <p>Failed to load: {alertsState.error.message}</p>;
  }

  return (
    <Card>
      <h1>Alerts</h1>
      <AlertsList
        alerts={alertsState.data}
        onEdit={onEdit}
        onDuplicate={onDuplicate}
      />
      <Button onClick={onAdd} style={{ marginTop: "1em" }}>
        Add Alert
      </Button>
    </Card>
  );
};

const AlertsBody = () => {
  const sessionState = useAppSelector(selectSession);
  const [alertToEdit, setAlertToEdit] = useState<Partial<Alert>>();

  if (sessionState.state === "loading") {
    return <AlertsLoading />;
  }

  if (sessionState.state !== "fulfilled" || !sessionState.data) {
    return (
      <p>
        You need to be logged in to create alerts. Sign in or create an account
        by <Link to={Paths.SIGN_IN}>clicking here</Link>.
      </p>
    );
  }

  return (
    <AlertsProvider userId={sessionState.data.id}>
      <AlertPreferencesProvider userId={sessionState.data.id}>
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
