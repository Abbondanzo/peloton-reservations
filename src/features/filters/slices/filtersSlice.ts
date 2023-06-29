import {
  getInstructorsSearchParams,
  setInstructorsSearchParams,
} from "./../operators/instructorSearchParams";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src/createAction";
import { getBookableStatusSearchParams } from "../operators/bookableStatusSearchParams";
import { setBookableStatusSearchParams } from "./../operators/bookableStatusSearchParams";
import { BookableStatus } from "./../types/BookableStatus";

export interface FilterState {
  showBookableStatus: BookableStatus;
  selectedInstructors: string[];
  selectedDisciplines: string[];
}

const initialState: FilterState = {
  showBookableStatus: getBookableStatusSearchParams("waitlist"),
  selectedInstructors: getInstructorsSearchParams([]),
  selectedDisciplines: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setBookableStatus(state, action: PayloadAction<BookableStatus>) {
      state.showBookableStatus = action.payload;
      setBookableStatusSearchParams(action.payload);
    },
    toggleInstructor(state, action: PayloadAction<string>) {
      if (state.selectedInstructors.includes(action.payload)) {
        state.selectedInstructors = state.selectedInstructors.filter(
          (id) => id !== action.payload
        );
      } else {
        state.selectedInstructors = [
          ...state.selectedInstructors,
          action.payload,
        ];
      }
      setInstructorsSearchParams(state.selectedInstructors);
    },
    resetInstructors(state) {
      state.selectedInstructors = [];
      setInstructorsSearchParams(state.selectedInstructors);
    },
    toggleDiscipline(state, action: PayloadAction<string>) {
      if (state.selectedDisciplines.includes(action.payload)) {
        state.selectedDisciplines = state.selectedDisciplines.filter(
          (id) => id !== action.payload
        );
      } else {
        state.selectedDisciplines = [
          ...state.selectedDisciplines,
          action.payload,
        ];
      }
    },
    resetDisciplines(state) {
      state.selectedDisciplines = [];
    },
  },
});

export const {
  setBookableStatus,
  toggleInstructor,
  resetInstructors,
  toggleDiscipline,
  resetDisciplines,
} = filtersSlice.actions;

export default filtersSlice.reducer;
