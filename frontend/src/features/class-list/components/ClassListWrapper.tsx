import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";
import { selectStudioId } from "../selectors/selectStudioId";
import { getErrorMessage, useGetClassesQuery } from "../services/pelotonApi";
import { ClassList } from "./ClassList";

export const ClassListWrapper = () => {
  const studioId = useAppSelector(selectStudioId);
  const { currentData, isLoading, error, fulfilledTimeStamp } =
    useGetClassesQuery(studioId);

  if (error && !isLoading) {
    return (
      <Card>
        Error! <code>{getErrorMessage(error)}</code>
      </Card>
    );
  }

  if (!currentData || isLoading) {
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  }

  return (
    <ClassList classes={currentData} fulfilledTimeStamp={fulfilledTimeStamp} />
  );
};
