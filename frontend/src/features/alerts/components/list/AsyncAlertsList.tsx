import { useContext } from "react";
import styled from "styled-components";
import { Card } from "../../../theme/components/Card";
import { AlertsContext } from "../../context/AlertsContext";
import { Alert } from "../../types/Alert";
import { Button } from "../atoms/Button";
import { AlertPreferencesEditor } from "./AlertPreferencesEditor";
import { AlertsList } from "./AlertsList";

const AlertsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;

interface Props {
  onAdd: () => void;
  onEdit: (alert: Alert) => void;
  onDuplicate: (alert: Alert) => void;
}

export const AsyncAlertsList = ({ onAdd, onEdit, onDuplicate }: Props) => {
  const alertsState = useContext(AlertsContext);

  if (alertsState.state === "loading" || alertsState.state === "idle") {
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  }

  if (alertsState.state === "failed") {
    return (
      <Card>
        <p>Failed to load: {alertsState.error.message}</p>
      </Card>
    );
  }

  return (
    <AlertsListWrapper>
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
      <Card>
        <h1>Preferences</h1>
        <AlertPreferencesEditor />
      </Card>
    </AlertsListWrapper>
  );
};
