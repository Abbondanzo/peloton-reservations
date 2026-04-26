import styled, { css } from "styled-components";

interface CheckedProps {
  $checked: boolean;
}

export const FilterItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`;

export const FilterItem = styled.li<CheckedProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.1s;

  ${(p) =>
    p.$checked
      ? css`
          background-color: ${p.theme.colors.accent}08;
        `
      : css`
          &:hover {
            background-color: ${(p) => p.theme.colors.hoverSurface};
          }
        `}
`;

export const FilterCheckBox = styled.span<CheckedProps>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 2px solid
    ${(p) => (p.$checked ? p.theme.colors.accent : p.theme.borderColor)};
  background-color: ${(p) =>
    p.$checked ? p.theme.colors.accent : "transparent"};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.1s,
    background-color 0.1s;

  &::after {
    content: "";
    width: 8px;
    height: 5px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg) translateY(-1px);
    opacity: ${(p) => (p.$checked ? 1 : 0)};
    transition: opacity 0.1s;
  }
`;

export const FilterItemName = styled.span`
  font-size: 14px;
  color: ${(p) => p.theme.colors.main};
`;

export const FilterStateText = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`;
