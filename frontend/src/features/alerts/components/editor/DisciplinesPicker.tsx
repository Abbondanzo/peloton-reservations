import styled from "styled-components";
import { DisciplineIcon } from "../../../class-list/components/DisciplineIcon";
import { Discipline } from "../../../class-list/types/Discipline";
import { selectSortedDisciplines } from "../../../filters/selectors/selectSortedDisciplines";
import { useAppSelector } from "../../../store/hooks/useStore";
import { Card } from "../../../theme/components/Card";
import { List } from "../../../theme/components/List";
import { ListItem } from "../../../theme/components/ListItem";

const RadioGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 1em;
  row-gap: 1em;
`;

const RadioGroupItem = styled(Card)`
  max-height: 200px;
  overflow: auto;
`;

const MarginTop = styled.div`
  margin-top: 8px;
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

const DisciplinesListPicker = ({
  selectedDisciplines,
  setSelectedDisciplines,
}: Props) => {
  const state = useAppSelector(selectSortedDisciplines);
  const disabled = selectedDisciplines === null;

  if (!state || state.status === "loading") {
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
    <List
      style={{
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? "none" : "all",
      }}
    >
      {state.disciplines.map((discipline, index) => {
        const toggleDiscipline = () => {
          if (selectedDisciplines !== null) {
            const hasDiscipline = selectedDisciplines.includes(discipline.id);
            const newDisciplines = hasDiscipline
              ? selectedDisciplines.filter((id) => id !== discipline.id)
              : [...selectedDisciplines, discipline.id];
            setSelectedDisciplines(newDisciplines);
          }
        };
        return (
          <DisciplinesGroupItem
            key={index}
            discipline={discipline}
            checked={(selectedDisciplines || []).includes(discipline.id)}
            onClick={toggleDiscipline}
          />
        );
      })}
    </List>
  );
};

interface Props {
  selectedDisciplines: string[] | null;
  setSelectedDisciplines: (disciplineIds: string[] | null) => void;
}

export const DisciplinesPicker = ({
  selectedDisciplines,
  setSelectedDisciplines,
}: Props) => {
  return (
    <RadioGroupWrapper>
      <RadioGroupItem
        onClick={() => {
          setSelectedDisciplines(null);
        }}
        style={{ cursor: "pointer" }}
      >
        <input
          type="radio"
          id="discipline-pick-all"
          name="discipline-pick"
          checked={selectedDisciplines === null}
        />
        <label htmlFor="discipline-pick-all">
          Pick any available discipline
        </label>
      </RadioGroupItem>
      <RadioGroupItem
        onClick={() => {
          if (selectedDisciplines === null) {
            setSelectedDisciplines([]);
          }
        }}
        style={{
          cursor: selectedDisciplines === null ? "pointer" : "initial",
        }}
      >
        <input
          type="radio"
          id="discipline-pick-select"
          name="discipline-pick"
          checked={selectedDisciplines !== null}
        />
        <label htmlFor="discipline-pick-select">
          Pick disciplines from the list
        </label>
        <MarginTop>
          <DisciplinesListPicker
            selectedDisciplines={selectedDisciplines}
            setSelectedDisciplines={setSelectedDisciplines}
          />
        </MarginTop>
      </RadioGroupItem>
    </RadioGroupWrapper>
  );
};
