import { useEffect, useState } from "react";
import { type Alert, DEFAULT_STUDIO_ID, type TimeRange } from "shared";
import styled from "styled-components";
import { getStoredStudioId } from "../../../class-list/operators/studioStorage";
import { selectStudioId } from "../../../class-list/selectors/selectStudioId";
import { setStudioId } from "../../../class-list/slices/studioSlice";
import { StudioGroup } from "../../../filters/components/StudioGroup";
import type { BookableStatus } from "../../../filters/types/BookableStatus";
import { selectUserId } from "../../../session/selectors/selectUserId";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/useStore";
import { Padding } from "../../../theme/components/Padding";
import { SectionTitle } from "../../../theme/components/SectionTitle";
import { DAY_NAMES } from "../../constants/days";
import { DEFAULT_TIME_RANGE } from "../../constants/timeRanges";
import { addAlert } from "../../firebase/addAlert";
import { editAlert } from "../../firebase/editAlert";
import { Button, SecondaryButton } from "../atoms/Button";
import { DayPicker } from "./DayPicker";
import { DisciplinesPicker } from "./DisciplinesPicker";
import { InstructorsPicker } from "./InstructorsPicker";
import { StatusPicker } from "./StatusPicker";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 1em;
  row-gap: 1em;
`;

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
      dispatch(setStudioId(alertToEdit.studioId));
    } else {
      const studioId = getStoredStudioId(DEFAULT_STUDIO_ID);
      dispatch(setStudioId(studioId));
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
    () => alertToEdit.timeRanges || DAY_NAMES.map(() => DEFAULT_TIME_RANGE)
  );
  const [maxStatus, setMaxStatus] = useState<BookableStatus>(
    alertToEdit.maxStatus || "free"
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      id: alertToEdit.id || (null as any),
      created: alertToEdit.created || new Date().getTime(),
      studioId: selectedStudioId,
      instructors: selectedInstructors,
      disciplines: selectedDisciplines,
      timeRanges,
      maxStatus,
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
      <GridWrapper>
        <StudioGroup />
        <StatusPicker status={maxStatus} setStatus={setMaxStatus} />
      </GridWrapper>
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
