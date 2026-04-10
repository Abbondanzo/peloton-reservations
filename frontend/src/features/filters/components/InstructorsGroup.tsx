import { InstructorIcon } from "../../class-list/components/InstructorIcon";
import { selectStudioId } from "../../class-list/selectors/selectStudioId";
import { useGetInstructorsQuery } from "../../class-list/services/pelotonApi";
import type { Instructor } from "../../class-list/types/Instructor";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { useInstructorFilters } from "../hooks/useInstructorFilters";
import { resetInstructors } from "../slices/filtersSlice";
import {
  FilterCheckBox,
  FilterItem,
  FilterItemList,
  FilterItemName,
  FilterStateText,
} from "./atoms/FilterCheckList";
import { FilterGroupHeader } from "./atoms/FilterGroupHeader";

interface InstructorsGroupItemProps {
  instructor: Instructor;
  checked: boolean;
  onClick: () => void;
}

const InstructorsGroupItem = ({
  instructor,
  checked,
  onClick,
}: InstructorsGroupItemProps) => (
  <FilterItem
    $checked={checked}
    onClick={onClick}
    role="checkbox"
    aria-checked={checked}
  >
    <FilterCheckBox $checked={checked} />
    <InstructorIcon instructor={instructor} size={28} />
    <FilterItemName>{instructor.name}</FilterItemName>
  </FilterItem>
);

const InstructorsGroupContent = () => {
  const studioId = useAppSelector(selectStudioId);
  const { currentData, isLoading, error } = useGetInstructorsQuery(studioId);
  const { selectedInstructors, toggleInstructor } = useInstructorFilters();

  if (error && !isLoading) {
    return <FilterStateText>Failed to load instructors</FilterStateText>;
  }

  if (!currentData || isLoading) {
    return <FilterStateText>Loading…</FilterStateText>;
  }

  return (
    <FilterItemList>
      {currentData.map((instructor, index) => (
        <InstructorsGroupItem
          key={index}
          instructor={instructor}
          checked={selectedInstructors.includes(instructor.id)}
          onClick={() => toggleInstructor(instructor.id)}
        />
      ))}
    </FilterItemList>
  );
};

export const InstructorsGroup = () => {
  const hasSelectedInstructors = useAppSelector(
    (state) => state.filters.selectedInstructors.length > 0
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <FilterGroupHeader
        label="Instructors"
        onReset={
          hasSelectedInstructors
            ? () => dispatch(resetInstructors())
            : undefined
        }
      />
      <InstructorsGroupContent />
    </div>
  );
};
