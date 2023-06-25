import { useCallback } from "react";
import { useQueryParam } from "./useQueryParam";

export const useWaitlistCheckbox = () => {
  const [waitlist, setWaitlist] = useQueryParam({
    name: "waitlist",
    defaultValue: "true",
  });
  const onChange = useCallback(
    (newValue: boolean) => {
      setWaitlist(String(newValue));
    },
    [setWaitlist]
  );
  return [waitlist === "true", onChange] as const;
};
