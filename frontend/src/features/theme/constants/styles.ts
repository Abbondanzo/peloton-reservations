import { css } from "styled-components";

export const border = css`
  border-color: ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`;

export const hover = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const focus = css`
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
