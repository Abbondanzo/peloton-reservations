import type { Alert } from "shared";
import styled from "styled-components";
import { AlertsListItem } from "./AlertsListItem";

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

interface Props {
  alerts: Alert[];
  onDuplicate: (alert: Alert) => void;
  onEdit: (alert: Alert) => void;
}

export const AlertsList = ({ alerts, onDuplicate, onEdit }: Props) => {
  if (alerts.length === 0) {
    return <p>No alerts. Begin by adding one below</p>;
  }
  return (
    <div>
      <ListWrapper>
        {alerts.map((alert, index) => {
          return (
            <AlertsListItem
              key={index}
              alert={alert}
              onDuplicate={() => onDuplicate(alert)}
              onEdit={() => onEdit(alert)}
            />
          );
        })}
      </ListWrapper>
    </div>
  );
};
