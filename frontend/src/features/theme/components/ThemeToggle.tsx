import { useContext } from "react";
import styled from "styled-components";
import { ThemeModeContext } from "../context/ThemeModeContext";

const Row = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 14px;
  color: ${(p) => p.theme.colors.main};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: ${(p) => p.theme.colors.secondarySurface};
  }
`;

const Track = styled.span<{ $on: boolean }>`
  width: 32px;
  height: 18px;
  border-radius: 9px;
  background: ${(p) => (p.$on ? p.theme.colors.accent : p.theme.borderColor)};
  position: relative;
  flex-shrink: 0;
  transition: background-color 0.2s;

  &::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    top: 2px;
    left: ${(p) => (p.$on ? "16px" : "2px")};
    transition: left 0.15s;
  }
`;

export const ThemeToggle = () => {
  const { isDark, toggle } = useContext(ThemeModeContext);

  return (
    <Row type="button" role="switch" aria-checked={isDark} onClick={toggle}>
      Dark mode
      <Track $on={isDark} aria-hidden="true" />
    </Row>
  );
};
