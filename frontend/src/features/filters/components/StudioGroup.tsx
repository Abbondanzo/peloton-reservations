import { STUDIOS } from "shared";
import styled, { css } from "styled-components";
import { selectStudioId } from "../../class-list/selectors/selectStudioId";
import { setStudioId } from "../../class-list/slices/studioSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { border } from "../../theme/constants/styles";
import { FilterGroupHeader } from "./atoms/FilterGroupHeader";

interface Option {
  id: string;
  label: string;
}

const OPTIONS: Option[] = Object.entries(STUDIOS).map(([key, value]) => ({
  id: key,
  label: value.location,
}));

const OptionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`;

interface SelectedProps {
  $selected: boolean;
}

const OptionCard = styled.label<SelectedProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  ${border}
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${(p) =>
    p.$selected
      ? css`
          border-color: ${p.theme.colors.accent};
          background-color: ${p.theme.colors.accent}0a;
        `
      : css`
          &:hover {
            background-color: rgba(0, 0, 0, 0.03);
          }
        `}
`;

const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const RadioDot = styled.span<SelectedProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid
    ${(p) => (p.$selected ? p.theme.colors.accent : p.theme.borderColor)};
  background-color: ${(p) =>
    p.$selected ? p.theme.colors.accent : "transparent"};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.1s,
    background-color 0.1s;

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    opacity: ${(p) => (p.$selected ? 1 : 0)};
    transition: opacity 0.1s;
  }
`;

const OptionLabel = styled.span`
  font-size: 15px;
  color: ${(p) => p.theme.colors.main};
`;

export const StudioGroup = () => {
  const dispatch = useAppDispatch();
  const selectedStudioId = useAppSelector(selectStudioId);

  return (
    <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
      <legend style={{ padding: 0, width: "100%" }}>
        <FilterGroupHeader label="Studio" />
      </legend>
      <OptionsGrid>
        {OPTIONS.map((option) => {
          const selected = selectedStudioId === option.id;
          return (
            <OptionCard
              key={option.id}
              $selected={selected}
              htmlFor={`studio-${option.id}`}
            >
              <HiddenRadio
                type="radio"
                id={`studio-${option.id}`}
                name="studio-selected"
                value={option.id}
                checked={selected}
                onChange={() => {
                  if (!selected) dispatch(setStudioId(option.id));
                }}
              />
              <RadioDot $selected={selected} />
              <OptionLabel>{option.label}</OptionLabel>
            </OptionCard>
          );
        })}
      </OptionsGrid>
    </fieldset>
  );
};
