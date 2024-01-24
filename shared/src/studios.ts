export type Location = "New York" | "London";

export interface Studio {
  location: Location;
  timezone: string;
}

export const STUDIOS: { [key: string]: Studio } = {
  "7248695": {
    location: "New York",
    timezone: "America/New_York",
  },
  "7248663": {
    location: "London",
    timezone: "Europe/London",
  },
};

export const DEFAULT_STUDIO_ID = "7248695";
