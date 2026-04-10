import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Paths } from "../../navigation/constants/paths";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { mediaMobile } from "../../theme/constants/queries";

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${mediaMobile`
    padding: 8px;
  `}
`;

const OverflowWrapper = styled.div`
  overflow: auto;
  height: 100%;
`;

const GateCard = styled.div`
  background-color: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 48px 32px;
  text-align: center;
  max-width: 440px;
  margin: 40px auto 0;

  ${mediaMobile`
    padding: 32px 20px;
    margin-top: 16px;
  `}
`;

const GateIcon = styled.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`;

const GateTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.main};
  margin: 0 0 10px;
`;

const GateDescription = styled.p`
  font-size: 15px;
  color: ${(p) => p.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`;

const SignInButton = styled(Link)`
  display: inline-block;
  padding: 10px 28px;
  background-color: ${(p) => p.theme.colors.accent};
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border-radius: ${(p) => p.theme.borderRadius};
  text-decoration: none;
  transition: filter 0.15s;

  &:hover {
    filter: brightness(94%);
  }
`;

const LoadingText = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`;

interface Props {
  children: (userId: string) => ReactNode;
}

const SessionCheckingBody = ({ children }: Props) => {
  const sessionState = useAppSelector(selectSession);

  if (sessionState.state === "loading") {
    return <LoadingText>Loading…</LoadingText>;
  }

  if (sessionState.state !== "fulfilled" || !sessionState.data) {
    return (
      <GateCard>
        <GateIcon>🔔</GateIcon>
        <GateTitle>Sign in to use Alerts</GateTitle>
        <GateDescription>
          Track class availability and get push notifications when a spot opens
          up for the classes you care about.
        </GateDescription>
        <SignInButton to={Paths.SIGN_IN}>Sign in</SignInButton>
      </GateCard>
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
