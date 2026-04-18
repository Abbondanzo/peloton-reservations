import { STUDIOS, type TimeRange } from "shared";
import styled from "styled-components";
import type { BookableStatus } from "../../../filters/types/BookableStatus";
import { mediaMobile } from "../../../theme/constants/queries";
import { DAY_NAMES } from "../../constants/days";
import { TIME_RANGE_VALUES, isAllDay } from "../../constants/timeRanges";

const Section = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

const Legend = styled.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.colors.main};
  margin-bottom: 4px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`;

const SummaryCard = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 16px;
  gap: 8px;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }

  ${mediaMobile`
    flex-direction: column;
    gap: 4px;
  `}
`;

const RowLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`;

const RowValue = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${mediaMobile`
    text-align: left;
  `}
`;

const DaysList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${mediaMobile`
    justify-content: flex-start;
  `}
`;

const DayChip = styled.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${(props) => props.theme.colors.secondarySurface};
  color: ${(props) => props.theme.colors.main};
`;

const formatTimeRange = (tr: TimeRange): string => {
  if (isAllDay(tr)) return "All day";
  const start = TIME_RANGE_VALUES.find((v) => v.minutes === tr.startMin);
  const end = TIME_RANGE_VALUES.find((v) => v.minutes === tr.endMin);
  if (!start || !end) return "All day";
  return `${start.label} – ${end.label}`;
};

const formatStatus = (status: BookableStatus): string => {
  switch (status) {
    case "free":
      return "Open spots only";
    case "waitlist":
      return "Open spots or waitlist";
    case "full":
      return "Any status";
  }
};

interface Props {
  name: string;
  studioId: string;
  maxStatus: BookableStatus;
  selectedInstructors: Optional<string[]>;
  selectedDisciplines: Optional<string[]>;
  timeRanges: Optional<TimeRange>[];
}

export const StepReview = ({
  name,
  studioId,
  maxStatus,
  selectedInstructors,
  selectedDisciplines,
  timeRanges,
}: Props) => {
  const studio = STUDIOS[studioId];
  const enabledDays = DAY_NAMES.filter((_, i) => timeRanges[i]);
  const firstTimeRange = timeRanges.find(Boolean);

  // Check if all enabled days have the same time range
  const allSameTime = timeRanges
    .filter(Boolean)
    .every(
      (tr) =>
        tr &&
        firstTimeRange &&
        tr.startMin === firstTimeRange.startMin &&
        tr.endMin === firstTimeRange.endMin
    );

  return (
    <Section>
      <Legend>Review your alert</Legend>
      <Description>
        Double-check everything looks right, then hit Save.
      </Description>

      <SummaryCard>
        {name.trim() && (
          <SummaryRow>
            <RowLabel>Name</RowLabel>
            <RowValue>{name.trim()}</RowValue>
          </SummaryRow>
        )}

        <SummaryRow>
          <RowLabel>Studio</RowLabel>
          <RowValue>{studio?.location || studioId}</RowValue>
        </SummaryRow>

        <SummaryRow>
          <RowLabel>Alert on</RowLabel>
          <RowValue>{formatStatus(maxStatus)}</RowValue>
        </SummaryRow>

        <SummaryRow>
          <RowLabel>Instructors</RowLabel>
          <RowValue>
            {selectedInstructors === null
              ? "Any instructor"
              : selectedInstructors.length === 0
                ? "None selected"
                : `${selectedInstructors.length} selected`}
          </RowValue>
        </SummaryRow>

        <SummaryRow>
          <RowLabel>Disciplines</RowLabel>
          <RowValue>
            {selectedDisciplines === null
              ? "Any discipline"
              : selectedDisciplines.length === 0
                ? "None selected"
                : `${selectedDisciplines.length} selected`}
          </RowValue>
        </SummaryRow>

        <SummaryRow>
          <RowLabel>Days</RowLabel>
          {enabledDays.length === 0 ? (
            <RowValue>No days selected</RowValue>
          ) : enabledDays.length === 7 ? (
            <RowValue>Every day</RowValue>
          ) : (
            <DaysList>
              {enabledDays.map((day) => (
                <DayChip key={day}>{day.slice(0, 3)}</DayChip>
              ))}
            </DaysList>
          )}
        </SummaryRow>

        {firstTimeRange && (
          <SummaryRow>
            <RowLabel>Time window</RowLabel>
            <RowValue>
              {allSameTime ? formatTimeRange(firstTimeRange) : "Varies by day"}
            </RowValue>
          </SummaryRow>
        )}
      </SummaryCard>
    </Section>
  );
};
