import { useLocation, useNavigate } from "react-router-dom";
import type { Alert } from "shared";
import { Paths } from "../../navigation/constants/paths";
import { AlertEditor } from "./editor/AlertEditor";

export const AlertsEditorRoot = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const alert = (location.state as Partial<Alert> | undefined) || {};
  return (
    <AlertEditor
      alertToEdit={alert}
      onSave={() => {
        navigate(Paths.ALERTS);
      }}
      onCancel={() => {
        navigate(Paths.ALERTS);
      }}
    />
  );
};
