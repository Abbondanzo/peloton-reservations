import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/src/createAction';
import {
  getStoredBookableStatus,
  getStoredDisciplines,
  getStoredInstructors,
  setStoredBookableStatus,
  setStoredDisciplines,
  setStoredInstructors,
} from '../operators/filterStorage';
import { BookableStatus } from './../types/BookableStatus';

export interface FilterState {
  selectedBookableStatuses: BookableStatus[];
  selectedInstructors: string[];
  selectedDisciplines: string[];
}

const initialState: FilterState = {
  selectedBookableStatuses: getStoredBookableStatus(['free', 'waitlist']),
  selectedInstructors: getStoredInstructors([]),
  selectedDisciplines: getStoredDisciplines([]),
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleBookableStatus(state, action: PayloadAction<BookableStatus>) {
      if (state.selectedBookableStatuses.includes(action.payload)) {
        state.selectedBookableStatuses = state.selectedBookableStatuses.filter(
          (status) => status !== action.payload
        );
      } else {
        state.selectedBookableStatuses = [
          ...state.selectedBookableStatuses,
          action.payload,
        ];
      }
      setStoredBookableStatus(state.selectedBookableStatuses);
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
      setStoredInstructors(state.selectedInstructors);
    },
    resetInstructors(state) {
      state.selectedInstructors = [];
      setStoredInstructors(state.selectedInstructors);
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
      setStoredDisciplines(state.selectedDisciplines);
    },
    resetDisciplines(state) {
      state.selectedDisciplines = [];
      setStoredDisciplines(state.selectedDisciplines);
    },
  },
});

export const {
  toggleBookableStatus,
  toggleInstructor,
  resetInstructors,
  toggleDiscipline,
  resetDisciplines,
} = filtersSlice.actions;

export default filtersSlice.reducer;
