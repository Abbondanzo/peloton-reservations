import { memo } from "react";
import { STUDIOS, type TimeRange } from "shared";
import styled from "styled-components";
import { useGetClassesQuery } from "../../../class-list/services/pelotonApi";
import type { Class } from "../../../class-list/types/Class";
import { mediaMobile } from "../../../theme/constants/queries";
import { border, hover } from "../../../theme/constants/styles";
import { OptionCard } from "./OptionCard";

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

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
  margin: 0 0 16px;
`;

const OptionsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionSpacer = styled.div`
  margin-top: 32px;

  ${mediaMobile`
    margin-top: 24px;
  `}
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  padding: 6px 16px;
  border: 1px solid
    ${(props) =>
      props.$active ? props.theme.colors.accent : props.theme.borderColor};
  border-radius: 20px;
  background-color: ${(props) =>
    props.$active ? `${props.theme.colors.accent}0f` : "transparent"};
  color: ${(props) =>
    props.$active ? props.theme.colors.accent : props.theme.colors.secondary};
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

const ClassList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 360px;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};

  ${mediaMobile`
    max-height: 280px;
  `}
`;

const ClassRow = styled.label<{ $checked: boolean }>`
  ${border}
  ${hover}
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  cursor: pointer;
  user-select: none;
  transition:
    border-color 0.15s,
    background-color 0.15s;
  border-color: ${(props) =>
    props.$checked ? props.theme.colors.accent : props.theme.borderColor};
  background-color: ${(props) =>
    props.$checked ? `${props.theme.colors.accent}0a` : "transparent"};
`;

const ClassCheckbox = styled.input`
  accent-color: ${(props) => props.theme.colors.accent};
  margin-top: 2px;
  flex-shrink: 0;
`;

const ClassInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const ClassTime = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.main};
`;

const ClassMeta = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const StatusBadge = styled.span<{ $status: string }>`
  font-size: 11px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 4px;
  margin-left: auto;
  flex-shrink: 0;
  align-self: flex-start;
  background-color: ${(props) => {
    if (props.$status === "free") return `${props.theme.colors.accent}18`;
    if (props.$status === "waitlist") return "#f59e0b18";
    return `${props.theme.colors.secondarySurface}`;
  }};
  color: ${(props) => {
    if (props.$status === "free") return props.theme.colors.accent;
    if (props.$status === "waitlist") return "#b45309";
    return props.theme.colors.secondary;
  }};
`;

const StateText = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  padding: 20px;
  text-align: center;
  margin: 0;
`;

const RetryButton = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`;

const SelectedCount = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  margin-left: auto;
`;

// ---------------------------------------------------------------------------
// Filtering
// ---------------------------------------------------------------------------

function localMinuteOfDay(
  isoTimestamp: string,
  timezone: string
): { day: number; minute: number } | null {
  try {
    const date = new Date(isoTimestamp);
    const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
    const tzDate = new Date(
      date.toLocaleString("en-US", { timeZone: timezone })
    );
    const offset = utcDate.getTime() - tzDate.getTime();
    date.setTime(date.getTime() - offset);
    return {
      day: date.getDay(),
      minute: date.getHours() * 60 + date.getMinutes(),
    };
  } catch {
    return null;
  }
}

function formatClassTime(isoTimestamp: string, timezone: string): string {
  try {
    return new Date(isoTimestamp).toLocaleString("en-US", {
      timeZone: timezone,
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return isoTimestamp;
  }
}

function filterClasses(
  classes: Class[],
  instructors: Optional<string[]>,
  disciplines: Optional<string[]>,
  timeRanges: Optional<TimeRange>[],
  studioId: string
): Class[] {
  const timezone = STUDIOS[studioId]?.timezone;
  const now = Date.now();

  return classes.filter((cls) => {
    if (new Date(cls.start).getTime() <= now) return false;
    if (instructors !== null && !instructors.includes(cls.instructor.id))
      return false;
    if (disciplines !== null && !disciplines.includes(cls.discipline.id))
      return false;
    if (timeRanges && timezone) {
      const local = localMinuteOfDay(cls.start, timezone);
      if (!local) return false;
      const range = timeRanges[local.day];
      if (!range) return false;
      if (local.minute < range.startMin || local.minute > range.endMin)
        return false;
    }
    return true;
  });
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface ClassPickerProps {
  studioId: string;
  instructors: Optional<string[]>;
  disciplines: Optional<string[]>;
  timeRanges: Optional<TimeRange>[];
  selectedIds: string[];
  onToggle: (id: string) => void;
}

const ClassPicker = memo(
  ({
    studioId,
    instructors,
    disciplines,
    timeRanges,
    selectedIds,
    onToggle,
  }: ClassPickerProps) => {
    const query = useGetClassesQuery(studioId);
    const timezone = STUDIOS[studioId]?.timezone ?? "UTC";

    if (query.isLoading) {
      return <StateText>Loading classes…</StateText>;
    }
    if (query.error) {
      return (
        <StateText>
          Couldn&apos;t load classes.{" "}
          <RetryButton type="button" onClick={query.refetch}>
            Try again
          </RetryButton>
        </StateText>
      );
    }

    const filtered = filterClasses(
      query.currentData ?? [],
      instructors,
      disciplines,
      timeRanges,
      studioId
    );

    if (filtered.length === 0) {
      return <StateText>No upcoming classes match your filters.</StateText>;
    }

    return (
      <ClassList role="group" aria-label="Classes">
        {filtered.map((cls) => {
          const checked = selectedIds.includes(cls.id);
          const timeLabel = formatClassTime(cls.start, timezone);
          const meta = [cls.instructor.name, cls.discipline.name]
            .filter(Boolean)
            .join(" · ");
          const statusLabel =
            cls.status === "free"
              ? "Open"
              : cls.status === "waitlist"
                ? "Waitlist"
                : "Full";
          return (
            <ClassRow key={cls.id} $checked={checked} htmlFor={`cls-${cls.id}`}>
              <ClassCheckbox
                type="checkbox"
                id={`cls-${cls.id}`}
                checked={checked}
                onChange={() => onToggle(cls.id)}
              />
              <ClassInfo>
                <ClassTime>{timeLabel}</ClassTime>
                {meta && <ClassMeta>{meta}</ClassMeta>}
              </ClassInfo>
              <StatusBadge $status={cls.status}>{statusLabel}</StatusBadge>
            </ClassRow>
          );
        })}
      </ClassList>
    );
  }
);

// ---------------------------------------------------------------------------
// StepWaitlist
// ---------------------------------------------------------------------------

interface Props {
  studioId: string;
  waitlistAlerts: boolean;
  onWaitlistAlertsChange: (enabled: boolean) => void;
  /** null = any matching class; string[] = only these specific class IDs */
  watchedClassIds: Optional<string[]>;
  onWatchedClassIdsChange: (ids: Optional<string[]>) => void;
  selectedInstructors: Optional<string[]>;
  selectedDisciplines: Optional<string[]>;
  timeRanges: Optional<TimeRange>[];
}

export const StepWaitlist = ({
  studioId,
  waitlistAlerts,
  onWaitlistAlertsChange,
  watchedClassIds,
  onWatchedClassIdsChange,
  selectedInstructors,
  selectedDisciplines,
  timeRanges,
}: Props) => {
  const toggleClass = (id: string) => {
    const current = watchedClassIds ?? [];
    onWatchedClassIdsChange(
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    );
  };

  const isSpecific = watchedClassIds !== null;
  const selectedCount = watchedClassIds?.length ?? 0;

  return (
    <div>
      <Section>
        <Legend>Waitlist position alerts</Legend>
        <Description>
          Get a push notification whenever the waitlist count changes for a
          matching class. Tap the notification to open a prompt reminding you to
          check your email for the 2-hour acceptance window.
        </Description>
        <OptionsStack>
          <OptionCard
            name="waitlistAlerts"
            value="off"
            checked={!waitlistAlerts}
            onChange={() => onWaitlistAlertsChange(false)}
            label="Disabled"
            hint="No waitlist count notifications"
          />
          <OptionCard
            name="waitlistAlerts"
            value="on"
            checked={waitlistAlerts}
            onChange={() => onWaitlistAlertsChange(true)}
            label="Enabled"
            hint="Notify me when the waitlist count changes"
          />
        </OptionsStack>
      </Section>

      {waitlistAlerts && (
        <>
          <SectionSpacer />
          <Section>
            <Legend>Which classes?</Legend>
            <Description>
              Notify for any class matching your filters, or pick specific ones
              you&apos;ve already joined the waitlist for.
            </Description>
            <ToggleRow>
              <ToggleButton
                type="button"
                $active={!isSpecific}
                onClick={() => onWatchedClassIdsChange(null)}
              >
                Any matching class
              </ToggleButton>
              <ToggleButton
                type="button"
                $active={isSpecific}
                onClick={() => {
                  if (!isSpecific) onWatchedClassIdsChange([]);
                }}
              >
                Specific classes
              </ToggleButton>
              {isSpecific && selectedCount > 0 && (
                <SelectedCount>{selectedCount} selected</SelectedCount>
              )}
            </ToggleRow>

            {isSpecific && (
              <ClassPicker
                studioId={studioId}
                instructors={selectedInstructors}
                disciplines={selectedDisciplines}
                timeRanges={timeRanges}
                selectedIds={watchedClassIds}
                onToggle={toggleClass}
              />
            )}
          </Section>
        </>
      )}
    </div>
  );
};
