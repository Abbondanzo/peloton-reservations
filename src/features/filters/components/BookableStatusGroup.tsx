import { ChangeEvent, useCallback } from "react";
import { useBookableStatus } from "../hooks/useBookableStatus";
import { isBookableStatus } from "../operators/isBookableStatus";

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
      <div>
        <input
          type="radio"
          id="bookable-free"
          name="bookable-status"
          value="free"
          checked={bookableStatus === "free"}
          onChange={onChange}
        />
        <label htmlFor="bookable-free">Free</label>
        <input
          type="radio"
          id="bookable-waitlist"
          name="bookable-status"
          value="waitlist"
          checked={bookableStatus === "waitlist"}
          onChange={onChange}
        />
        <label htmlFor="bookable-waitlist">Waitlisted</label>
        <input
          type="radio"
          id="bookable-full"
          name="bookable-status"
          value="full"
          checked={bookableStatus === "full"}
          onChange={onChange}
        />
        <label htmlFor="bookable-full">Full</label>
      </div>
    </fieldset>
  );
};
