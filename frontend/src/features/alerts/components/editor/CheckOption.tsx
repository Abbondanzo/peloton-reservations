import { type ReactNode, useId } from "react";
import styled from "styled-components";
import { hover } from "../../../theme/constants/styles";

const Wrapper = styled.label<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) =>
    props.$checked ? `${props.theme.colors.accent}0a` : "transparent"};
  transition: background-color 0.15s;

  ${hover}
`;

const LabelText = styled.span`
  color: ${(props) => props.theme.colors.main};
  font-size: 14px;
`;

const HiddenCheckbox = styled.input`
  accent-color: ${(props) => props.theme.colors.accent};
`;

interface Props {
  value: string;
  checked: boolean;
  onChange: () => void;
  label: string;
  icon?: ReactNode;
}

export const CheckOption = ({
  value,
  checked,
  onChange,
  label,
  icon,
}: Props) => {
  const id = useId();
  return (
    <Wrapper $checked={checked} htmlFor={id}>
      <HiddenCheckbox
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {icon}
      <LabelText>{label}</LabelText>
    </Wrapper>
  );
};
