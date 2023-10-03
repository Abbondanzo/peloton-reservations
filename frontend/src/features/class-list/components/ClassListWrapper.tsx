import { useAppSelector } from '../../store/hooks/useStore';
import { Card } from '../../theme/components/Card';
import { getFriendlyError } from '../operators/getFriendlyError';
import { selectAsyncActiveClassList } from '../selectors/selectAsyncActiveClassList';
import { ClassList } from './ClassList';

export const ClassListWrapper = () => {
  const { data, status, error } = useAppSelector(selectAsyncActiveClassList);

  if (!data || status === 'pending') {
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  }

  if (status === 'rejected') {
    return (
      <Card>
        <p>
          Error! <code>{getFriendlyError(error)}</code>
        </p>
      </Card>
    );
  }

  return <ClassList classes={data.classes} />;
};
