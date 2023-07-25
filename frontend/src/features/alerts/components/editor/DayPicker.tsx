import { List } from "../../../theme/components/List";
import { ListItem } from "../../../theme/components/ListItem";
import { DEFAULT_TIME_RANGE } from "../../constants/timeRanges";
import { TimeRange } from "../../types/Alert";

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

interface Props {
  timeRanges: (TimeRange | null)[];
  setTimeRanges: (timeRanges: (TimeRange | null)[]) => void;
}

export const DayPicker = ({ timeRanges, setTimeRanges }: Props) => {
  return (
    <div>
      <List>
        {DAY_NAMES.map((day, index) => {
          return (
            <ListItem
              key={index}
              onClick={() => {
                console.log("ntr");
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
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
