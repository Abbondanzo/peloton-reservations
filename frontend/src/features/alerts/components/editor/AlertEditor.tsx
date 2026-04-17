import { useCallback, useEffect, useRef, useState } from "react";
import { type Alert, DEFAULT_STUDIO_ID, type TimeRange } from "shared";
import styled from "styled-components";
import { captureException } from "@sentry/react";
import { getStoredStudioId } from "../../../class-list/operators/studioStorage";
import { selectStudioId } from "../../../class-list/selectors/selectStudioId";
import { setStudioId } from "../../../class-list/slices/studioSlice";
import type { BookableStatus } from "../../../filters/types/BookableStatus";
import { selectUserId } from "../../../session/selectors/selectUserId";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/useStore";
import { mediaMobile } from "../../../theme/constants/queries";
import { DAY_NAMES } from "../../constants/days";
import { DEFAULT_TIME_RANGE } from "../../constants/timeRanges";
import { addAlert } from "../../firebase/addAlert";
import { editAlert } from "../../firebase/editAlert";
import { StepBasics } from "./StepBasics";
import { StepFilters } from "./StepFilters";
import { StepIndicator } from "./StepIndicator";
import { StepReview } from "./StepReview";
import { StepSchedule } from "./StepSchedule";

const STEPS = ["Basics", "Filters", "Schedule", "Review"];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const Header = styled.div`
  padding: 24px 24px 0;

  ${mediaMobile`
    padding: 16px 16px 0;
  `}
`;

const Title = styled.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${(props) => props.theme.colors.main};
`;

const Subtitle = styled.p`
  margin: 0 0 20px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
`;

const StepContent = styled.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${mediaMobile`
    padding: 8px 16px 16px;
  `}
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.colors.mainSurface};

  ${mediaMobile`
    padding: 12px 16px;
  `}
`;

const FooterButton = styled.button<{ $primary?: boolean }>`
  padding: 10px 24px;
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid
    ${(props) => (props.$primary ? "transparent" : props.theme.borderColor)};
  background-color: ${(props) =>
    props.$primary ? props.theme.colors.accent : "transparent"};
  color: ${(props) => (props.$primary ? "#fff" : props.theme.colors.main)};

  &:hover:not(:disabled) {
    filter: brightness(96%);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${mediaMobile`
    padding: 10px 16px;
    font-size: 13px;
  `}
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatusMessage = styled.span<{ $error?: boolean }>`
  font-size: 13px;
  color: ${(props) =>
    props.$error ? "#d93025" : props.theme.colors.secondary};

  ${mediaMobile`
    font-size: 12px;
  `}
`;

interface Props {
  alertToEdit: Partial<Alert>;
  onSave: () => void;
  onCancel: () => void;
}

export const AlertEditor = ({ alertToEdit, onSave, onCancel }: Props) => {
  const dispatch = useAppDispatch();
  const selectedStudioId = useAppSelector(selectStudioId);
  const userId = useAppSelector(selectUserId);

  // --- Step state ---
  const [currentStep, setCurrentStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string>();

  // --- Form state ---
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

  // Reset filters when studio changes
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

  // --- Navigation ---
  const canGoNext = currentStep < STEPS.length - 1;
  const canGoBack = currentStep > 0;
  const isReview = currentStep === STEPS.length - 1;

  const goNext = useCallback(() => {
    if (canGoNext) setCurrentStep((s) => s + 1);
  }, [canGoNext]);

  const goBack = useCallback(() => {
    if (canGoBack) setCurrentStep((s) => s - 1);
  }, [canGoBack]);

  // --- Save ---
  const handleSave = useCallback(async () => {
    if (!selectedStudioId || !userId) return;
    setSaving(true);
    setError(undefined);

    const alert: Alert = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      id: alertToEdit.id || (null as any),
      created: alertToEdit.created || new Date().getTime(),
      ...(name.trim() ? { name: name.trim() } : {}),
      studioId: selectedStudioId,
      instructors: selectedInstructors,
      disciplines: selectedDisciplines,
      timeRanges,
      maxStatus,
    };

    try {
      if (alert.id) {
        await editAlert(userId, alert);
      } else {
        await addAlert(userId, alert);
      }
      onSave();
    } catch (err) {
      captureException(err);
      setError("Something went wrong. Please try again.");
      setSaving(false);
    }
  }, [
    alertToEdit.id,
    alertToEdit.created,
    name,
    selectedStudioId,
    userId,
    selectedInstructors,
    selectedDisciplines,
    timeRanges,
    maxStatus,
    onSave,
  ]);

  const isEditing = !!alertToEdit.id;

  return (
    <Wrapper>
      <Header>
        <Title>{isEditing ? "Edit alert" : "New alert"}</Title>
        <Subtitle>
          {isEditing
            ? "Update your alert settings below."
            : "Set up a new alert in a few quick steps."}
        </Subtitle>
        <StepIndicator
          steps={STEPS}
          currentStep={currentStep}
          onStepClick={setCurrentStep}
        />
      </Header>

      <StepContent>
        {currentStep === 0 && (
          <StepBasics
            name={name}
            onNameChange={setName}
            studioId={selectedStudioId}
            onStudioChange={(id) => dispatch(setStudioId(id))}
            maxStatus={maxStatus}
            onStatusChange={setMaxStatus}
          />
        )}
        {currentStep === 1 && (
          <StepFilters
            studioId={selectedStudioId}
            selectedInstructors={selectedInstructors}
            setSelectedInstructors={setSelectedInstructors}
            selectedDisciplines={selectedDisciplines}
            setSelectedDisciplines={setSelectedDisciplines}
          />
        )}
        {currentStep === 2 && (
          <StepSchedule timeRanges={timeRanges} setTimeRanges={setTimeRanges} />
        )}
        {currentStep === 3 && (
          <StepReview
            name={name}
            studioId={selectedStudioId}
            maxStatus={maxStatus}
            selectedInstructors={selectedInstructors}
            selectedDisciplines={selectedDisciplines}
            timeRanges={timeRanges}
          />
        )}
      </StepContent>

      <Footer>
        <div>
          {canGoBack ? (
            <FooterButton type="button" onClick={goBack}>
              Back
            </FooterButton>
          ) : (
            <FooterButton type="button" onClick={onCancel}>
              Cancel
            </FooterButton>
          )}
        </div>

        <FooterRight>
          {error && <StatusMessage $error>{error}</StatusMessage>}
          {isReview ? (
            <FooterButton
              type="button"
              $primary
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Saving…" : "Save alert"}
            </FooterButton>
          ) : (
            <FooterButton type="button" $primary onClick={goNext}>
              Continue
            </FooterButton>
          )}
        </FooterRight>
      </Footer>
    </Wrapper>
  );
};
