import styled from "styled-components";
import { Class } from "../types/Class";
import { ClassListItem } from "./ClassListItem";
import { useAppSelector } from "../../store/hooks/useStore";
import { selectFilteredClasses } from "../selectors/selectFilteredClasses";
import { Card } from "./atoms/Card";

const Wrapper = styled.div`
  & > *:not(:last-child) {
    display: block;
    margin-bottom: 8px;
  }
`;

interface Props {
  classes: Class[];
}

export const ClassList = ({ classes }: Props) => {
  const filteredClasses = useAppSelector((state) =>
    selectFilteredClasses(state, classes)
  );

  if (filteredClasses.length === 0) {
    return (
      <Card>
        <p>No classes!</p>
      </Card>
    );
  }

  return (
    <Wrapper>
      {filteredClasses.map((clazz, index) => {
        return <ClassListItem key={index} clazz={clazz} />;
      })}
    </Wrapper>
  );
};
