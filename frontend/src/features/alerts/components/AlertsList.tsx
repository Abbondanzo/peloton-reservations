import { Alert } from "../types/Alert";

interface Props {
  alerts: Alert[];
}

export const AlertsList = ({ alerts }: Props) => {
  if (alerts.length === 0) {
    return <p>No alerts. Begin by adding one below</p>;
  }
  return (
    <div>
      {alerts.map((alert, index) => {
        return <p key={index}>{alert.created}</p>;
      })}
    </div>
  );
};
