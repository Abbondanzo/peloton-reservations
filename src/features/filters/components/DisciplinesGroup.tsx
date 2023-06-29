import styled from "styled-components";
import { Discipline } from "../../class-list/types/Discipline";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { useDisciplineFilters } from "../hooks/useDisciplineFilters";
import { selectSortedDisciplines } from "../selectors/selectSortedDisciplines";
import { resetDisciplines } from "../slices/filtersSlice";
import { List } from "./atoms/List";
import { ListItem } from "./atoms/ListItem";
import { Padding } from "./atoms/Padding";
import { ResetButton } from "./atoms/ResetButton";
import { SectionTitle } from "./atoms/SectionTitle";
import { DisciplineIcon } from "../../class-list/components/DisciplineIcon";

const SectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  margin-right: 8px;
`;

const Label = styled.span`
  cursor: pointer;
  margin-left: 8px;
`;

interface DisciplinesGroupItemProps {
  discipline: Discipline;
  checked: boolean;
  onClick: () => void;
}

const DisciplinesGroupItem = ({
  discipline,
  checked,
  onClick,
}: DisciplinesGroupItemProps) => {
  return (
    <ListItem onClick={onClick}>
      <Input
        id={`discipline-${discipline.id}`}
        type="checkbox"
        value={discipline.id}
        checked={checked}
        readOnly
      />
      <DisciplineIcon discipline={discipline} />
      <Label onChange={onClick}>{discipline.name}</Label>
    </ListItem>
  );
};

const DisciplinesGroupContent = () => {
  const state = useAppSelector(selectSortedDisciplines);
  const { selectedDisciplines, toggleDiscipline } = useDisciplineFilters();

  if (state.status === "loading") {
    return <div>Loading...</div>;
  }

  if (state.status === "failed") {
    return (
      <div>
        Error! <code>{state.error.message}</code>
      </div>
    );
  }

  return (
    <List>
      {state.disciplines.map((discipline, index) => {
        return (
          <DisciplinesGroupItem
            key={index}
            discipline={discipline}
            checked={selectedDisciplines.includes(discipline.id)}
            onClick={() => toggleDiscipline(discipline.id)}
          />
        );
      })}
    </List>
  );
};

export const DisciplinesGroup = () => {
  const hasSelectedInstructors = useAppSelector(
    (state) => state.filters.selectedDisciplines.length > 0
  );
  const dispatch = useAppDispatch();

  return (
    <Padding>
      <SectionRow>
        <SectionTitle>Disciplines</SectionTitle>
        {hasSelectedInstructors && (
          <ResetButton onClick={() => dispatch(resetDisciplines())}>
            Reset
          </ResetButton>
        )}
      </SectionRow>
      <DisciplinesGroupContent />
    </Padding>
  );
};
