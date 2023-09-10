import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { selectActiveClassList } from "../selectors/selectActiveClassList";
import { selectStudioId } from "../selectors/selectStudioId";
import { fetchClassList } from "../slices/classListSlice";

export const useHydrateClassList = () => {
  const dispatch = useAppDispatch();
  const currentStudioId = useAppSelector(selectStudioId);
  const currentState = useAppSelector(selectActiveClassList);
  const currentStatus = currentState?.status;

  useEffect(() => {
    if (!currentStatus || currentStatus !== "loading") {
      dispatch(fetchClassList(currentStudioId));
    }
  }, [currentStatus, currentStudioId, dispatch]);
};
