import { useNavigate } from "react-router-dom";
import type { Alert } from "shared";
import styled from "styled-components";
import { Paths } from "../../navigation/constants/paths";
import { mediaMobile } from "../../theme/constants/queries";
import { AlertPreferencesEditor } from "./editor/AlertPreferencesEditor";
import { RegisteredDevicesEditor } from "./editor/RegisteredDevicesEditor";
import { AsyncAlertsList } from "./list/AsyncAlertsList";
import { NotificationRequester } from "../../messaging/components/NotificationRequester";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${mediaMobile`
    gap: 16px;
  `}
`;

const Section = styled.section`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
`;

const SectionHeader = styled.div`
  padding: 20px 24px 0;

  ${mediaMobile`
    padding: 16px 16px 0;
  `}
`;

const SectionTitle = styled.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.main};
`;

const SectionDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
`;

const SectionBody = styled.div`
  padding: 16px 24px 24px;

  ${mediaMobile`
    padding: 12px 16px 16px;
  `}
`;

export const AlertsRoot = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Section>
        <AsyncAlertsList
          onAdd={() => {
            navigate(Paths.ALERTS_EDITOR, { state: {} });
          }}
          onEdit={(alert) => {
            navigate(Paths.ALERTS_EDITOR, { state: alert });
          }}
          onDuplicate={(alert: Alert) => {
            navigate(Paths.ALERTS_EDITOR, {
              state: { ...alert, id: undefined, created: undefined },
            });
          }}
        />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Preferences</SectionTitle>
          <SectionDescription>
            Control how often you receive alert notifications.
          </SectionDescription>
        </SectionHeader>
        <SectionBody>
          <AlertPreferencesEditor />
        </SectionBody>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Devices</SectionTitle>
          <SectionDescription>
            Devices registered to receive push notifications. Removed devices
            will re-register on their next visit.
          </SectionDescription>
        </SectionHeader>
        <SectionBody>
          <NotificationRequester />
          <RegisteredDevicesEditor />
        </SectionBody>
      </Section>
    </PageWrapper>
  );
};
