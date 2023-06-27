import styled from "styled-components";
import { Instructor } from "../../class-list/types/Instructor";
import { useAppSelector } from "../../store/hooks/useStore";
import { selectSortedInstructors } from "../selectors/selectSortedInstructors";
import { useInstructorFilters } from "../hooks/useInstructorFilters";

const InstructorRow = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const InstructorImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  color: #bbb;
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
    <InstructorRow onClick={onClick}>
      <input type="checkbox" value={instructor.id} checked={checked} readOnly />
      <InstructorImage
        src={instructor.imageUrl}
        alt={`Profile of ${instructor.name}`}
      />
      {instructor.name}
    </InstructorRow>
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
    <ul>
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
    </ul>
  );
};

export const InstructorsGroup = () => {
  return (
    <div>
      <h2>Instructors</h2>
      <InstructorsGroupContent />
    </div>
  );
};
