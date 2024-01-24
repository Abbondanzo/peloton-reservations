import { SerializedError } from "@reduxjs/toolkit";
import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
  mapClasses,
  mapDisciplines,
  mapInstructors,
} from "../operators/pelotonApiMapper";
import { Class } from "../types/Class";
import { Discipline } from "../types/Discipline";
import { Instructor } from "../types/Instructor";

const CORS_BYPASS = "https://cors.abbondanzo.workers.dev";

const getHeaders = (studioId: string) => ({
  "Teamup-Request-Mode": "customer",
  "Teamup-Provider-ID": studioId,
});

export const pelotonApi = createApi({
  reducerPath: "pelotonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${CORS_BYPASS}/https://schedule.studio.onepeloton.com/api/v2/`,
  }),
  endpoints: (builder) => ({
    getClasses: builder.query({
      query: (studioId: string) => {
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
          page_size: "100",
          sort: "start",
        });
        return {
          url: `events?${queryParams}`,
          method: "GET",
          headers: getHeaders(studioId),
        };
      },
      transformResponse: (response: any): Class[] => {
        return mapClasses(response);
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
      transformResponse: (response: any): Discipline[] => {
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
      transformResponse: (response: any): Instructor[] => {
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
