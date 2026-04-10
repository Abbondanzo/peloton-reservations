import { type ReactNode, useId } from "react";
import styled from "styled-components";
import { border, hover } from "../../../theme/constants/styles";

const Wrapper = styled.label`
  ${border}
  ${hover}
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s, background-color 0.15s;

  &:has(input:checked) {
    border-color: ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.accent}0a;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const LabelText = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.colors.main};
`;

const HintText = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const HiddenRadio = styled.input`
  accent-color: ${(props) => props.theme.colors.accent};
`;

interface Props {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  label: string;
  hint?: string;
  icon?: ReactNode;
}

export const OptionCard = ({
  name,
  value,
  checked,
  onChange,
  label,
  hint,
  icon,
}: Props) => {
  const id = useId();
  return (
    <Wrapper htmlFor={id}>
      <HiddenRadio
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {icon}
      <TextBlock>
        <LabelText>{label}</LabelText>
        {hint && <HintText>{hint}</HintText>}
      </TextBlock>
    </Wrapper>
  );
};
