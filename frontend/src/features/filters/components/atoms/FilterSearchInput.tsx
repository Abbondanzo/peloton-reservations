import { type ChangeEvent, type KeyboardEvent } from "react";
import styled from "styled-components";
import { border } from "../../../theme/constants/styles";

const Wrapper = styled.div`
  padding: 0 16px 8px;
`;

const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 10px;
  color: ${(props) => props.theme.colors.secondary};
  pointer-events: none;
`;

const Input = styled.input`
  ${border}
  width: 100%;
  box-sizing: border-box;
  padding: 8px 32px;
  font-family: inherit;
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.mainSurface};
  color: ${(props) => props.theme.colors.main};

  &::placeholder {
    color: ${(props) => props.theme.colors.secondary};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent};
  }

  /* The native clear affordance duplicates our own button. */
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;

interface Props {
  /** Accessible name for the input, also used to label the clear button. */
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const FilterSearchInput = ({
  label,
  placeholder,
  value,
  onChange,
}: Props) => (
  <Wrapper>
    <Field>
      <SearchIcon
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10.5 10.5L14 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </SearchIcon>
      <Input
        type="search"
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
          onChange(target.value)
        }
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Escape" && value !== "") {
            event.preventDefault();
            onChange("");
          }
        }}
      />
      {value !== "" && (
        <ClearButton
          type="button"
          aria-label={`Clear ${label.toLowerCase()}`}
          onClick={() => onChange("")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </ClearButton>
      )}
    </Field>
  </Wrapper>
);
