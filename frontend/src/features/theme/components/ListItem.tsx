import type { KeyboardEvent } from "react";
import styled from "styled-components";
import { hover } from "../constants/styles";

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  user-select: none;
  min-height: 32px;

  ${hover}
`;

export const ListItem = (
  props: React.ComponentProps<typeof StyledListItem>
) => (
  <StyledListItem
    role="button"
    tabIndex={0}
    onKeyDown={(e: KeyboardEvent) => {
      if ((e.key === "Enter" || e.key === " ") && props.onClick) {
        e.preventDefault();
        props.onClick(e as unknown as React.MouseEvent<HTMLLIElement>);
      }
    }}
    {...props}
  />
);
