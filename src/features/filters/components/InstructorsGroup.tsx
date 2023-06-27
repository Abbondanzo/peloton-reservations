import styled from "styled-components";
import { Instructor } from "../../class-list/types/Instructor";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { useInstructorFilters } from "../hooks/useInstructorFilters";
import { selectSortedInstructors } from "../selectors/selectSortedInstructors";
import { List } from "./atoms/List";
import { ListItem } from "./atoms/ListItem";
import { SectionTitle } from "./atoms/SectionTitle";
import { Padding } from "./atoms/Padding";
import { resetInstructors } from "../slices/filtersSlice";

const InstructorImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  color: #bbb;
`;

const SectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ResetButton = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme.colors.accent};
  font-size: 12px;
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
      <InstructorImage
        src={instructor.imageUrl}
        alt={`Profile of ${instructor.name}`}
      />
      {instructor.name}
    </ListItem>
  );
};

const InstructorsGroupContent = () => {
  const state = useAppSelector(selectSortedInstructors);
  const { selectedInstructors, toggleInstructor } = useInstructorFilters();

  if (state.status === "loading") {
    return <div>Loading</div>;
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
