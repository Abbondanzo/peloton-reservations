import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Paths } from "../../navigation/constants/paths";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    padding: 8px;
  }
`;

const OverflowWrapper = styled.div`
  overflow: auto;
  height: 100%;
`;

interface Props {
  children: (userId: string) => ReactNode;
}

const SessionCheckingBody = ({ children }: Props) => {
  const sessionState = useAppSelector(selectSession);

  if (sessionState.state === "loading") {
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  }

  if (sessionState.state !== "fulfilled" || !sessionState.data) {
    return (
      <Card>
        <p>
          You need to be logged in to create alerts. Sign in or create an
          account by <Link to={Paths.SIGN_IN}>clicking here</Link>.
        </p>
      </Card>
    );
  }

  return children(sessionState.data.id);
};

export const SharedRoot = (props: Props) => {
  return (
    <NavbarProvider>
      <OverflowWrapper>
        <Content>
          <SessionCheckingBody {...props} />
        </Content>
      </OverflowWrapper>
    </NavbarProvider>
  );
};
