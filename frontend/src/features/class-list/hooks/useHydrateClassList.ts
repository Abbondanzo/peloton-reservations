import { useCallback } from "react";
import { useAppSelector } from "../../store/hooks/useStore";
import { selectStudioId } from "../selectors/selectStudioId";
import { useGetClassesQuery } from "../services/pelotonApi";

export const useHydrateClassList = () => {
  const studioId = useAppSelector(selectStudioId);
  const { refetch } = useGetClassesQuery(studioId);

  const handleRefresh = useCallback((): Promise<void> => {
    return refetch() as any;
  }, [refetch]);

  return {
    refresh: handleRefresh,
  };
};
