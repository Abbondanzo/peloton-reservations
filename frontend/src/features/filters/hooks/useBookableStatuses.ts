import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { toggleBookableStatus } from "../slices/filtersSlice";
import { BookableStatus } from "../types/BookableStatus";

export const useBookableStatuses = () => {
  const bookableStatuses = useAppSelector(
    (state) => state.filters.selectedBookableStatuses
  );
  const dispatch = useAppDispatch();
  const handleToggleBookableStatus = useCallback(
    (status: BookableStatus) => {
      dispatch(toggleBookableStatus(status));
    },
    [dispatch]
  );
  return { bookableStatuses, toggleBookableStatus: handleToggleBookableStatus };
};
