import styled from "styled-components";
import { Class } from "../types/Class";
import { ClassListItem } from "./ClassListItem";

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 8px;
`;

interface Props {
  classes: Class[];
}

export const ClassList = ({ classes }: Props) => {
  if (classes.length === 0) {
    return <p>No classes!</p>;
  }

  return (
    <Wrapper>
      {classes.map((clazz, index) => {
        return <ClassListItem key={index} clazz={clazz} />;
      })}
    </Wrapper>
  );
};
