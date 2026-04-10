import { DisciplineIcon } from "../../class-list/components/DisciplineIcon";
import { selectStudioId } from "../../class-list/selectors/selectStudioId";
import { useGetDisciplinesQuery } from "../../class-list/services/pelotonApi";
import type { Discipline } from "../../class-list/types/Discipline";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { useDisciplineFilters } from "../hooks/useDisciplineFilters";
import { resetDisciplines } from "../slices/filtersSlice";
import {
  FilterCheckBox,
  FilterItem,
  FilterItemList,
  FilterItemName,
  FilterStateText,
} from "./atoms/FilterCheckList";
import { FilterGroupHeader } from "./atoms/FilterGroupHeader";

interface DisciplinesGroupItemProps {
  discipline: Discipline;
  checked: boolean;
  onClick: () => void;
}

const DisciplinesGroupItem = ({
  discipline,
  checked,
  onClick,
}: DisciplinesGroupItemProps) => (
  <FilterItem
    $checked={checked}
    onClick={onClick}
    role="checkbox"
    aria-checked={checked}
  >
    <FilterCheckBox $checked={checked} />
    <DisciplineIcon discipline={discipline} size={24} />
    <FilterItemName>{discipline.name}</FilterItemName>
  </FilterItem>
);

const DisciplinesGroupContent = () => {
  const studioId = useAppSelector(selectStudioId);
  const { currentData, isLoading, error } = useGetDisciplinesQuery(studioId);
  const { selectedDisciplines, toggleDiscipline } = useDisciplineFilters();

  if (error && !isLoading) {
    return <FilterStateText>Failed to load disciplines</FilterStateText>;
  }

  if (!currentData || isLoading) {
    return <FilterStateText>Loading…</FilterStateText>;
  }

  return (
    <FilterItemList>
      {currentData.map((discipline, index) => (
        <DisciplinesGroupItem
          key={index}
          discipline={discipline}
          checked={selectedDisciplines.includes(discipline.id)}
          onClick={() => toggleDiscipline(discipline.id)}
        />
      ))}
    </FilterItemList>
  );
};

export const DisciplinesGroup = () => {
  const hasSelectedDisciplines = useAppSelector(
    (state) => state.filters.selectedDisciplines.length > 0
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <FilterGroupHeader
        label="Disciplines"
        onReset={
          hasSelectedDisciplines
            ? () => dispatch(resetDisciplines())
            : undefined
        }
      />
      <DisciplinesGroupContent />
    </div>
  );
};
