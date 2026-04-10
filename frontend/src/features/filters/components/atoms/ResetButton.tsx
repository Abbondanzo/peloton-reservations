import styled from "styled-components";

export const ResetButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.colors.accent};
  font-size: 12px;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
