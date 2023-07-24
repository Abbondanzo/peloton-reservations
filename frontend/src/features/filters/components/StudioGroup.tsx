import styled from "styled-components";
import { STUDIOS } from "../../class-list/constants/studios";
import { fetchClassList } from "../../class-list/slices/classListSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useStore";
import { List } from "../../theme/components/List";
import { ListItem } from "../../theme/components/ListItem";
import { Padding } from "../../theme/components/Padding";
import { SectionTitle } from "../../theme/components/SectionTitle";

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
            onClick={() => {
              if (option.id !== selectedStudioId) {
                dispatch(fetchClassList(option.id));
              }
            }}
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
