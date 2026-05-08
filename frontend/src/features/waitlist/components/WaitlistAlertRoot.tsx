import { useSearchParams } from "react-router-dom";
import { STUDIOS } from "shared";
import styled from "styled-components";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { mediaMobile } from "../../theme/constants/queries";

const PageWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${mediaMobile`
    padding: 24px 16px;
  `}
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${(p) => p.theme.colors.main};
  margin: 0 0 12px;
`;

const Body = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondary};
  margin: 0 0 28px;
`;

const ClassCard = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 14px 16px;
  margin-bottom: 28px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ClassLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${(p) => p.theme.colors.secondary};
`;

const ClassValue = styled.span`
  font-size: 15px;
  color: ${(p) => p.theme.colors.main};
`;

const MailButton = styled.a`
  display: inline-block;
  padding: 12px 32px;
  border-radius: ${(p) => p.theme.borderRadius};
  background-color: ${(p) => p.theme.colors.accent};
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: filter 0.15s;

  &:hover {
    filter: brightness(92%);
  }
`;

const Hint = styled.p`
  margin: 16px 0 0;
  font-size: 13px;
  color: ${(p) => p.theme.colors.secondary};
`;

function formatStartsAt(startsAt: string, studioId: string): string | null {
  if (!startsAt) return null;
  try {
    const timezone = STUDIOS[studioId]?.timezone;
    return new Date(startsAt).toLocaleString("en-US", {
      timeZone: timezone ?? "UTC",
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  } catch {
    return null;
  }
}

export const WaitlistAlertRoot = () => {
  const [params] = useSearchParams();
  const studioId = params.get("studioId") ?? "";
  const startsAt = params.get("startsAt") ?? "";
  const waitingCount = params.get("waitingCount");
  const studio = STUDIOS[studioId];
  const formattedTime = formatStartsAt(startsAt, studioId);
  const count = waitingCount !== null ? parseInt(waitingCount, 10) : null;

  return (
    <NavbarProvider>
      <PageWrapper>
        <Icon>📬</Icon>
        <Title>Waitlist count changed</Title>
        <Body>
          The number of people on the waitlist just changed
          {count !== null
            ? ` — there ${count === 1 ? "is now 1 person" : `are now ${count} people`} ahead`
            : ""}
          . If you joined this waitlist, check your email — Peloton sends a
          message when it&apos;s your turn, and you&apos;ll have a 2-hour window
          to accept.
        </Body>

        {(formattedTime || studio) && (
          <ClassCard>
            {studio && (
              <>
                <ClassLabel>Studio</ClassLabel>
                <ClassValue>{studio.location}</ClassValue>
              </>
            )}
            {formattedTime && (
              <>
                <ClassLabel style={{ marginTop: studio ? 8 : 0 }}>
                  Class time
                </ClassLabel>
                <ClassValue>{formattedTime}</ClassValue>
              </>
            )}
          </ClassCard>
        )}

        <MailButton href="mailto:">Open Mail App</MailButton>
        <Hint>Opens your device&apos;s default mail app.</Hint>
      </PageWrapper>
    </NavbarProvider>
  );
};
