import { useWaitlist } from "../hooks/useWaitlist";

export const FiltersWrapper = () => {
  const [waitlist, setWaitlist] = useWaitlist();
  return (
    <input
      type="checkbox"
      checked={waitlist}
      onChange={(event) => setWaitlist(event.currentTarget.checked)}
    />
  );
};
