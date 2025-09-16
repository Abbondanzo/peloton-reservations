import styled from "styled-components";
import { DisciplineIcon } from "../../../class-list/components/DisciplineIcon";
import { selectStudioId } from "../../../class-list/selectors/selectStudioId";
import { useGetDisciplinesQuery } from "../../../class-list/services/pelotonApi";
import type { Discipline } from "../../../class-list/types/Discipline";
import { useAppSelector } from "../../../store/hooks/useStore";
import { Card } from "../../../theme/components/Card";
import { List } from "../../../theme/components/List";
import { ListItem } from "../../../theme/components/ListItem";
import { isEmpty, isNotEmpty } from "../../../utils/optional";

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
  const studioId = useAppSelector(selectStudioId);
  const { currentData, isLoading, error } = useGetDisciplinesQuery(studioId);
  const disabled = isEmpty(selectedDisciplines);

  if (!currentData || isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! <code>{JSON.stringify(error)}</code>
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
      {currentData.map((discipline, index) => {
        const toggleDiscipline = () => {
          if (isNotEmpty(selectedDisciplines)) {
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
  selectedDisciplines: Optional<string[]>;
  setSelectedDisciplines: (disciplineIds: Optional<string[]>) => void;
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
          checked={isEmpty(selectedDisciplines)}
          readOnly
        />
        <label htmlFor="discipline-pick-all">
          Pick any available discipline
        </label>
      </RadioGroupItem>
      <RadioGroupItem
        onClick={() => {
          if (isEmpty(selectedDisciplines)) {
            setSelectedDisciplines([]);
          }
        }}
        style={{
          cursor: isEmpty(selectedDisciplines) ? "pointer" : "initial",
        }}
      >
        <input
          type="radio"
          id="discipline-pick-select"
          name="discipline-pick"
          checked={isNotEmpty(selectedDisciplines)}
          readOnly
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
