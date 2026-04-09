interface RawDiscipline {
  id: string;
  name: string;
}

export interface RawInstructor {
  id: string;
  name: string;
}

export interface RawClass {
  id: string;
  name: string | null;
  /** ISO timestamp */
  starts_at: string;
  /** ISO timestamp */
  ends_at: string;
  max_occupancy: number;
  occupancy: number;
  waiting_count: number;
  customer_url: string;
  instructors: RawInstructor[];
  offering_type: {
    category: RawDiscipline;
  };
}

export interface RawClassResponse {
  results: RawClass[];
}
