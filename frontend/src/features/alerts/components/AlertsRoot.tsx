import { useNavigate } from "react-router-dom";
import { Alert } from "shared";
import styled from "styled-components";
import { Paths } from "../../navigation/constants/paths";
import { Card } from "../../theme/components/Card";
import { AlertPreferencesProvider } from "../providers/AlertPreferencesProvider";
import { AlertsProvider } from "../providers/AlertsProvider";
import { SharedRoot } from "./SharedRoot";
import { AlertPreferencesEditor } from "./editor/AlertPreferencesEditor";
import { AsyncAlertsList } from "./list/AsyncAlertsList";

const GapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;

interface Props {
  userId: string;
}

const AlertsBody = ({ userId }: Props) => {
  const navigate = useNavigate();

  return (
    <AlertsProvider userId={userId}>
      <AlertPreferencesProvider userId={userId}>
        <GapWrapper>
          <AsyncAlertsList
            onAdd={() => {
              navigate(Paths.ALERTS_EDITOR, { state: {} });
            }}
            onEdit={(alert) => {
              navigate(Paths.ALERTS_EDITOR, { state: alert });
            }}
            onDuplicate={(alert: Alert) => {
              navigate(Paths.ALERTS_EDITOR, {
                state: { ...alert, id: undefined, created: undefined },
              });
            }}
          />
          <Card>
            <h1>Preferences</h1>
            <AlertPreferencesEditor />
          </Card>
        </GapWrapper>
      </AlertPreferencesProvider>
    </AlertsProvider>
  );
};

export const AlertsRoot = () => {
  return <SharedRoot>{(userId) => <AlertsBody userId={userId} />}</SharedRoot>;
};
