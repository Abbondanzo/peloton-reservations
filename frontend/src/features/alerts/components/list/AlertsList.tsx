import type { Alert } from "shared";
import styled from "styled-components";
import { AlertsListItem } from "./AlertsListItem";

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface Props {
  alerts: Alert[];
  onDuplicate: (alert: Alert) => void;
  onEdit: (alert: Alert) => void;
}

export const AlertsList = ({ alerts, onDuplicate, onEdit }: Props) => {
  return (
    <ListWrapper>
      {alerts.map((alert) => (
        <AlertsListItem
          key={alert.id}
          alert={alert}
          onDuplicate={() => onDuplicate(alert)}
          onEdit={() => onEdit(alert)}
        />
      ))}
    </ListWrapper>
  );
};
