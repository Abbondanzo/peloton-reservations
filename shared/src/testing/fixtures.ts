import type { Alert, TimeRange } from "../alerts";
import type { RawClass, RawInstructor } from "../classApi";
import { DEFAULT_STUDIO_ID } from "../studios";

export const buildInstructor = (
  overrides: Partial<RawInstructor> = {}
): RawInstructor => ({
  id: 1,
  object: "instructor",
  name: "Alex Toussaint",
  picture_url: "https://example.com/alex.png",
  description: "",
  staff: 1,
  ...overrides,
});

export const buildRawClass = (overrides: Partial<RawClass> = {}): RawClass => ({
  id: 100,
  name: "45 min Club Bangers Ride",
  // Wednesday 09:00 in America/New_York
  starts_at: "2026-04-29T09:00:00-04:00",
  ends_at: "2026-04-29T09:45:00-04:00",
  max_occupancy: 60,
  occupancy: 10,
  waiting_count: 0,
  waitlist_max_override: 0,
  is_appointment: false,
  is_full: false,
  customer_url: "https://studio.onepeloton.com/classes/100",
  description: null,
  venue: {
    id: 1,
    name: "Peloton Studios New York",
    timezone: "America/New_York",
    address: "441 9th Ave",
    is_online: false,
  },
  offering_type: {
    background_color: "#000000",
    category: { id: 5, name: "Cycling" },
    max_allowed_age: null,
    min_allowed_age: 14,
    schedule_type: "studio",
    waitlist_max: 10,
  },
  instructors: [buildInstructor()],
  active_registration_status: {
    current_status: null,
    restriction_codes: [],
    suggested_action: null,
    registrations_open_at: null,
    registrations_close_at: null,
    late_cancels_after: null,
  },
  category: null,
  ...overrides,
});

const ALL_DAY: TimeRange = { startMin: 0, endMin: 24 * 60 };

export const buildAlert = (overrides: Partial<Alert> = {}): Alert => ({
  id: "alert-1",
  created: 1700000000000,
  instructors: null,
  disciplines: null,
  maxStatus: "free",
  timeRanges: new Array(7).fill(ALL_DAY),
  studioId: DEFAULT_STUDIO_ID,
  ...overrides,
});
