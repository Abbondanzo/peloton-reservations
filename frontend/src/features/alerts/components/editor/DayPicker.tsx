import { ChangeEvent } from "react";
import styled from "styled-components";
import { List } from "../../../theme/components/List";
import { mediaMobile } from "../../../theme/constants/queries";
import { border, focus, hover } from "../../../theme/constants/styles";
import { DAY_NAMES } from "../../constants/days";
import {
  DEFAULT_TIME_RANGE,
  TIME_RANGE_VALUES,
} from "../../constants/timeRanges";
import { isFirstEditableTimeRange } from "../../operators/isFirstEditableTimeRange";
import { TimeRange } from "../../types/Alert";

const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  column-gap: 24px;
  flex-wrap: wrap;
  row-gap: 8px;

  ${mediaMobile`
    justify-content: center;
  `}
`;

const MaxWidthListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  user-select: none;
  min-height: 32px;
  ${hover}

  width: 140px;
  ${mediaMobile`
    width: 100%;
  `}
`;

const Select = styled.select`
  ${border}
  ${hover}
  ${focus}
  font-family: inherit;
  padding: 8px;
  background-color: inherit;
  cursor: pointer;
`;

const SelectSplitter = styled.span`
  margin: 0 8px;
`;

const CopyToAllButton = styled.button`
  ${border}
  ${hover}
  font-family: inherit;
  padding: 8px;
  background-color: inherit;
  cursor: pointer;
`;

interface TimePickerProps {
  timeRange: TimeRange;
  setTimeRange: (timeRange: TimeRange) => void;
}

const TimePicker = ({ timeRange, setTimeRange }: TimePickerProps) => {
  return (
    <div>
      <Select
        value={timeRange.startMin}
        onChange={({ target }: ChangeEvent<HTMLSelectElement>) => {
          const minutes = parseInt(target.value);
          if (!Number.isNaN(minutes)) {
            setTimeRange({
              startMin: minutes,
              endMin:
                timeRange.endMin === 0 || timeRange.endMin >= minutes
                  ? timeRange.endMin
                  : 0,
            });
          }
        }}
      >
        {TIME_RANGE_VALUES.map((value, index) => {
          return (
            <option key={index} value={value.minutes}>
              {value.label}
            </option>
          );
        })}
      </Select>
      <SelectSplitter>to</SelectSplitter>
      <Select
        value={timeRange.endMin}
        onChange={({ target }: ChangeEvent<HTMLSelectElement>) => {
          const minutes = parseInt(target.value);
          if (!Number.isNaN(minutes)) {
            setTimeRange({ ...timeRange, endMin: minutes });
          }
        }}
      >
        {TIME_RANGE_VALUES.map((value, index) => {
          return (
            <option
              key={index}
              value={value.minutes}
              disabled={value.minutes > 0 && value.minutes < timeRange.startMin}
            >
              {value.label}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

interface Props {
  timeRanges: Optional<TimeRange>[];
  setTimeRanges: (timeRanges: Optional<TimeRange>[]) => void;
}

export const DayPicker = ({ timeRanges, setTimeRanges }: Props) => {
  return (
    <div>
      <List>
        {DAY_NAMES.map((day, index) => {
          const timeRange = timeRanges[index];
          return (
            <ListItemWrapper key={index}>
              <MaxWidthListItem
                onClick={() => {
                  const newTimeRanges = [...timeRanges];
                  if (timeRanges[index]) {
                    newTimeRanges[index] = null;
                  } else {
                    newTimeRanges[index] = DEFAULT_TIME_RANGE;
                  }
                  setTimeRanges(newTimeRanges);
                }}
              >
                <input
                  type="checkbox"
                  value={index}
                  checked={!!timeRanges[index]}
                  readOnly
                />
                {day}
              </MaxWidthListItem>

              {timeRange && (
                <TimePicker
                  timeRange={timeRange}
                  setTimeRange={(newTimeRange) => {
                    const newTimeRanges = [...timeRanges];
                    newTimeRanges[index] = newTimeRange;
                    setTimeRanges(newTimeRanges);
                  }}
                />
              )}

              {timeRange && isFirstEditableTimeRange(timeRanges, index) && (
                <CopyToAllButton
                  type="button"
                  onClick={() => {
                    const newTimeRanges = timeRanges.map((tr) =>
                      tr ? timeRange : null
                    );
                    setTimeRanges(newTimeRanges);
                  }}
                >
                  Copy to all
                </CopyToAllButton>
              )}
            </ListItemWrapper>
          );
        })}
      </List>
    </div>
  );
};
