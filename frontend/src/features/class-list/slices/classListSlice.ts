import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getClasses } from "../api/getClasses";
import { STUDIOS } from "../constants/studios";
import { Class } from "../types/Class";
import { Discipline } from "../types/Discipline";
import { Instructor } from "../types/Instructor";

interface FulfilledState {
  status: "fulfilled";
  classes: Class[];
  instructors: Instructor[];
  disciplines: Discipline[];
  updatedAt: number;
}

interface LoadingState {
  status: "loading";
}

interface FailedState {
  status: "failed";
  error: Partial<Error>;
}

type FetchState = LoadingState | FulfilledState | FailedState;

export interface ClassListState {
  studioId: string;
  classLists: { [key: string]: FetchState };
}

const initialState: ClassListState = {
  studioId: Object.entries(STUDIOS).find(
    ([_, value]) => value.location === "New York"
  )![0],
  classLists: {},
};

export const fetchClassList = createAsyncThunk(
  "classList/fetchClassList",
  async (classId: string) => {
    const response = await getClasses(classId);
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
        id: "0",
        name: "None",
        imageUrl: "",
        display: false,
      };

      return {
        ...clazz,
        name:
          clazz.name || `${clazz.duration / 60} min ${instructor.name} Class`,
        waitlistFull: clazz.waitlist_full,
        instructor,
        discipline: clazz.disciplines[0] || { id: "0", name: "No Discipline" },
      };
    });
    const disciplines = response.data.disciplines;
    return { classes, instructors, disciplines };
  }
);

const classListSlice = createSlice({
  name: "classList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassList.pending, (state, action) => {
        state.studioId = action.meta.arg;
        state.classLists[action.meta.arg] = { status: "loading" };
      })
      .addCase(fetchClassList.fulfilled, (state, action) => {
        state.classLists[action.meta.arg] = {
          status: "fulfilled",
          classes: action.payload.classes,
          instructors: action.payload.instructors,
          disciplines: action.payload.disciplines,
          updatedAt: new Date().getTime(),
        };
      })
      .addCase(fetchClassList.rejected, (state, action) => {
        state.classLists[action.meta.arg] = {
          status: "failed",
          error: action.error,
        };
      });
  },
});

export default classListSlice.reducer;
