import styled from "styled-components";
import { mediaMobile } from "../../theme/constants/queries";
import { NavbarProvider } from "./NavbarProvider";

const PageWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${mediaMobile`
    padding: 16px 12px;
  `}
`;

const Section = styled.section`
  background-color: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 48px 32px;
  text-align: center;

  ${mediaMobile`
    padding: 32px 20px;
  `}
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.main};
  margin: 0 0 10px;
`;

const Description = styled.p`
  font-size: 15px;
  color: ${(p) => p.theme.colors.secondary};
  margin: 0;
  line-height: 1.55;
`;

export const ComingSoon = () => {
  return (
    <NavbarProvider>
      <PageWrapper>
        <Section>
          <Title>Coming Soon</Title>
          <Description>
            We're still working on this feature. Please bear with us!
          </Description>
        </Section>
      </PageWrapper>
    </NavbarProvider>
  );
};
