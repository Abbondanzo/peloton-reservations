import type { ClassSnapshot, NearMissReason } from "shared";
import styled from "styled-components";
import { getLocalDate } from "../../../class-list/operators/getLocalDate";
import { getLocalTime } from "../../../class-list/operators/getLocalTime";

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colors.status.waitlist.text}40;
  border-left: 4px solid ${(props) => props.theme.colors.status.waitlist.text};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.status.waitlist.bg};
  padding: 12px 14px;
`;

const Label = styled.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.status.waitlist.text};
  margin-bottom: 6px;
`;

const ClassInfo = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.colors.secondary};
`;

const DetectedAt = styled.div`
  font-size: 11px;
  color: ${(props) => props.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`;

const REASON_LABELS: Record<NearMissReason, string> = {
  instructor: "wrong instructor",
  time: "outside your time range",
  discipline: "wrong discipline",
  status: "class not bookable",
};

interface Props {
  snapshot: ClassSnapshot;
  reason: NearMissReason;
  timezone: string;
}

export const NearMissCard = ({ snapshot, reason, timezone }: Props) => {
  const date = getLocalDate(snapshot.starts_at, timezone, false);
  const time = getLocalTime(snapshot.starts_at, timezone);
  const detectedTime = getLocalTime(
    new Date(snapshot.snapshotAt).toISOString(),
    timezone
  );
  const instructorName = snapshot.instructors[0]?.name ?? "Unknown instructor";

  return (
    <Card>
      <Label>◌ Near miss — {REASON_LABELS[reason]}</Label>
      <ClassInfo>
        {date} {time}
        {snapshot.name ? ` · ${snapshot.name}` : ""}
        {" · "}
        {instructorName}
      </ClassInfo>
      <DetectedAt>detected at {detectedTime}</DetectedAt>
    </Card>
  );
};
