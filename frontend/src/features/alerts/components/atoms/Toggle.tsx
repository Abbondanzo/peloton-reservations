import styled from "styled-components";

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const Track = styled.div<{ $checked: boolean }>`
  width: 40px;
  height: 22px;
  border-radius: 11px;
  background-color: ${(props) =>
    props.$checked ? props.theme.colors.accent : props.theme.colors.secondarySurface};
  border: 1px solid
    ${(props) =>
      props.$checked ? props.theme.colors.accent : props.theme.borderColor};
  transition:
    background-color 0.2s,
    border-color 0.2s;
  position: relative;
  flex-shrink: 0;
`;

const Thumb = styled.div<{ $checked: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.$checked ? "20px" : "2px")};
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
`;

interface Props {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  "aria-label"?: string;
}

export const Toggle = ({
  id,
  checked,
  onChange,
  label,
  "aria-label": ariaLabel,
}: Props) => (
  <Label htmlFor={id}>
    <HiddenCheckbox
      id={id}
      type="checkbox"
      checked={checked}
      aria-label={ariaLabel ?? label}
      onChange={(e) => onChange(e.target.checked)}
    />
    <Track $checked={checked}>
      <Thumb $checked={checked} />
    </Track>
    {label && <span>{label}</span>}
  </Label>
);
