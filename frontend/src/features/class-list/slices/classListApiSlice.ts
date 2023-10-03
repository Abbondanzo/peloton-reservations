import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getClasses } from '../api/getClasses';
import { Class } from '../types/Class';
import { Instructor } from '../types/Instructor';

const classListApiSlice = createApi({
  reducerPath: 'classListApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getClassesByStudioId: builder.query({
      queryFn: async (studioId: string) => {
        try {
          const response = await getClasses(studioId);
          const instructors = response.data.instructors.map(
            (instructor): Instructor => {
              return {
                id: instructor.id,
                name: instructor.full_name,
                imageUrl: instructor.image_url,
                display: instructor.display,
              };
            }
          );
          const classes = response.data.classes.map((clazz): Class => {
            const instructor = instructors.find(
              (instructor) => instructor.id === clazz.instructor_id
            ) || {
              id: '0',
              name: 'None',
              imageUrl: '',
              display: false,
            };

            return {
              ...clazz,
              name:
                clazz.name ||
                `${clazz.duration / 60} min ${instructor.name} Class`,
              waitlistFull: clazz.waitlist_full,
              instructor,
              discipline: clazz.disciplines[0] || {
                id: '0',
                name: 'No Discipline',
              },
            };
          });
          const disciplines = response.data.disciplines;
          const data = { classes, instructors, disciplines };
          return { data };
        } catch (error) {
          return { error: error as any };
        }
      },
    }),
  }),
});

export const { getClassesByStudioId } = classListApiSlice.endpoints;

const { reducer, reducerPath, middleware } = classListApiSlice;
const store = { reducer, reducerPath, middleware };
export default store;
