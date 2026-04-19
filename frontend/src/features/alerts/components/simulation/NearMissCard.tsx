import type { ClassSnapshot, NearMissReason } from "shared";
import styled from "styled-components";
import { getLocalTime } from "../../../class-list/operators/getLocalTime";

const Card = styled.div`
  border: 1px solid #ffe0b2;
  border-left: 4px solid #fb8c00;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: #fffbf5;
  padding: 12px 14px;
`;

const Label = styled.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #e65100;
  margin-bottom: 6px;
`;

const ClassInfo = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.colors.secondary};
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
  timezone?: string;
}

export const NearMissCard = ({ snapshot, reason, timezone }: Props) => {
  const time = getLocalTime(snapshot.starts_at, timezone);
  const instructorName = snapshot.instructors[0]?.name ?? "Unknown instructor";

  return (
    <Card>
      <Label>◌ Near miss — {REASON_LABELS[reason]}</Label>
      <ClassInfo>
        {time}
        {snapshot.name ? ` · ${snapshot.name}` : ""}
        {" · "}
        {instructorName}
      </ClassInfo>
    </Card>
  );
};
