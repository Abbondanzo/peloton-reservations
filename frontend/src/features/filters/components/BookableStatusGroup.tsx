import styled, { css, useTheme } from "styled-components";
import { useBookableStatuses } from "../hooks/useBookableStatuses";
import type { BookableStatus } from "../types/BookableStatus";
import { FilterGroupHeader } from "./atoms/FilterGroupHeader";

const ChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`;

interface ChipProps {
  $active: boolean;
  $color: string;
}

const Chip = styled.button<ChipProps>`
  padding: 5px 14px;
  border-radius: 20px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${(p) =>
    p.$active
      ? css`
          border: 1.5px solid ${p.$color};
          background-color: ${p.$color}14;
          color: ${p.$color};
        `
      : css`
          border: 1px solid ${p.theme.borderColor};
          background-color: transparent;
          color: ${p.theme.colors.secondary};

          &:hover {
            background-color: ${p.theme.colors.hoverSurface};
          }
        `}
`;

export const BookableStatusGroup = () => {
  const { bookableStatuses, toggleBookableStatus } = useBookableStatuses();
  const theme = useTheme();

  const options: { label: string; status: BookableStatus; color: string }[] = [
    { label: "Free", status: "free", color: theme.colors.status.free.text },
    {
      label: "Waitlist",
      status: "waitlist",
      color: theme.colors.status.waitlist.text,
    },
    { label: "Full", status: "full", color: theme.colors.status.full.text },
  ];

  return (
    <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
      <legend style={{ padding: 0, width: "100%" }}>
        <FilterGroupHeader label="Status" />
      </legend>
      <ChipsRow>
        {options.map((option) => {
          const active = bookableStatuses.includes(option.status);
          return (
            <Chip
              key={option.status}
              type="button"
              $active={active}
              $color={option.color}
              onClick={() => toggleBookableStatus(option.status)}
              aria-pressed={active}
            >
              {option.label}
            </Chip>
          );
        })}
      </ChipsRow>
    </fieldset>
  );
};
