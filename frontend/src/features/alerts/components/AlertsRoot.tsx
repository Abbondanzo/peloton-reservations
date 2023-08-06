import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Paths } from "../../navigation/constants/paths";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";
import { AlertsContext } from "../context/AlertsContext";
import { AlertsProvider } from "../providers/AlertsProvider";
import { AlertEditor } from "./AlertEditor";

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

const AsyncAlertsList = () => {
  const alertsState = useContext(AlertsContext);

  if (alertsState.state === "loading" || alertsState.state === "idle") {
    return <AlertsLoading />;
  }

  if (alertsState.state === "failed") {
    return <p>Failed to load: {alertsState.error.message}</p>;
  }

  return <code>{JSON.stringify(alertsState.data, null, 2)}</code>;
};

const AlertsBody = () => {
  const sessionState = useAppSelector(selectSession);

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
      <AsyncAlertsList />
      <AlertEditor />
    </AlertsProvider>
  );
};

export const AlertsRoot = () => {
  return (
    <NavbarProvider>
      <OverflowWrapper>
        <Content>
          <Card>
            <h1>Alerts</h1>
            <AlertsBody />
          </Card>
        </Content>
      </OverflowWrapper>
    </NavbarProvider>
  );
};
