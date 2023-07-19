import styled from "styled-components";
import { SignIn } from "../../firebase/components/SignIn";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Card } from "../../theme/components/Card";

const Wrapper = styled.div`
  max-width: 400px;
  padding: 1em;
  margin: 0 auto;
  text-align: center;
`;

const MicroCopy = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  margin-bottom: 2em;
`;

export const SignInRoot = () => {
  return (
    <NavbarProvider>
      <Wrapper>
        <Card>
          <h1>Sign In</h1>
          <MicroCopy>
            Set your own alerts, persist your filters across devices, and get
            access to beta features.
          </MicroCopy>
          <SignIn />
        </Card>
      </Wrapper>
    </NavbarProvider>
  );
};
