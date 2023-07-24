import styled from "styled-components";
import { InstructorIcon } from "../../../class-list/components/InstructorIcon";
import { Instructor } from "../../../class-list/types/Instructor";
import { selectSortedInstructors } from "../../../filters/selectors/selectSortedInstructors";
import { useAppSelector } from "../../../store/hooks/useStore";
import { Card } from "../../../theme/components/Card";
import { List } from "../../../theme/components/List";
import { ListItem } from "../../../theme/components/ListItem";

const InstructorImageWrapper = styled.div`
  margin: 0 8px;
`;

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

const InstructorsListPicker = ({
  selectedInstructors,
  setSelectedInstructors,
}: Props) => {
  const state = useAppSelector(selectSortedInstructors);
  const disabled = selectedInstructors === null;

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
      {state.instructors.map((instructor, index) => {
        const toggleInstructor = () => {
          if (selectedInstructors !== null) {
            const hasInstructor = selectedInstructors.includes(instructor.id);
            const newInstructors = hasInstructor
              ? selectedInstructors.filter((id) => id !== instructor.id)
              : [...selectedInstructors, instructor.id];
            setSelectedInstructors(newInstructors);
          }
        };
        return (
          <InstructorsGroupItem
            key={index}
            instructor={instructor}
            checked={(selectedInstructors || []).includes(instructor.id)}
            onClick={toggleInstructor}
          />
        );
      })}
    </List>
  );
};

interface Props {
  selectedInstructors: string[] | null;
  setSelectedInstructors: (instructorIds: string[] | null) => void;
}

export const InstructorsPicker = ({
  selectedInstructors,
  setSelectedInstructors,
}: Props) => {
  return (
    <RadioGroupWrapper>
      <RadioGroupItem
        onClick={() => {
          setSelectedInstructors(null);
        }}
        style={{ cursor: "pointer" }}
      >
        <input
          type="radio"
          id="instructor-pick-all"
          name="instructor-pick"
          checked={selectedInstructors === null}
        />
        <label htmlFor="instructor-pick-all">
          Pick any available instructor
        </label>
      </RadioGroupItem>
      <RadioGroupItem
        onClick={() => {
          if (selectedInstructors === null) {
            setSelectedInstructors([]);
          }
        }}
        style={{
          cursor: selectedInstructors === null ? "pointer" : "initial",
        }}
      >
        <input
          type="radio"
          id="instructor-pick-select"
          name="instructor-pick"
          checked={selectedInstructors !== null}
        />
        <label htmlFor="instructor-pick-select">
          Pick instructors from the list
        </label>
        <MarginTop>
          <InstructorsListPicker
            selectedInstructors={selectedInstructors}
            setSelectedInstructors={setSelectedInstructors}
          />
        </MarginTop>
      </RadioGroupItem>
    </RadioGroupWrapper>
  );
};
