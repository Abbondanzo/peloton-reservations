export interface RawDiscipline {
  id?: number;
  name: string;
}

export interface RawInstructor {
  id: number;
  object: string;
  name: string;
  picture_url: string;
  description: string;
  staff: number;
}

interface RawVenue {
  id: number;
  name: string;
  timezone: string;
  address: string;
  is_online: boolean;
}

interface RawOfferingType {
  background_color: string;
  category: RawDiscipline;
  max_allowed_age: number | null;
  min_allowed_age: number;
  schedule_type: string;
  waitlist_max: number;
}

interface RawActiveRegistrationStatus {
  current_status: string | null;
  restriction_codes: string[];
  suggested_action: string | null;
  registrations_open_at: string | null;
  registrations_close_at: string | null;
  late_cancels_after: string | null;
}

export interface RawClass {
  id: number;
  name: string | null;
  /** ISO timestamp with UTC offset (e.g. "2026-04-30T06:30:00-04:00") */
  starts_at: string;
  /** ISO timestamp with UTC offset */
  ends_at: string;
  max_occupancy: number;
  occupancy: number;
  waiting_count: number;
  waitlist_max_override: number;
  is_appointment: boolean;
  is_full: boolean;
  customer_url: string;
  description: string | null;
  venue: RawVenue;
  offering_type: RawOfferingType;
  instructors: RawInstructor[];
  active_registration_status: RawActiveRegistrationStatus;
  category: unknown | null;
}

export interface RawClassResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: RawClass[];
}
