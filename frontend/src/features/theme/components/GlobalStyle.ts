import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    color-scheme: ${(p) => p.theme.mode};
    background: linear-gradient(
        to bottom,
        #181a2f 0,
        #181a2f calc(60px + env(safe-area-inset-top, 0px)),
        ${(p) => p.theme.colors.secondarySurface} calc(60px + env(safe-area-inset-top, 0px))
      )
      fixed;
  }

  body {
    background-color: ${(p) => p.theme.colors.secondarySurface};
    color: ${(p) => p.theme.colors.main};
  }

  input, select, textarea {
    accent-color: ${(p) => p.theme.colors.accent};
  }
`;
