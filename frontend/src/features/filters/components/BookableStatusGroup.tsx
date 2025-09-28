import styled from "styled-components";
import { List } from "../../theme/components/List";
import { ListItem } from "../../theme/components/ListItem";
import { Padding } from "../../theme/components/Padding";
import { SectionTitle } from "../../theme/components/SectionTitle";
import { useBookableStatuses } from "../hooks/useBookableStatuses";
import type { BookableStatus } from "../types/BookableStatus";

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
  cursor: pointer;
`;

export const BookableStatusGroup = () => {
  const { bookableStatuses, toggleBookableStatus } = useBookableStatuses();

  return (
    <Padding>
      <legend>
        <SectionTitle>Status</SectionTitle>
      </legend>
      <List>
        {OPTIONS.map((option, index) => (
          <ListItem
            key={index}
            onClick={() => toggleBookableStatus(option.status)}
          >
            <input
              type="checkbox"
              id={`bookable-${option.status}`}
              name="bookable-status"
              value={option.status}
              checked={bookableStatuses.includes(option.status)}
              readOnly
            />
            <Label htmlFor={`bookable-${option.status}`}>{option.label}</Label>
          </ListItem>
        ))}
      </List>
    </Padding>
  );
};
