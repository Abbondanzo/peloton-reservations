import type { SerializedError } from "@reduxjs/toolkit";
import {
  type FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import type { RawClassResponse } from "shared";
import {
  mapClasses,
  mapDisciplines,
  mapInstructors,
} from "../operators/pelotonApiMapper";
import type { Class } from "../types/Class";
import type { Discipline } from "../types/Discipline";
import type { Instructor } from "../types/Instructor";

const CORS_BYPASS = "https://cors.abbondanzo.workers.dev";

const getHeaders = (studioId: string) => ({
  "Teamup-Request-Mode": "customer",
  "Teamup-Provider-ID": studioId,
});

const rebaseNextUrl = (next: string): string => {
  const { search } = new URL(next);
  return `${CORS_BYPASS}/https://schedule.studio.onepeloton.com/api/v2/events${search}`;
};

const buildClassesUrl = () => {
  const fields = [
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
  const expandProperties = [
    "instructors",
    "active_registration_status",
    "category",
    "offering_type",
    "offering_type.category",
    "venue",
    "suggested_booking_action",
  ];
  const queryParams = new URLSearchParams({
    fields: fields.join(","),
    expand: expandProperties.join(","),
    local_starts_at_gte: new Date().toISOString().replace("Z", ""),
    page_size: "500",
    sort: "start",
  });
  return `${CORS_BYPASS}/https://schedule.studio.onepeloton.com/api/v2/events?${queryParams}`;
};

export const pelotonApi = createApi({
  reducerPath: "pelotonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${CORS_BYPASS}/https://schedule.studio.onepeloton.com/api/v2/`,
  }),
  endpoints: (builder) => ({
    getClasses: builder.query<Class[], string>({
      queryFn: async (studioId) => {
        try {
          const headers = getHeaders(studioId);
          const response = await fetch(buildClassesUrl(), { headers });
          if (!response.ok) {
            return {
              error: {
                status: response.status,
                data: await response.text(),
              } as FetchBaseQueryError,
            };
          }
          const data = (await response.json()) as RawClassResponse;
          if (!data.next) {
            return { data: mapClasses(data) };
          }
          // Only paginate when the schedule grows beyond a single page
          const allClasses = mapClasses(data);
          let nextUrl: string | null = rebaseNextUrl(data.next);
          while (nextUrl) {
            const pageResponse = await fetch(nextUrl, { headers });
            if (!pageResponse.ok) {
              return {
                error: {
                  status: pageResponse.status,
                  data: await pageResponse.text(),
                } as FetchBaseQueryError,
              };
            }
            const pageData = (await pageResponse.json()) as RawClassResponse;
            allClasses.push(...mapClasses(pageData));
            nextUrl = pageData.next ? rebaseNextUrl(pageData.next) : null;
          }
          return { data: allClasses };
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
          headers: getHeaders(studioId),
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
          headers: getHeaders(studioId),
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
