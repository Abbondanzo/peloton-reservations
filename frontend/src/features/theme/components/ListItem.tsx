import styled from "styled-components";
import { hover } from "../constants/styles";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  user-select: none;
  min-height: 32px;

  ${hover}
`;
