import { useContext } from "react";
import type { Alert } from "shared";
import styled from "styled-components";
import { mediaMobile } from "../../../theme/constants/queries";
import { AlertsContext } from "../../context/AlertsContext";
import { AlertsList } from "./AlertsList";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${mediaMobile`
    padding: 16px 16px 0;
  `}
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.main};
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
`;

const AddButton = styled.button`
  padding: 8px 20px;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.accent};
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: filter 0.15s;

  &:hover {
    filter: brightness(92%);
  }

  ${mediaMobile`
    padding: 8px 14px;
    font-size: 13px;
  `}
`;

const Body = styled.div`
  padding: 16px 24px 24px;

  ${mediaMobile`
    padding: 12px 16px 16px;
  `}
`;

const StatusText = styled.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
`;

const ErrorText = styled.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.error};
  font-size: 14px;
`;

interface Props {
  onAdd: () => void;
  onEdit: (alert: Alert) => void;
  onDuplicate: (alert: Alert) => void;
}

export const AsyncAlertsList = ({ onAdd, onEdit, onDuplicate }: Props) => {
  const alertsState = useContext(AlertsContext);

  const isLoading =
    alertsState.state === "loading" || alertsState.state === "idle";
  const isFailed = alertsState.state === "failed";
  const alerts = alertsState.state === "fulfilled" ? alertsState.data : [];

  return (
    <>
      <Header>
        <HeaderLeft>
          <Title>Alerts</Title>
          <Subtitle>
            {isLoading
              ? "Loading your alerts…"
              : isFailed
                ? "Something went wrong"
                : alerts.length === 0
                  ? "You haven't created any alerts yet"
                  : `${alerts.length} alert${alerts.length === 1 ? "" : "s"}`}
          </Subtitle>
        </HeaderLeft>
        {!isLoading && !isFailed && (
          <AddButton type="button" onClick={onAdd}>
            + New alert
          </AddButton>
        )}
      </Header>

      <Body>
        {isLoading && <StatusText>Loading…</StatusText>}
        {isFailed && (
          <ErrorText>
            Failed to load your alerts. Please refresh and try again.
          </ErrorText>
        )}
        {!isLoading && !isFailed && alerts.length === 0 && (
          <EmptyState onAdd={onAdd} />
        )}
        {!isLoading && !isFailed && alerts.length > 0 && (
          <AlertsList
            alerts={alerts}
            onEdit={onEdit}
            onDuplicate={onDuplicate}
          />
        )}
      </Body>
    </>
  );
};

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`;

const EmptyText = styled.p`
  margin: 0;
  font-size: 15px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
`;

const EmptyButton = styled.button`
  padding: 10px 24px;
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: ${(props) => props.theme.borderRadius};
  background: none;
  color: ${(props) => props.theme.colors.accent};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent}0a;
  }
`;

const EmptyState = ({ onAdd }: { onAdd: () => void }) => (
  <EmptyWrapper>
    <EmptyText>
      Create your first alert to get notified when classes become available.
    </EmptyText>
    <EmptyButton type="button" onClick={onAdd}>
      Create an alert
    </EmptyButton>
  </EmptyWrapper>
);
