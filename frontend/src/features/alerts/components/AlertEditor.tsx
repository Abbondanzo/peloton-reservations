import { useEffect, useState } from "react";
import styled from "styled-components";
import { STUDIOS } from "../../class-list/constants/studios";
import { selectStudio } from "../../class-list/selectors/selectStudio";
import { fetchClassList } from "../../class-list/slices/classListSlice";
import { StudioGroup } from "../../filters/components/StudioGroup";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { Padding } from "../../theme/components/Padding";
import { SectionTitle } from "../../theme/components/SectionTitle";
import { DAY_NAMES } from "../constants/days";
import { DEFAULT_TIME_RANGE } from "../constants/timeRanges";
import { Alert, TimeRange } from "../types/Alert";
import { DayPicker } from "./editor/DayPicker";
import { DisciplinesPicker } from "./editor/DisciplinesPicker";
import { InstructorsPicker } from "./editor/InstructorsPicker";

const Button = styled.button`
  padding: 1.5em;
  max-width: 300px;
  width: 100%;
  line-height: 0;
  border: 0;
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: ${(props) => props.theme.borderRadius};
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  &:hover {
    filter: brightness(96%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px;
  }
`;

const SaveFooter = styled(Padding)`
  text-align: center;
  margin-top: 24px;
`;

export const AlertEditor = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const [classId] = Object.entries(STUDIOS).find(
      ([_, value]) => value.location === "New York"
    )!;
    dispatch(fetchClassList(classId));
  }, [dispatch]);
  const selectedStudio = useAppSelector(selectStudio);

  const [selectedInstructors, setSelectedInstructors] = useState<
    string[] | null
  >(null);
  const [selectedDisciplines, setSelectedDisciplines] = useState<
    string[] | null
  >(null);
  const [timeRanges, setTimeRanges] = useState<(TimeRange | null)[]>(
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
    console.log(alert);
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
