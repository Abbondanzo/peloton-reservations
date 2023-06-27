import { ChangeEvent, useCallback } from "react";
import { useBookableStatus } from "../hooks/useBookableStatus";
import { isBookableStatus } from "../operators/isBookableStatus";
import { BookableStatus } from "../types/BookableStatus";

interface Option {
  label: string;
  status: BookableStatus;
}

const OPTIONS: Option[] = [
  { label: "Free", status: "free" },
  { label: "Waitlisted", status: "waitlist" },
  { label: "Full", status: "full" },
];

export const BookableStatusGroup = () => {
  const [bookableStatus, setBookableStatus] = useBookableStatus();
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (isBookableStatus(value)) {
        setBookableStatus(value);
      }
    },
    [setBookableStatus]
  );

  return (
    <fieldset>
      <legend>
        <h2>Status</h2>
      </legend>
      <div className="space-y-2">
        {OPTIONS.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`bookable-${option.status}`}
              name="bookable-status"
              value={option.status}
              checked={bookableStatus === option.status}
              onChange={onChange}
            />
            <label htmlFor={`bookable-${option.status}`}>{option.label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
