import { useAppSelector } from "../../hooks/useStore";
import { ClassList } from "./ClassList";

export const ClassListWrapper = () => {
  const state = useAppSelector((state) => state.classList);

  if (state.status === "loading") {
    return <div>Loading</div>;
  }

  if (state.status === "failed") {
    return (
      <div>
        Error! <code>{state.error.message}</code>
      </div>
    );
  }

  return <ClassList classes={state.classes} />;
};
