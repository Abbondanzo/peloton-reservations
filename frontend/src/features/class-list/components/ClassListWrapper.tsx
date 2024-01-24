import { Card } from "../../theme/components/Card";
import { getErrorMessage, useGetClassesQuery } from "../services/pelotonApi";
import { ClassList } from "./ClassList";

export const ClassListWrapper = () => {
  const { data, isLoading, error } = useGetClassesQuery("7248695"); // 7248695 | 7248663

  if (error && !isLoading) {
    return (
      <Card>
        Error! <code>{getErrorMessage(error)}</code>
      </Card>
    );
  }

  if (!data || isLoading) {
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  }

  return <ClassList classes={data} />;
};
