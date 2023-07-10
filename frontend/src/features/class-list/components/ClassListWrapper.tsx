import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";
import { selectActiveClassList } from "../selectors/selectActiveClassList";
import { ClassList } from "./ClassList";

export const ClassListWrapper = () => {
  const state = useAppSelector(selectActiveClassList);

  if (!state || state.status === "loading") {
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  }

  if (state.status === "failed") {
    return (
      <Card>
        <p>
          Error! <code>{state.error.message}</code>
        </p>
      </Card>
    );
  }

  return <ClassList classes={state.classes} />;
};
