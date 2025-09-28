import { useLocation, useNavigate } from "react-router-dom";
import type { Alert } from "shared";
import { Paths } from "../../navigation/constants/paths";
import { Card } from "../../theme/components/Card";
import { SharedRoot } from "./SharedRoot";
import { AlertEditor } from "./editor/AlertEditor";

const AlertsEditorBody = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const alert = (location.state as Partial<Alert> | undefined) || {};
  return (
    <Card>
      <AlertEditor
        alertToEdit={alert}
        onSave={() => {
          navigate(Paths.ALERTS);
        }}
        onCancel={() => {
          navigate(Paths.ALERTS);
        }}
      />
    </Card>
  );
};

export const AlertsEditorRoot = () => {
  return <SharedRoot>{() => <AlertsEditorBody />}</SharedRoot>;
};
