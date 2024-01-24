import { SerializedError } from "@reduxjs/toolkit";
import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Discipline } from "../types/Discipline";
import { Instructor } from "../types/Instructor";
import { Class } from "../types/Class";

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
          // "offering_type.background_color",
          // "offering_type.waitlist_max",
          // "offering_type.schedule_type",
          // "offering_type.category.name",
          "venue",
          "customer_url",
          "description",
          "suggested_booking_action",
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
          // fields: fields.join(","),
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
        const unsortedClasses: Class[] = response.results.map(
          (rawClass: any) => ({
            id: rawClass.id,
            name: rawClass.name,
            start: new Date(rawClass.starts_at).getTime() / 1000,
            fff: rawClass.suggested_booking_action,
            discipline: {
              id: rawClass.offering_type.category.id,
              name: rawClass.offering_type.category.name,
            },
            instructor: {
              id: rawClass.instructors[0].id,
              name: rawClass.instructors[0].name,
              imageUrl: rawClass.instructors[0].picture_url,
            },
            ...rawClass,
          })
        );
        console.log(
          unsortedClasses.find(
            (clazz: any) =>
              clazz.occupancy < clazz.max_occupancy || clazz.waiting_count < 10
          )
        );
        return unsortedClasses;
        // return unsortedClasses.sort((a, b) => a.name.localeCompare(b.name));
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
        const unsortedDisciplines: Discipline[] = response.results.map(
          (rawDiscipline: any) => ({
            id: rawDiscipline.id,
            name: rawDiscipline.name,
          })
        );
        return unsortedDisciplines.sort((a, b) => a.name.localeCompare(b.name));
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
        const unsortedInstructors: Instructor[] = response.results.map(
          (rawInstructor: any) => ({
            id: rawInstructor.id,
            name: rawInstructor.name,
            imageUrl: rawInstructor.picture_url,
            display: true,
          })
        );
        return unsortedInstructors.sort((a, b) => a.name.localeCompare(b.name));
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
