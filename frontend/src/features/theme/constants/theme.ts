import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  borderRadius: "8px",
  borderColor: "#d1d1d1",
  colors: {
    main: "#494f59",
    secondary: "#514e60",
    mainSurface: "#fff",
    secondarySurface: "#ededed",
    accent: "#cb3449",
  },
  widths: {
    tablet: 1024,
    mobile: 560,
  },
};

export const darkTheme: DefaultTheme = {
  borderRadius: "8px",
  borderColor: "#2e2f45",
  colors: {
    main: "#e2e4eb",
    secondary: "#9b98b0",
    mainSurface: "#1c1d2e",
    secondarySurface: "#13141f",
    accent: "#cb3449",
  },
  widths: {
    tablet: 1024,
    mobile: 560,
  },
};

export const theme = lightTheme;
