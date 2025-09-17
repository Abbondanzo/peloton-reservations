import { Navigate } from "react-router";
import styled from "styled-components";
import { SignIn } from "../../firebase/components/SignIn";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Paths } from "../../navigation/constants/paths";
import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";
import { selectHasSession } from "../selectors/selectHasSession";

const Wrapper = styled.div`
  max-width: 400px;
  padding: 1em;
  margin: 0 auto;
  text-align: center;
`;

export const SignInRoot = () => {
  const hasSession = useAppSelector(selectHasSession);
  if (hasSession) {
    return <Navigate to={Paths.CLASS_LIST} />;
  }
  return (
    <NavbarProvider>
      <Wrapper>
        <Card>
          <SignIn />
        </Card>
      </Wrapper>
    </NavbarProvider>
  );
};
