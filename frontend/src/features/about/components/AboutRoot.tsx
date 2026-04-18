import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Paths } from "../../navigation/constants/paths";
import { mediaMobile } from "../../theme/constants/queries";

const PageWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${mediaMobile`
    padding: 16px 12px;
  `}
`;

const PageHeader = styled.div`
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.main};
  margin: 0;
`;

const Section = styled.section`
  background-color: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
`;

const SectionTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.main};
  margin: 0;
`;

const SectionBody = styled.div`
  padding: 16px 20px;
  line-height: 1.65;
  font-size: 15px;
  color: ${(p) => p.theme.colors.secondary};

  a {
    color: ${(p) => p.theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0;
  }
`;

export const AboutRoot = () => {
  return (
    <NavbarProvider>
      <PageWrapper>
        <PageHeader>
          <PageTitle>FAQ</PageTitle>
        </PageHeader>

        <Section>
          <SectionHeader>
            <SectionTitle>What is this?</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <p>
              A quicker, smarter way to browse{" "}
              <a
                href="https://studio.onepeloton.com/"
                target="_blank"
                rel="noreferrer"
              >
                Peloton Studios
              </a>{" "}
              class reservations. Filter by status (free, waitlist, full),
              instructor, or discipline — things the official site doesn't
              support. Classes are fetched directly from Peloton each time you
              load the page.
            </p>
          </SectionBody>
        </Section>

        <Section>
          <SectionHeader>
            <SectionTitle>How do I view classes?</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <p>
              Open the <Link to={Paths.CLASS_LIST}>Class List</Link> and use the
              sidebar to set filters or switch between studio locations.
            </p>
          </SectionBody>
        </Section>

        <Section>
          <SectionHeader>
            <SectionTitle>Is the class data live?</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <p>
              Yes — data is fetched fresh from Peloton each time you load the
              page or switch studio. Filters persist across refreshes, unlike
              the official site.
            </p>
          </SectionBody>
        </Section>

        <Section>
          <SectionHeader>
            <SectionTitle>When do new classes become available?</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <p>
              New classes typically open at 12:00 pm on Mondays and Thursdays in
              your studio's local timezone.
            </p>
          </SectionBody>
        </Section>

        <Section>
          <SectionHeader>
            <SectionTitle>
              Can I request a feature or report a bug?
            </SectionTitle>
          </SectionHeader>
          <SectionBody>
            <p>
              Yes — this project is open source and lives on{" "}
              <a
                href="https://github.com/Abbondanzo/peloton-reservations"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              . Open an issue to request a feature, report a bug, or just share
              feedback. Pull requests are welcome too.
            </p>
          </SectionBody>
        </Section>
      </PageWrapper>
    </NavbarProvider>
  );
};
