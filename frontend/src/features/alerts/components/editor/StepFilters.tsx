import { useEffect, useRef } from "react";
import styled from "styled-components";
import { DisciplineIcon } from "../../../class-list/components/DisciplineIcon";
import { InstructorIcon } from "../../../class-list/components/InstructorIcon";
import {
  useGetDisciplinesQuery,
  useGetInstructorsQuery,
} from "../../../class-list/services/pelotonApi";
import type { Discipline } from "../../../class-list/types/Discipline";
import type { Instructor } from "../../../class-list/types/Instructor";
import { mediaMobile } from "../../../theme/constants/queries";
import { isNotEmpty } from "../../../utils/optional";
import { CheckOption } from "./CheckOption";

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
  margin: 0 0 12px;
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  padding: 6px 16px;
  border: 1px solid
    ${(props) =>
      props.$active ? props.theme.colors.accent : props.theme.borderColor};
  border-radius: 20px;
  background-color: ${(props) =>
    props.$active ? `${props.theme.colors.accent}0f` : "transparent"};
  color: ${(props) =>
    props.$active ? props.theme.colors.accent : props.theme.colors.secondary};
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};

  ${mediaMobile`
    grid-template-columns: 1fr;
    max-height: 260px;
  `}
`;

const SelectedCount = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  margin-left: auto;
`;

const LoadingText = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`;

const ErrorText = styled.p`
  color: #d93025;
  font-size: 14px;
  padding: 16px;
`;

const RetryButton = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`;

const SectionSpacer = styled.div`
  margin-top: 32px;

  ${mediaMobile`
    margin-top: 24px;
  `}
`;

interface Props {
  studioId: string;
  selectedInstructors: Optional<string[]>;
  setSelectedInstructors: (ids: Optional<string[]>) => void;
  selectedDisciplines: Optional<string[]>;
  setSelectedDisciplines: (ids: Optional<string[]>) => void;
}

export const StepFilters = ({
  studioId,
  selectedInstructors,
  setSelectedInstructors,
  selectedDisciplines,
  setSelectedDisciplines,
}: Props) => {
  const instructorsQuery = useGetInstructorsQuery(studioId);
  const disciplinesQuery = useGetDisciplinesQuery(studioId);

  // Reconcile stale IDs (e.g. a saved instructor who left the studio) against
  // the loaded list once per mount. Uses a ref so user edits don't re-trigger it.
  const initialInstructors = useRef(selectedInstructors);
  const initialDisciplines = useRef(selectedDisciplines);

  useEffect(() => {
    const initial = initialInstructors.current;
    if (!instructorsQuery.currentData || !isNotEmpty(initial)) return;
    const valid = new Set(instructorsQuery.currentData.map((i) => i.id));
    const filtered = initial.filter((id) => valid.has(id));
    if (filtered.length < initial.length) {
      setSelectedInstructors(filtered);
      initialInstructors.current = filtered;
    }
  }, [instructorsQuery.currentData, setSelectedInstructors]);

  useEffect(() => {
    const initial = initialDisciplines.current;
    if (!disciplinesQuery.currentData || !isNotEmpty(initial)) return;
    const valid = new Set(disciplinesQuery.currentData.map((d) => String(d.id)));
    const filtered = initial.filter((id) => valid.has(String(id)));
    if (filtered.length < initial.length) {
      setSelectedDisciplines(filtered);
      initialDisciplines.current = filtered;
    }
  }, [disciplinesQuery.currentData, setSelectedDisciplines]);

  const toggleInstructor = (id: string) => {
    if (!isNotEmpty(selectedInstructors)) return;
    const has = selectedInstructors.includes(id);
    setSelectedInstructors(
      has
        ? selectedInstructors.filter((i) => i !== id)
        : [...selectedInstructors, id]
    );
  };

  const toggleDiscipline = (id: string) => {
    if (!isNotEmpty(selectedDisciplines)) return;
    const has = selectedDisciplines.includes(id);
    setSelectedDisciplines(
      has
        ? selectedDisciplines.filter((d) => d !== id)
        : [...selectedDisciplines, id]
    );
  };

  const isFilteringInstructors = isNotEmpty(selectedInstructors);
  const isFilteringDisciplines = isNotEmpty(selectedDisciplines);

  return (
    <div>
      <Section>
        <Legend>Instructors</Legend>
        <Description>
          Filter by specific instructors or get alerts for all of them.
        </Description>
        <ToggleRow>
          <ToggleButton
            type="button"
            $active={!isFilteringInstructors}
            onClick={() => setSelectedInstructors(null)}
          >
            Any instructor
          </ToggleButton>
          <ToggleButton
            type="button"
            $active={isFilteringInstructors}
            onClick={() => {
              if (!isFilteringInstructors) setSelectedInstructors([]);
            }}
          >
            Specific instructors
          </ToggleButton>
          {isFilteringInstructors && selectedInstructors.length > 0 && (
            <SelectedCount>{selectedInstructors.length} selected</SelectedCount>
          )}
        </ToggleRow>

        {isFilteringInstructors && (
          <InstructorsList
            query={instructorsQuery}
            selectedIds={selectedInstructors}
            onToggle={toggleInstructor}
          />
        )}
      </Section>

      <SectionSpacer />

      <Section>
        <Legend>Disciplines</Legend>
        <Description>
          Filter by class type or get alerts for everything.
        </Description>
        <ToggleRow>
          <ToggleButton
            type="button"
            $active={!isFilteringDisciplines}
            onClick={() => setSelectedDisciplines(null)}
          >
            Any discipline
          </ToggleButton>
          <ToggleButton
            type="button"
            $active={isFilteringDisciplines}
            onClick={() => {
              if (!isFilteringDisciplines) setSelectedDisciplines([]);
            }}
          >
            Specific disciplines
          </ToggleButton>
          {isFilteringDisciplines && selectedDisciplines.length > 0 && (
            <SelectedCount>{selectedDisciplines.length} selected</SelectedCount>
          )}
        </ToggleRow>

        {isFilteringDisciplines && (
          <DisciplinesList
            query={disciplinesQuery}
            selectedIds={selectedDisciplines}
            onToggle={toggleDiscipline}
          />
        )}
      </Section>
    </div>
  );
};

// --- Sub-components ---

interface InstructorsListProps {
  query: ReturnType<typeof useGetInstructorsQuery>;
  selectedIds: string[];
  onToggle: (id: string) => void;
}

const InstructorsList = ({
  query,
  selectedIds,
  onToggle,
}: InstructorsListProps) => {
  if (query.isLoading) {
    return <LoadingText>Loading instructors…</LoadingText>;
  }
  if (query.error) {
    return (
      <ErrorText>
        Couldn't load instructors.{" "}
        <RetryButton type="button" onClick={() => query.refetch()}>
          Try again
        </RetryButton>
      </ErrorText>
    );
  }
  if (!query.currentData || query.currentData.length === 0) {
    return <LoadingText>No instructors found for this studio.</LoadingText>;
  }
  return (
    <Grid role="group" aria-label="Instructors">
      {query.currentData.map((instructor: Instructor) => (
        <CheckOption
          key={instructor.id}
          value={instructor.id}
          checked={selectedIds.includes(instructor.id)}
          onChange={() => onToggle(instructor.id)}
          label={instructor.name}
          icon={<InstructorIcon instructor={instructor} size={28} />}
        />
      ))}
    </Grid>
  );
};

interface DisciplinesListProps {
  query: ReturnType<typeof useGetDisciplinesQuery>;
  selectedIds: string[];
  onToggle: (id: string) => void;
}

const DisciplinesList = ({
  query,
  selectedIds,
  onToggle,
}: DisciplinesListProps) => {
  if (query.isLoading) {
    return <LoadingText>Loading disciplines…</LoadingText>;
  }
  if (query.error) {
    return (
      <ErrorText>
        Couldn't load disciplines.{" "}
        <RetryButton type="button" onClick={() => query.refetch()}>
          Try again
        </RetryButton>
      </ErrorText>
    );
  }
  if (!query.currentData || query.currentData.length === 0) {
    return <LoadingText>No disciplines found for this studio.</LoadingText>;
  }
  return (
    <Grid role="group" aria-label="Disciplines">
      {query.currentData.map((discipline: Discipline) => (
        <CheckOption
          key={discipline.id}
          value={discipline.id}
          checked={selectedIds.includes(discipline.id)}
          onChange={() => onToggle(discipline.id)}
          label={discipline.name}
          icon={<DisciplineIcon discipline={discipline} size={24} />}
        />
      ))}
    </Grid>
  );
};
