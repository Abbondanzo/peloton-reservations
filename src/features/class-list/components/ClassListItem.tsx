import styled from "styled-components";
import { Class } from "../types/Class";

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 4px;
`;

interface Props {
  clazz: Class;
}

export const ClassListItem = ({ clazz }: Props) => {
  return <Wrapper>{clazz.name}</Wrapper>;
};
