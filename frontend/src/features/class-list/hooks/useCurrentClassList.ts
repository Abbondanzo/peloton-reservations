import { useAppSelector } from '../../store/hooks/useStore';
import { selectStudioId } from '../selectors/selectStudioId';
import { getClassesByStudioId } from '../slices/classListApiSlice';

export const useCurrentClassList = () => {
  const currentStudioId = useAppSelector(selectStudioId);
  const { currentData, isLoading, error, refetch } =
    getClassesByStudioId.useQuery(currentStudioId, {
      refetchOnMountOrArgChange: 3,
    });
  return {
    data: currentData,
    isLoading,
    error,
    refetch: async () => {
      await refetch();
    },
  };
};
