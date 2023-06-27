import styled from "styled-components";
import { useBookableStatus } from "../hooks/useBookableStatus";
import { BookableStatus } from "../types/BookableStatus";
import { List } from "./atoms/List";
import { ListItem } from "./atoms/ListItem";
import { SectionTitle } from "./atoms/SectionTitle";
import { Padding } from "./atoms/Padding";

interface Option {
  label: string;
  status: BookableStatus;
}

const OPTIONS: Option[] = [
  { label: "Free", status: "free" },
  { label: "Waitlisted", status: "waitlist" },
  { label: "Full", status: "full" },
];

const Label = styled.label`
  margin-left: 4px;
`;

export const BookableStatusGroup = () => {
  const [bookableStatus, setBookableStatus] = useBookableStatus();

  return (
    <Padding>
      <legend>
        <SectionTitle>Status</SectionTitle>
      </legend>
      <List>
        {OPTIONS.map((option, index) => (
          <ListItem
            key={index}
            onClick={() => setBookableStatus(option.status)}
          >
            <input
              type="radio"
              id={`bookable-${option.status}`}
              name="bookable-status"
              value={option.status}
              checked={bookableStatus === option.status}
              readOnly
            />
            <Label htmlFor={`bookable-${option.status}`}>{option.label}</Label>
          </ListItem>
        ))}
      </List>
    </Padding>
  );
};
