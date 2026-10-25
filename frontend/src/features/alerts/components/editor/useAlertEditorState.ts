import { useCallback, useEffect, useState } from "react";
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
  setSelectedStudioId: (studioId: string) => void;
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
  waitlistAlerts: boolean;
  setWaitlistAlerts: (enabled: boolean) => void;
  watchedClassIds: Optional<string[]>;
  setWatchedClassIds: (ids: Optional<string[]>) => void;
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
  const [waitlistAlerts, setWaitlistAlerts] = useState<boolean>(
    alertToEdit.waitlistAlerts ?? false
  );
  const [watchedClassIds, setWatchedClassIds] = useState<Optional<string[]>>(
    alertToEdit.watchedClassIds ?? null
  );

  /**
   * Changes the studio the alert targets. Instructor and discipline ids are
   * scoped to a studio, so any selection made against the old one is dropped.
   *
   * This is driven by the user picking a studio rather than by watching
   * `selectedStudioId`: the effect above dispatches the alert's own studio on
   * mount, and a watcher cannot tell that sync apart from a real change — it
   * used to read the mount-time sync as a studio switch and wipe the filters
   * the alert was seeded with.
   */
  const setSelectedStudioId = useCallback(
    (studioId: string) => {
      if (studioId === selectedStudioId) return;
      dispatch(setStudioId(studioId));
      setSelectedInstructors((cur) => (cur ? [] : cur));
      setSelectedDisciplines((cur) => (cur ? [] : cur));
    },
    [dispatch, selectedStudioId]
  );

  return {
    selectedStudioId,
    setSelectedStudioId,
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
    waitlistAlerts,
    setWaitlistAlerts,
    watchedClassIds,
    setWatchedClassIds,
  };
};
