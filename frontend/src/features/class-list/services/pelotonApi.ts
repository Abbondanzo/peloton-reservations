import type { SerializedError } from "@reduxjs/toolkit";
import {
  type FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
  PELOTON_API_BASE,
  PELOTON_CORS_PROXY,
  buildEventsUrl,
  fetchAllPelotonPages,
  getPelotonHeaders,
} from "shared";
import type { RawClassResponse } from "shared";
import {
  mapClasses,
  mapDisciplines,
  mapInstructors,
} from "../operators/pelotonApiMapper";
import type { Class } from "../types/Class";
import type { Discipline } from "../types/Discipline";
import type { Instructor } from "../types/Instructor";

const FIELDS = [
  "id",
  "name",
  "max_occupancy",
  "occupancy",
  "attending_count",
  "starts_at",
  "ends_at",
  "waiting_count",
  "active_registration_status",
  "category.name",
  "venue",
  "customer_url",
  "description",
];

const EXPAND = [
  "instructors",
  "active_registration_status",
  "category",
  "offering_type",
  "offering_type.category",
  "venue",
  "suggested_booking_action",
];

export const pelotonApi = createApi({
  reducerPath: "pelotonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${PELOTON_CORS_PROXY}/${PELOTON_API_BASE}/`,
  }),
  endpoints: (builder) => ({
    getClasses: builder.query<Class[], string>({
      queryFn: async (studioId) => {
        try {
          const headers = getPelotonHeaders(studioId);
          const url = buildEventsUrl({
            fields: FIELDS,
            expand: EXPAND,
            corsProxy: true,
          });
          const results = await fetchAllPelotonPages(
            url,
            async (pageUrl) => {
              const response = await fetch(pageUrl, { headers });
              if (!response.ok) {
                throw new Error(`${response.status}: ${await response.text()}`);
              }
              return response.json() as Promise<RawClassResponse>;
            },
            true
          );
          return { data: mapClasses({ results } as RawClassResponse) };
        } catch (e) {
          return {
            error: {
              status: "FETCH_ERROR",
              error: String(e),
            } as FetchBaseQueryError,
          };
        }
      },
    }),
    getDisciplines: builder.query({
      query: (studioId: string) => {
        const queryParams = new URLSearchParams({
          sort: "name",
        });
        return {
          url: `offering_type_categories?${queryParams}`,
          method: "GET",
          headers: getPelotonHeaders(studioId),
        };
      },
      transformResponse: (response): Discipline[] => {
        return mapDisciplines(response);
      },
    }),
    getInstructors: builder.query({
      query: (studioId: string) => {
        const queryParams = new URLSearchParams({
          sort: "name",
        });
        return {
          url: `instructors?${queryParams}`,
          method: "GET",
          headers: getPelotonHeaders(studioId),
        };
      },
      transformResponse: (response): Instructor[] => {
        return mapInstructors(response);
      },
    }),
  }),
});

export const {
  useGetClassesQuery,
  useGetDisciplinesQuery,
  useGetInstructorsQuery,
} = pelotonApi;

export const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError
) => {
  if ("error" in error && typeof error.error === "string") {
    return error.error;
  }
  if ("message" in error && typeof error.message === "string") {
    return error.message;
  }
  return undefined;
};
