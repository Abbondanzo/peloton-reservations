import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { toggleWaitlist } from "../slices/filtersSlice";

export const useWaitlist = () => {
  const waitlist = useAppSelector((state) => state.filters.showWaitlist);
  const dispatch = useAppDispatch();
  const setWaitlist = useCallback(
    (show: boolean) => {
      dispatch(toggleWaitlist(show));
    },
    [dispatch]
  );
  return [waitlist, setWaitlist] as const;
};
