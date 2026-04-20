import type { ClassSnapshot } from "shared";
import styled from "styled-components";
import { getLocalDate } from "../../../class-list/operators/getLocalDate";
import { getLocalTime } from "../../../class-list/operators/getLocalTime";

const Card = styled.div`
  border: 1px solid #a5d6a7;
  border-left: 4px solid #43a047;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: #f1f8f1;
  padding: 12px 14px;
`;

const Label = styled.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #2e7d32;
  margin-bottom: 6px;
`;

const ClassInfo = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.colors.main};
  font-weight: 500;
`;

const Meta = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 2px;
`;

interface Props {
  snapshot: ClassSnapshot;
  timezone?: string;
}

export const MatchCard = ({ snapshot, timezone }: Props) => {
  const date = timezone
    ? getLocalDate(snapshot.starts_at, timezone, false)
    : "";
  const time = getLocalTime(snapshot.starts_at, timezone);
  const instructorName = snapshot.instructors[0]?.name ?? "Unknown instructor";
  const spotsLeft = snapshot.maxOccupancy - snapshot.occupancy;

  return (
    <Card>
      <Label>● Would have triggered</Label>
      <ClassInfo>
        {date} {time}
        {snapshot.name ? ` · ${snapshot.name}` : ""}
        {" · "}
        {instructorName}
      </ClassInfo>
      <Meta>
        {snapshot.status === "free"
          ? `Free · ${spotsLeft} spot${spotsLeft === 1 ? "" : "s"} available`
          : snapshot.status === "waitlist"
            ? `Waitlist · ${snapshot.waitingCount} waiting`
            : "Full"}
      </Meta>
    </Card>
  );
};
