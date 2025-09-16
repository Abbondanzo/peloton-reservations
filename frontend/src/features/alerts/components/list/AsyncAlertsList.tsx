import { useContext } from "react";
import type { Alert } from "shared";
import { Card } from "../../../theme/components/Card";
import { AlertsContext } from "../../context/AlertsContext";
import { Button } from "../atoms/Button";
import { AlertsList } from "./AlertsList";

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
    <Card>
      <h1>Alerts</h1>
      <AlertsList
        alerts={alertsState.data}
        onEdit={onEdit}
        onDuplicate={onDuplicate}
      />
      <Button type="button" onClick={onAdd} style={{ marginTop: "1em" }}>
        Add Alert
      </Button>
    </Card>
  );
};
