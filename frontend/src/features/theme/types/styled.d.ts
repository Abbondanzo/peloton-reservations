// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    borderRadius: string;
    borderColor: string;

    colors: {
      main: string;
      secondary: string;
      mainSurface: string;
      secondarySurface: string;
      accent: string;
      error: string;
      hoverSurface: string;
      status: {
        free: { bg: string; text: string };
        waitlist: { bg: string; text: string };
        full: { text: string };
      };
    };

    widths: {
      tablet: number;
      mobile: number;
    };
  }
}
