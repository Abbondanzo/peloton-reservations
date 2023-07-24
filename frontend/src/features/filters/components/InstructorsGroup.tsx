import styled from "styled-components";
import { InstructorIcon } from "../../class-list/components/InstructorIcon";
import { Instructor } from "../../class-list/types/Instructor";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { List } from "../../theme/components/List";
import { ListItem } from "../../theme/components/ListItem";
import { Padding } from "../../theme/components/Padding";
import { SectionTitle } from "../../theme/components/SectionTitle";
import { useInstructorFilters } from "../hooks/useInstructorFilters";
import { selectSortedInstructors } from "../selectors/selectSortedInstructors";
import { resetInstructors } from "../slices/filtersSlice";
import { ResetButton } from "./atoms/ResetButton";

const SectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InstructorImageWrapper = styled.div`
  margin: 0 8px;
`;

interface InstructorsGroupItemProps {
  instructor: Instructor;
  checked: boolean;
  onClick: () => void;
}

const InstructorsGroupItem = ({
  instructor,
  checked,
  onClick,
}: InstructorsGroupItemProps) => {
  return (
    <ListItem onClick={onClick}>
      <input type="checkbox" value={instructor.id} checked={checked} readOnly />
      <InstructorImageWrapper>
        <InstructorIcon instructor={instructor} />
      </InstructorImageWrapper>
      {instructor.name}
    </ListItem>
  );
};

const InstructorsGroupContent = () => {
  const state = useAppSelector(selectSortedInstructors);
  const { selectedInstructors, toggleInstructor } = useInstructorFilters();

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
    <List>
      {state.instructors.map((instructor, index) => {
        return (
          <InstructorsGroupItem
            key={index}
            instructor={instructor}
            checked={selectedInstructors.includes(instructor.id)}
            onClick={() => toggleInstructor(instructor.id)}
          />
        );
      })}
    </List>
  );
};

export const InstructorsGroup = () => {
  const hasSelectedInstructors = useAppSelector(
    (state) => state.filters.selectedInstructors.length > 0
  );
  const dispatch = useAppDispatch();

  return (
    <Padding>
      <SectionRow>
        <SectionTitle>Instructors</SectionTitle>
        {hasSelectedInstructors && (
          <ResetButton onClick={() => dispatch(resetInstructors())}>
            Reset
          </ResetButton>
        )}
      </SectionRow>
      <InstructorsGroupContent />
    </Padding>
  );
};
