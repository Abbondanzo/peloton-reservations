import { type ChangeEvent, useCallback, useRef } from "react";
import type { TimeRange } from "shared";
import styled from "styled-components";
import { mediaMobile } from "../../../theme/constants/queries";
import { border } from "../../../theme/constants/styles";
import { DAY_NAMES } from "../../constants/days";
import {
  ALL_DAY_TIME_RANGE,
  DEFAULT_TIME_RANGE,
  SPECIFIC_DEFAULT_TIME_RANGE,
  TIME_RANGE_VALUES,
  isAllDay,
} from "../../constants/timeRanges";

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

const DayGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DayRow = styled.div<{ $enabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  min-height: 52px;
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) =>
    props.$enabled ? `${props.theme.colors.accent}06` : "transparent"};
  border: 1px solid
    ${(props) =>
      props.$enabled ? props.theme.colors.accent : props.theme.borderColor};
  transition: all 0.15s;

  ${mediaMobile`
    flex-wrap: wrap;
    gap: 8px;
    min-height: 0;
  `}
`;

const DayLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  min-width: 120px;
  color: ${(props) => props.theme.colors.main};

  ${mediaMobile`
    min-width: 0;
    flex: 1;
  `}
`;

const DayCheckbox = styled.input`
  accent-color: ${(props) => props.theme.colors.accent};
`;

const TimeControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${mediaMobile`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`;

const AllDayLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`;

const AllDayCheckbox = styled.input`
  accent-color: ${(props) => props.theme.colors.accent};
`;

const TimeSelect = styled.select`
  ${border}
  font-family: inherit;
  font-size: 13px;
  padding: 6px 8px;
  background-color: inherit;
  cursor: pointer;
  color: ${(props) => props.theme.colors.main};

  ${mediaMobile`
    flex: 1;
    min-width: 0;
  `}
`;

const ToLabel = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const ToolbarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const SmallButton = styled.button`
  padding: 4px 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
  background: none;
  font-family: inherit;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.accent};
  }
`;

interface Props {
  timeRanges: Optional<TimeRange>[];
  setTimeRanges: (timeRanges: Optional<TimeRange>[]) => void;
}

export const StepSchedule = ({ timeRanges, setTimeRanges }: Props) => {
  const enabledCount = timeRanges.filter(Boolean).length;
  const lastSpecificRanges = useRef<(TimeRange | undefined)[]>(
    DAY_NAMES.map(() => undefined)
  );

  const toggleDay = useCallback(
    (index: number) => {
      const updated = [...timeRanges];
      updated[index] = updated[index] ? null : DEFAULT_TIME_RANGE;
      setTimeRanges(updated);
    },
    [timeRanges, setTimeRanges]
  );

  const toggleAllDay = useCallback(
    (index: number) => {
      const current = timeRanges[index];
      if (!current) return;
      const updated = [...timeRanges];
      if (isAllDay(current)) {
        updated[index] =
          lastSpecificRanges.current[index] ?? SPECIFIC_DEFAULT_TIME_RANGE;
      } else {
        lastSpecificRanges.current[index] = current;
        updated[index] = ALL_DAY_TIME_RANGE;
      }
      setTimeRanges(updated);
    },
    [timeRanges, setTimeRanges]
  );

  const updateTime = useCallback(
    (index: number, field: "startMin" | "endMin", value: number) => {
      const updated = [...timeRanges];
      const current = updated[index];
      if (!current) return;
      if (field === "startMin") {
        updated[index] = {
          startMin: value,
          endMin:
            current.endMin === 0 || current.endMin >= value
              ? current.endMin
              : 0,
        };
      } else {
        updated[index] = { ...current, endMin: value };
      }
      setTimeRanges(updated);
    },
    [timeRanges, setTimeRanges]
  );

  const selectAll = () => {
    setTimeRanges(DAY_NAMES.map(() => DEFAULT_TIME_RANGE));
  };

  const clearAll = () => {
    setTimeRanges(DAY_NAMES.map(() => null));
  };

  const copyFirstToAll = () => {
    const first = timeRanges.find(Boolean);
    if (first) {
      setTimeRanges(timeRanges.map((tr) => (tr ? { ...first } : null)));
    }
  };

  return (
    <Section>
      <Legend>Days & times</Legend>
      <Description>
        Choose which days and time windows to monitor. Alerts fire when a
        matching class falls within these windows (in the studio's timezone).
      </Description>

      <ToolbarRow>
        <SmallButton type="button" onClick={selectAll}>
          Select all days
        </SmallButton>
        {enabledCount > 0 && (
          <SmallButton type="button" onClick={clearAll}>
            Clear all
          </SmallButton>
        )}
        {enabledCount > 1 && (
          <SmallButton type="button" onClick={copyFirstToAll}>
            Copy time to all
          </SmallButton>
        )}
      </ToolbarRow>

      <DayGrid>
        {DAY_NAMES.map((day, index) => {
          const timeRange = timeRanges[index];
          const dayIsAllDay = !!timeRange && isAllDay(timeRange);
          return (
            <DayRow key={day} $enabled={!!timeRange}>
              <DayLabel htmlFor={`day-${index}`}>
                <DayCheckbox
                  type="checkbox"
                  id={`day-${index}`}
                  checked={!!timeRange}
                  onChange={() => toggleDay(index)}
                />
                {day}
              </DayLabel>

              {timeRange && (
                <TimeControls>
                  <AllDayLabel htmlFor={`allday-${index}`}>
                    <AllDayCheckbox
                      type="checkbox"
                      id={`allday-${index}`}
                      checked={dayIsAllDay}
                      onChange={() => toggleAllDay(index)}
                    />
                    All day
                  </AllDayLabel>

                  {!dayIsAllDay && (
                    <>
                      <TimeSelect
                        value={timeRange.startMin}
                        aria-label={`${day} start time`}
                        onChange={({
                          target,
                        }: ChangeEvent<HTMLSelectElement>) => {
                          const mins = parseInt(target.value);
                          if (!Number.isNaN(mins))
                            updateTime(index, "startMin", mins);
                        }}
                      >
                        {TIME_RANGE_VALUES.map((v) => (
                          <option key={v.minutes} value={v.minutes}>
                            {v.label}
                          </option>
                        ))}
                      </TimeSelect>
                      <ToLabel>to</ToLabel>
                      <TimeSelect
                        value={timeRange.endMin}
                        aria-label={`${day} end time`}
                        onChange={({
                          target,
                        }: ChangeEvent<HTMLSelectElement>) => {
                          const mins = parseInt(target.value);
                          if (!Number.isNaN(mins))
                            updateTime(index, "endMin", mins);
                        }}
                      >
                        {TIME_RANGE_VALUES.map((v) => (
                          <option
                            key={v.minutes}
                            value={v.minutes}
                            disabled={
                              v.minutes > 0 && v.minutes < timeRange.startMin
                            }
                          >
                            {v.label}
                          </option>
                        ))}
                      </TimeSelect>
                    </>
                  )}
                </TimeControls>
              )}
            </DayRow>
          );
        })}
      </DayGrid>
    </Section>
  );
};
