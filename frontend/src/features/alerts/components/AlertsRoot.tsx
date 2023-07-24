import styled from "styled-components";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { selectHasSession } from "../../session/selectors/selectHasSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";
import { Link } from "react-router-dom";
import { Paths } from "../../navigation/constants/paths";
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

const AlertsBody = () => {
  const hasSession = useAppSelector(selectHasSession);
  if (!hasSession) {
    return (
      <p>
        You need to be logged in to create alerts. Sign in or create an account
        by <Link to={Paths.SIGN_IN}>clicking here</Link>.
      </p>
    );
  }

  return <AlertEditor />;
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
