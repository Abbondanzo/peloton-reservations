import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { setBookableStatus } from "../slices/filtersSlice";
import { BookableStatus } from "./../types/BookableStatus";

export const useBookableStatus = () => {
  const bookableStatus = useAppSelector(
    (state) => state.filters.showBookableStatus
  );
  const dispatch = useAppDispatch();
  const setStatus = useCallback(
    (status: BookableStatus) => {
      dispatch(setBookableStatus(status));
    },
    [dispatch]
  );
  return [bookableStatus, setStatus] as const;
};
