import { BookableStatusGroup } from "./BookableStatusGroup";
import { InstructorsGroup } from "./InstructorsGroup";

export const FiltersWrapper = () => {
  return (
    <div>
      <BookableStatusGroup />
      <InstructorsGroup />
    </div>
  );
};
