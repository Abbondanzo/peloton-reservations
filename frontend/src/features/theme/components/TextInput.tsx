import { type ChangeEvent, useState } from "react";
import styled from "styled-components";
import { border } from "../constants/styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.main};
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  ${border}
  padding: 12px 8px;
  font-family: inherit;
`;

const Hint = styled.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const getRandomId = () =>
  Math.floor(Math.random() * 1e10)
    .toString()
    .split("")
    .map(Number)
    .map((num) => num.toString(16))
    .join("");

interface Props {
  label: string;
  hint?: string;
  placeholder?: string;
  value?: string | number;
  onChange: (value: string) => void;
}

export const TextInput = ({
  label,
  hint,
  placeholder,
  value,
  onChange,
}: Props) => {
  const [id] = useState(getRandomId);

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
          onChange(target.value)
        }
      />
      {hint && <Hint>{hint}</Hint>}
    </Wrapper>
  );
};
