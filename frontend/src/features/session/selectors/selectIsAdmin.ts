import type { RootState } from "../../store/constants/store";

export const selectIsAdmin = (state: RootState) =>
  state.session.data?.isAdmin === true;
