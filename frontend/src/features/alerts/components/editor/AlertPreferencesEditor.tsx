import { useContext, useState } from "react";
import type { AlertPreferences } from "shared";
import { selectUserId } from "../../../session/selectors/selectUserId";
import { useAppSelector } from "../../../store/hooks/useStore";
import { TextInput } from "../../../theme/components/TextInput";
import { AlertPreferencesContext } from "../../context/AlertPreferencesContext";
import { setPreferences } from "../../firebase/setPreferences";
import { Button } from "../atoms/Button";

interface EditorProps {
  alertPreferences: Partial<AlertPreferences>;
}

const Editor = ({ alertPreferences }: EditorProps) => {
  const userId = useAppSelector(selectUserId);
  const [notificationDelayMin, setNotificationDelayMin] = useState(
    alertPreferences.notificationDelayMin || 5
  );
  const handleSubmit = () => {
    if (!userId) {
      return;
    }
    const newAlertPreferences: AlertPreferences = {
      lastUpdated: new Date().getTime(),
      notificationDelayMin,
    };
    setPreferences(userId, newAlertPreferences).catch(console.error);
  };
  return (
    <form>
      <TextInput
        label="Minute Delay"
        hint="The minimum delay that must elapse before sending you another alert"
        value={notificationDelayMin}
        onChange={(value) => {
          const numberValue = parseInt(value, 10);
          if (!Number.isNaN(numberValue)) {
            setNotificationDelayMin(numberValue);
          }
        }}
      />
      <Button type="button" onClick={handleSubmit} style={{ marginTop: "1em" }}>
        Save
      </Button>
    </form>
  );
};

export const AlertPreferencesEditor = () => {
  const asyncAlertPreferences = useContext(AlertPreferencesContext);

  if (
    asyncAlertPreferences.state === "idle" ||
    asyncAlertPreferences.state === "loading"
  ) {
    return <p>Loading...</p>;
  }

  if (asyncAlertPreferences.state === "failed") {
    return <p>Failed to load: {asyncAlertPreferences.error.message}</p>;
  }

  return (
    <Editor
      alertPreferences={asyncAlertPreferences.data}
      key={asyncAlertPreferences.data.lastUpdated}
    />
  );
};
