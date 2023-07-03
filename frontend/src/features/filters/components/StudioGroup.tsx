import styled from "styled-components";
import { STUDIOS } from "../../class-list/constants/studios";
import { fetchClassList } from "../../class-list/slices/classListSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { List } from "./atoms/List";
import { ListItem } from "./atoms/ListItem";
import { Padding } from "./atoms/Padding";
import { SectionTitle } from "./atoms/SectionTitle";

interface Option {
  id: string;
  label: string;
}

const OPTIONS: Option[] = Object.entries(STUDIOS).map(([key, value]) => ({
  id: key,
  label: value.location,
}));

const Label = styled.label`
  margin-left: 4px;
  cursor: pointer;
`;

export const StudioGroup = () => {
  const dispatch = useAppDispatch();
  const selectedStudioId = useAppSelector((state) => state.classList.studioId);
  return (
    <Padding>
      <legend>
        <SectionTitle>Studio</SectionTitle>
      </legend>
      <List>
        {OPTIONS.map((option, index) => (
          <ListItem
            key={index}
            onClick={() => dispatch(fetchClassList(option.id))}
          >
            <input
              type="radio"
              id={`studio-${option.id}`}
              name="studio-selected"
              value={option.id}
              checked={selectedStudioId === option.id}
              readOnly
            />
            <Label htmlFor={`studio-${option.id}`}>{option.label}</Label>
          </ListItem>
        ))}
      </List>
    </Padding>
  );
};
