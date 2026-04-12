import type { RootState } from "../../store/constants/store";

export const selectIsAdmin = (state: RootState): boolean => {
  if (state.session.state !== "fulfilled") {
    return false;
  }
  return state.session.data?.isAdmin === true;
};
