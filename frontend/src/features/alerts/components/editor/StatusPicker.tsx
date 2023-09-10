import styled from "styled-components";
import { BookableStatus } from "../../../filters/types/BookableStatus";
import { List } from "../../../theme/components/List";
import { ListItem } from "../../../theme/components/ListItem";
import { Padding } from "../../../theme/components/Padding";
import { SectionTitle } from "../../../theme/components/SectionTitle";

interface Option {
  label: string;
  hint: string;
  status: BookableStatus;
}

const OPTIONS: Option[] = [
  {
    label: "Free",
    status: "free",
    hint: "Only alert on classes that have openings",
  },
  {
    label: "Waitlisted",
    status: "waitlist",
    hint: "Alert on classes that have a waitlist or classes that have openings",
  },
];

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
`;

const Label = styled.label`
  cursor: inherit;
`;

const Hint = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12px;
`;

interface Props {
  status: BookableStatus;
  setStatus: (status: BookableStatus) => void;
}

export const StatusPicker = ({ status, setStatus }: Props) => {
  return (
    <Padding>
      <legend>
        <SectionTitle>Status</SectionTitle>
      </legend>
      <List>
        {OPTIONS.map((option, index) => (
          <ListItem key={index} onClick={() => setStatus(option.status)}>
            <input
              type="radio"
              id={`bookable-${option.status}`}
              name="bookable-status"
              value={option.status}
              checked={option.status === status}
              readOnly
            />
            <TextBlock>
              <Label htmlFor={`bookable-${option.status}`}>
                {option.label}
              </Label>
              <Hint>{option.hint}</Hint>
            </TextBlock>
          </ListItem>
        ))}
      </List>
    </Padding>
  );
};
