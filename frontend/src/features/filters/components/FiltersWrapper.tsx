import styled from "styled-components";
import { BookableStatusGroup } from "./BookableStatusGroup";
import { InstructorsGroup } from "./InstructorsGroup";
import { DisciplinesGroup } from "./DisciplinesGroup";
import { StudioGroup } from "./StudioGroup";

const Divider = styled.hr`
  background-color: ${(props) => props.theme.borderColor};
  border: none;
  height: 1px;
`;

export const FiltersWrapper = () => {
  return (
    <div>
      <StudioGroup />
      <Divider />
      <BookableStatusGroup />
      <Divider />
      <DisciplinesGroup />
      <Divider />
      <InstructorsGroup />
    </div>
  );
};
