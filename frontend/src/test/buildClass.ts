import type { Class } from "../features/class-list/types/Class";

/** A mapped, UI-facing class — the shape selectors and list components consume. */
export const buildClass = (overrides: Partial<Class> = {}): Class => ({
  id: "100",
  name: "45 min Club Bangers Ride",
  start: "2026-04-29T09:00:00-04:00",
  duration: 2700,
  customerUrl: "https://studio.onepeloton.com/classes/100",
  status: "free",
  instructor: {
    id: "1",
    name: "Alex Toussaint",
    imageUrl: "https://example.com/alex.png",
    display: true,
  },
  discipline: {
    id: "5",
    name: "Cycling",
    iconUrl: "https://example.com/cycling.png",
  },
  ...overrides,
});
