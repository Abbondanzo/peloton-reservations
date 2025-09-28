import type { RootState } from "../../store/constants/store";

export const selectSession = (state: RootState) => state.session;
