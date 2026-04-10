import { useCallback, useContext, useState } from "react";
import type { AlertPreferences } from "shared";
import styled from "styled-components";
import { selectUserId } from "../../../session/selectors/selectUserId";
import { useAppSelector } from "../../../store/hooks/useStore";
import { mediaMobile } from "../../../theme/constants/queries";
import { border } from "../../../theme/constants/styles";
import { AlertPreferencesContext } from "../../context/AlertPreferencesContext";
import { setPreferences } from "../../firebase/setPreferences";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${mediaMobile`
    flex-direction: column;
    align-items: stretch;
  `}
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.main};
`;

const Input = styled.input`
  ${border}
  padding: 8px 12px;
  font-family: inherit;
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
  width: 80px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent};
  }

  ${mediaMobile`
    width: 100%;
  `}
`;

const Hint = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const SaveButton = styled.button<{ $saved?: boolean }>`
  padding: 8px 20px;
  border: 1px solid
    ${(props) =>
      props.$saved ? "#2e7d32" : props.theme.colors.accent};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) =>
    props.$saved ? "#e8f5e9" : props.theme.colors.accent};
  color: ${(props) => (props.$saved ? "#2e7d32" : "#fff")};
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    filter: brightness(92%);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${mediaMobile`
    padding: 10px 20px;
  `}
`;

const StatusText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`;

const ErrorText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`;

interface EditorProps {
  alertPreferences: Partial<AlertPreferences>;
}

const Editor = ({ alertPreferences }: EditorProps) => {
  const userId = useAppSelector(selectUserId);
  const [notificationDelayMin, setNotificationDelayMin] = useState(
    alertPreferences.notificationDelayMin || 5
  );
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!userId) return;

      setSaving(true);
      setSaved(false);
      try {
        await setPreferences(userId, {
          lastUpdated: new Date().getTime(),
          notificationDelayMin,
        });
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      } catch {
        // Error silently handled
      } finally {
        setSaving(false);
      }
    },
    [userId, notificationDelayMin]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FieldGroup>
        <Label htmlFor="delay-input">Cooldown (minutes)</Label>
        <Hint>Minimum delay between consecutive alert notifications</Hint>
      </FieldGroup>
      <InputRow>
        <Input
          id="delay-input"
          type="number"
          min={0}
          value={notificationDelayMin}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (!Number.isNaN(val)) setNotificationDelayMin(val);
          }}
        />
        <SaveButton type="submit" disabled={saving} $saved={saved}>
          {saving ? "Saving…" : saved ? "Saved ✓" : "Save"}
        </SaveButton>
      </InputRow>
    </Form>
  );
};

export const AlertPreferencesEditor = () => {
  const asyncAlertPreferences = useContext(AlertPreferencesContext);

  if (
    asyncAlertPreferences.state === "idle" ||
    asyncAlertPreferences.state === "loading"
  ) {
    return <StatusText>Loading preferences…</StatusText>;
  }

  if (asyncAlertPreferences.state === "failed") {
    return <ErrorText>Failed to load preferences.</ErrorText>;
  }

  return (
    <Editor
      alertPreferences={asyncAlertPreferences.data}
      key={asyncAlertPreferences.data.lastUpdated}
    />
  );
};
