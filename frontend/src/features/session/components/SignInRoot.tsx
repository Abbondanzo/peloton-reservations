import { Navigate } from "react-router";
import styled from "styled-components";
import { SignIn } from "../../firebase/components/SignIn";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Paths } from "../../navigation/constants/paths";
import { useAppSelector } from "../../store/hooks/useStore";
import { mediaMobile } from "../../theme/constants/queries";
import { selectHasSession } from "../selectors/selectHasSession";

const PageWrapper = styled.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${mediaMobile`
    padding: 16px 12px;
  `}
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 32px;

  ${mediaMobile`
    padding: 24px 20px;
  `}
`;

export const SignInRoot = () => {
  const hasSession = useAppSelector(selectHasSession);
  if (hasSession) {
    return <Navigate to={Paths.CLASS_LIST} />;
  }
  return (
    <NavbarProvider>
      <PageWrapper>
        <Card>
          <SignIn />
        </Card>
      </PageWrapper>
    </NavbarProvider>
  );
};
