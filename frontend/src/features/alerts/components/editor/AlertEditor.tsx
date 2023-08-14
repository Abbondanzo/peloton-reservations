import { useEffect, useState } from "react";
import styled from "styled-components";
import { STUDIOS } from "../../../class-list/constants/studios";
import { selectStudioId } from "../../../class-list/selectors/selectStudioId";
import { fetchClassList } from "../../../class-list/slices/classListSlice";
import { StudioGroup } from "../../../filters/components/StudioGroup";
import { selectUserId } from "../../../session/selectors/selectUserId";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/useStore";
import { Padding } from "../../../theme/components/Padding";
import { SectionTitle } from "../../../theme/components/SectionTitle";
import { DAY_NAMES } from "../../constants/days";
import { DEFAULT_TIME_RANGE } from "../../constants/timeRanges";
import { addAlert } from "../../firebase/addAlert";
import { editAlert } from "../../firebase/editAlert";
import { Alert, TimeRange } from "../../types/Alert";
import { Button, SecondaryButton } from "../atoms/Button";
import { DayPicker } from "./DayPicker";
import { DisciplinesPicker } from "./DisciplinesPicker";
import { InstructorsPicker } from "./InstructorsPicker";

const SaveFooter = styled(Padding)`
  text-align: center;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
`;

interface Props {
  alertToEdit: Partial<Alert>;
  onSave: () => void;
  onCancel: () => void;
}

export const AlertEditor = ({ alertToEdit, onSave, onCancel }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (alertToEdit.studioId) {
      dispatch(fetchClassList(alertToEdit.studioId));
    } else {
      const [classId] = Object.entries(STUDIOS).find(
        ([_, value]) => value.location === "New York"
      )!;
      dispatch(fetchClassList(classId));
    }
  }, [alertToEdit.studioId, dispatch]);
  const selectedStudioId = useAppSelector(selectStudioId);
  const userId = useAppSelector(selectUserId);

  const [selectedInstructors, setSelectedInstructors] = useState<
    Optional<string[]>
  >(alertToEdit.instructors || null);
  const [selectedDisciplines, setSelectedDisciplines] = useState<
    Optional<string[]>
  >(alertToEdit.disciplines || null);
  const [timeRanges, setTimeRanges] = useState<Optional<TimeRange>[]>(
    alertToEdit.timeRanges || DAY_NAMES.map(() => DEFAULT_TIME_RANGE)
  );

  // TODO: Reset all picked disciplines and instructors when the studio selection changes
  // const lastStudioRef = useRef<string>(alertToEdit.studioId || null);
  // useEffect(() => {
  //   if (selectedStudioId !== lastStudioRef.current) {
  //     lastStudioRef.current = selectStudioId;
  //     setSelectedInstructors((cur) => (cur ? [] : cur));
  //     setSelectedDisciplines((cur) => (cur ? [] : cur));
  //   }
  // }, [selectedStudioId]);

  const handleSave = () => {
    if (!selectedStudioId) {
      return;
    }
    if (!userId) {
      return;
    }
    const alert: Alert = {
      id: alertToEdit.id || (null as any),
      created: alertToEdit.created || new Date().getTime(),
      studioId: selectedStudioId,
      instructors: selectedInstructors,
      disciplines: selectedDisciplines,
      timeRanges,
      maxStatus: "free",
      numberOfWeeks: 3,
    };
    const promise = alert.id
      ? editAlert(userId, alert)
      : addAlert(userId, alert);
    promise
      .then(() => onSave())
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form>
      <h2>{alertToEdit.id ? "Edit" : "Add"} an alert</h2>
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
        <SecondaryButton type="button" onClick={onCancel}>
          Cancel
        </SecondaryButton>
        <Button type="button" onClick={handleSave}>
          Save
        </Button>
      </SaveFooter>
    </form>
  );
};
