// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    borderColor: string;

    colors: {
      main: string;
      secondary: string;
      mainSurface: string;
      secondarySurface: string;
      accent: string;
    };

    widths: {
      tablet: number;
      mobile: number;
    };
  }
}
