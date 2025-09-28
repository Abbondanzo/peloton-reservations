import styled from "styled-components";
import { InstructorIcon } from "../../../class-list/components/InstructorIcon";
import { selectStudioId } from "../../../class-list/selectors/selectStudioId";
import { useGetInstructorsQuery } from "../../../class-list/services/pelotonApi";
import type { Instructor } from "../../../class-list/types/Instructor";
import { useAppSelector } from "../../../store/hooks/useStore";
import { Card } from "../../../theme/components/Card";
import { List } from "../../../theme/components/List";
import { ListItem } from "../../../theme/components/ListItem";
import { isEmpty, isNotEmpty } from "../../../utils/optional";

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
  const studioId = useAppSelector(selectStudioId);
  const { currentData, isLoading, error } = useGetInstructorsQuery(studioId);
  const disabled = isEmpty(selectedInstructors);

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
      {currentData.map((instructor, index) => {
        const toggleInstructor = () => {
          if (isNotEmpty(selectedInstructors)) {
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
  selectedInstructors: Optional<string[]>;
  setSelectedInstructors: (instructorIds: Optional<string[]>) => void;
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
          checked={isEmpty(selectedInstructors)}
          readOnly
        />
        <label htmlFor="instructor-pick-all">
          Pick any available instructor
        </label>
      </RadioGroupItem>
      <RadioGroupItem
        onClick={() => {
          if (isEmpty(selectedInstructors)) {
            setSelectedInstructors([]);
          }
        }}
        style={{
          cursor: isEmpty(selectedInstructors) ? "pointer" : "initial",
        }}
      >
        <input
          type="radio"
          id="instructor-pick-select"
          name="instructor-pick"
          checked={isNotEmpty(selectedInstructors)}
          readOnly
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
