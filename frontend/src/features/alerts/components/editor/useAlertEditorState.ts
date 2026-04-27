import { useEffect, useRef, useState } from "react";
import { type Alert, DEFAULT_STUDIO_ID, type TimeRange } from "shared";
import { getStoredStudioId } from "../../../class-list/operators/studioStorage";
import { selectStudioId } from "../../../class-list/selectors/selectStudioId";
import { setStudioId } from "../../../class-list/slices/studioSlice";
import type { BookableStatus } from "../../../filters/types/BookableStatus";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/useStore";
import { DAY_NAMES } from "../../constants/days";
import { DEFAULT_TIME_RANGE } from "../../constants/timeRanges";

export interface AlertEditorState {
  selectedStudioId: string;
  name: string;
  setName: (name: string) => void;
  selectedInstructors: Optional<string[]>;
  setSelectedInstructors: (ids: Optional<string[]>) => void;
  selectedDisciplines: Optional<string[]>;
  setSelectedDisciplines: (ids: Optional<string[]>) => void;
  timeRanges: Optional<TimeRange>[];
  setTimeRanges: (ranges: Optional<TimeRange>[]) => void;
  maxStatus: BookableStatus;
  setMaxStatus: (status: BookableStatus) => void;
}

export const useAlertEditorState = (
  alertToEdit: Partial<Alert>
): AlertEditorState => {
  const dispatch = useAppDispatch();
  const selectedStudioId = useAppSelector(selectStudioId);

  useEffect(() => {
    if (alertToEdit.studioId) {
      dispatch(setStudioId(alertToEdit.studioId));
    } else {
      dispatch(setStudioId(getStoredStudioId(DEFAULT_STUDIO_ID)));
    }
  }, [alertToEdit.studioId, dispatch]);

  const [name, setName] = useState(alertToEdit.name || "");
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

  const lastStudioRef = useRef<string | undefined>(alertToEdit.studioId);
  useEffect(() => {
    if (
      selectedStudioId &&
      lastStudioRef.current &&
      selectedStudioId !== lastStudioRef.current
    ) {
      setSelectedInstructors((cur) => (cur ? [] : cur));
      setSelectedDisciplines((cur) => (cur ? [] : cur));
    }
    lastStudioRef.current = selectedStudioId;
  }, [selectedStudioId]);

  return {
    selectedStudioId,
    name,
    setName,
    selectedInstructors,
    setSelectedInstructors,
    selectedDisciplines,
    setSelectedDisciplines,
    timeRanges,
    setTimeRanges,
    maxStatus,
    setMaxStatus,
  };
};
