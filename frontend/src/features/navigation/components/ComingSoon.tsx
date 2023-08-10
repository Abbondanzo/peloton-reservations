import styled from "styled-components";
import { Card } from "../../theme/components/Card";
import { NavbarProvider } from "./NavbarProvider";

const ComingSoonWrapper = styled.div`
  max-width: 960px;
  padding: 1em;
  margin: 0 auto;
`;

export const ComingSoon = () => {
  return (
    <NavbarProvider>
      <ComingSoonWrapper>
        <Card>
          <h1>Coming Soon</h1>
          <p>We're still working on this feature. Please bear with us!</p>
        </Card>
      </ComingSoonWrapper>
    </NavbarProvider>
  );
};
