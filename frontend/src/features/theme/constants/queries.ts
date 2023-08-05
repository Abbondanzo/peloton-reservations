import { css } from "styled-components";

export const mediaMobile: typeof css = (...args: Parameters<typeof css>) => css`
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    ${css(...args)}
  }
`;

export const mediaTablet: typeof css = (...args: Parameters<typeof css>) => css`
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.tablet}px) {
    ${css(...args)}
  }
`;
