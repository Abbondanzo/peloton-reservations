import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.mainSurface};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 16px;
`;
