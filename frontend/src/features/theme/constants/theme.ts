import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  mode: "light",
  borderRadius: "8px",
  borderColor: "#d1d1d1",
  colors: {
    main: "#494f59",
    secondary: "#514e60",
    mainSurface: "#fff",
    secondarySurface: "#ededed",
    accent: "#cb3449",
    error: "#d93025",
    hoverSurface: "rgba(0, 0, 0, 0.05)",
    status: {
      free: { bg: "#e8f5e9", text: "#2e7d32" },
      waitlist: { bg: "#fff3e0", text: "#e65100" },
      full: { text: "#9e9e9e" },
    },
  },
  widths: {
    tablet: 1024,
    mobile: 560,
  },
};

export const darkTheme: DefaultTheme = {
  mode: "dark",
  borderRadius: "8px",
  borderColor: "#2e2f45",
  colors: {
    main: "#e2e4eb",
    secondary: "#9b98b0",
    mainSurface: "#1c1d2e",
    secondarySurface: "#13141f",
    accent: "#cb3449",
    error: "#ef5350",
    hoverSurface: "rgba(255, 255, 255, 0.08)",
    status: {
      free: { bg: "rgba(46, 125, 50, 0.15)", text: "#81c784" },
      waitlist: { bg: "rgba(230, 81, 0, 0.15)", text: "#ffb74d" },
      full: { text: "#757575" },
    },
  },
  widths: {
    tablet: 1024,
    mobile: 560,
  },
};

export const theme = lightTheme;
