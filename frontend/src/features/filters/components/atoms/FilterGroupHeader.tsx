import type { ReactNode } from "react";
import styled from "styled-components";
import { ResetButton } from "./ResetButton";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`;

const Label = styled.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${(p) => p.theme.colors.secondary};
  margin: 0;
`;

interface Props {
  label: string;
  onReset?: () => void;
  children?: ReactNode;
}

export const FilterGroupHeader = ({ label, onReset, children }: Props) => (
  <Header>
    <Label>{label}</Label>
    {onReset && (
      <ResetButton type="button" onClick={onReset}>
        Reset
      </ResetButton>
    )}
    {children}
  </Header>
);
