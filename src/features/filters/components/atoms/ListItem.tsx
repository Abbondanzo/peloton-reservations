import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  user-select: none;
  min-height: 32px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
