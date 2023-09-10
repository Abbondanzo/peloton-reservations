import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { selectActiveClassList } from "../selectors/selectActiveClassList";
import { selectStudioId } from "../selectors/selectStudioId";
import { fetchClassList } from "../slices/classListSlice";

export const useHydrateClassList = () => {
  const dispatch = useAppDispatch();
  const currentStudioId = useAppSelector(selectStudioId);
  const currentState = useAppSelector(selectActiveClassList);
  const currentStatus = currentState?.status;
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (
      !hasFetchedRef.current &&
      (!currentStatus || currentStatus !== "loading")
    ) {
      hasFetchedRef.current = true;
      dispatch(fetchClassList(currentStudioId));
    }
  }, [currentStatus, currentStudioId, dispatch]);
};
