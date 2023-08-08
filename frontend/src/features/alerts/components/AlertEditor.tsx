import { useEffect, useState } from "react";
import styled from "styled-components";
import { STUDIOS } from "../../class-list/constants/studios";
import { selectStudio } from "../../class-list/selectors/selectStudio";
import { fetchClassList } from "../../class-list/slices/classListSlice";
import { StudioGroup } from "../../filters/components/StudioGroup";
import { selectUserId } from "../../session/selectors/selectUserId";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { Padding } from "../../theme/components/Padding";
import { SectionTitle } from "../../theme/components/SectionTitle";
import { DAY_NAMES } from "../constants/days";
import { DEFAULT_TIME_RANGE } from "../constants/timeRanges";
import { addAlert } from "../firebase/addAlert";
import { Alert, TimeRange } from "../types/Alert";
import { Button } from "./atoms/Button";
import { DayPicker } from "./editor/DayPicker";
import { DisciplinesPicker } from "./editor/DisciplinesPicker";
import { InstructorsPicker } from "./editor/InstructorsPicker";

const SaveFooter = styled(Padding)`
  text-align: center;
  margin-top: 24px;
`;

interface Props {
  onSave: () => void;
}

export const AlertEditor = ({ onSave }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const [classId] = Object.entries(STUDIOS).find(
      ([_, value]) => value.location === "New York"
    )!;
    dispatch(fetchClassList(classId));
  }, [dispatch]);
  const selectedStudio = useAppSelector(selectStudio);
  const userId = useAppSelector(selectUserId);

  const [selectedInstructors, setSelectedInstructors] =
    useState<Optional<string[]>>(null);
  const [selectedDisciplines, setSelectedDisciplines] =
    useState<Optional<string[]>>(null);
  const [timeRanges, setTimeRanges] = useState<Optional<TimeRange>[]>(
    DAY_NAMES.map(() => DEFAULT_TIME_RANGE)
  );

  // Reset all picked disciplines and instructors when the studio selection changes
  useEffect(() => {
    setSelectedInstructors((cur) => (cur ? [] : cur));
    setSelectedDisciplines((cur) => (cur ? [] : cur));
  }, [selectedStudio]);

  const handleSave = () => {
    const location = selectedStudio?.location;
    if (!location) {
      return;
    }
    if (!userId) {
      return;
    }
    const alert: Alert = {
      id: null as any,
      created: new Date().getTime(),
      studio: location,
      instructors: selectedInstructors,
      disciplines: selectedDisciplines,
      timeRanges,
      maxStatus: "free",
      numberOfWeeks: 3,
    };
    addAlert(userId, alert)
      .then(() => onSave())
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form>
      <h2>Add an alert</h2>
      <p>Pick from the following settings and hit "Save" when you're done.</p>
      <StudioGroup />
      <Padding>
        <SectionTitle>Instructors</SectionTitle>
        <InstructorsPicker
          selectedInstructors={selectedInstructors}
          setSelectedInstructors={setSelectedInstructors}
        />
      </Padding>
      <Padding>
        <SectionTitle>Disciplines</SectionTitle>
        <DisciplinesPicker
          selectedDisciplines={selectedDisciplines}
          setSelectedDisciplines={setSelectedDisciplines}
        />
      </Padding>
      <Padding>
        <SectionTitle>Day & Time</SectionTitle>
        <DayPicker timeRanges={timeRanges} setTimeRanges={setTimeRanges} />
      </Padding>
      <SaveFooter>
        <Button onClick={handleSave}>Save</Button>
      </SaveFooter>
    </form>
  );
};
