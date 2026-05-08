import { useId } from "react";
import { STUDIOS } from "shared";
import styled from "styled-components";
import type { BookableStatus } from "../../../filters/types/BookableStatus";
import { mediaMobile } from "../../../theme/constants/queries";
import { border, hover } from "../../../theme/constants/styles";
import { TextInput } from "../../../theme/components/TextInput";
import { OptionCard } from "./OptionCard";

const Section = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

const Legend = styled.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.colors.main};
  margin-bottom: 4px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`;

const OptionsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionSpacer = styled.div`
  margin-top: 32px;

  ${mediaMobile`
    margin-top: 24px;
  `}
`;

const CheckCard = styled.label`
  ${border}
  ${hover}
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  cursor: pointer;
  user-select: none;
  transition:
    border-color 0.15s,
    background-color 0.15s;

  &:has(input:checked) {
    border-color: ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.accent}0a;
  }
`;

const CheckCardTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const CheckCardLabel = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.colors.main};
`;

const CheckCardHint = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const CheckCardInput = styled.input`
  accent-color: ${(props) => props.theme.colors.accent};
  flex-shrink: 0;
`;

interface StudioOption {
  id: string;
  label: string;
}

const STUDIO_OPTIONS: StudioOption[] = Object.entries(STUDIOS).map(
  ([key, value]) => ({
    id: key,
    label: value.location,
  })
);

const STATUS_OPTIONS: {
  status: BookableStatus;
  label: string;
  hint: string;
}[] = [
  {
    status: "free",
    label: "Open spots only",
    hint: "Alert me when a class has available spots",
  },
  {
    status: "waitlist",
    label: "Open spots or waitlist",
    hint: "Alert me even if I'd join the waitlist",
  },
];

interface Props {
  name: string;
  onNameChange: (name: string) => void;
  studioId: string;
  onStudioChange: (studioId: string) => void;
  maxStatus: BookableStatus;
  onStatusChange: (status: BookableStatus) => void;
  waitlistAlerts: boolean;
  onWaitlistAlertsChange: (enabled: boolean) => void;
}

export const StepBasics = ({
  name,
  onNameChange,
  studioId,
  onStudioChange,
  maxStatus,
  onStatusChange,
  waitlistAlerts,
  onWaitlistAlertsChange,
}: Props) => {
  const waitlistCheckId = useId();
  return (
    <div>
      <TextInput
        label="Alert name (optional)"
        hint="Leave blank to auto-generate a name from your filters"
        placeholder="e.g. Morning Cycling with Cody"
        value={name}
        onChange={onNameChange}
      />

      <SectionSpacer />

      <Section>
        <Legend>Which studio?</Legend>
        <Description>Pick the Peloton studio you want to monitor.</Description>
        <OptionsStack>
          {STUDIO_OPTIONS.map((option) => (
            <OptionCard
              key={option.id}
              name="studio"
              value={option.id}
              checked={studioId === option.id}
              onChange={() => onStudioChange(option.id)}
              label={option.label}
            />
          ))}
        </OptionsStack>
      </Section>

      <SectionSpacer />

      <Section>
        <Legend>When should we alert you?</Legend>
        <Description>Choose whether to include waitlisted classes.</Description>
        <OptionsStack>
          {STATUS_OPTIONS.map((option) => (
            <OptionCard
              key={option.status}
              name="status"
              value={option.status}
              checked={maxStatus === option.status}
              onChange={() => onStatusChange(option.status)}
              label={option.label}
              hint={option.hint}
            />
          ))}
        </OptionsStack>
      </Section>

      <SectionSpacer />

      <Section>
        <Legend>Waitlist position alerts</Legend>
        <Description>
          Get a notification whenever the waitlist count changes — useful for
          monitoring if it&apos;s your turn to accept a spot.
        </Description>
        <CheckCard htmlFor={waitlistCheckId}>
          <CheckCardInput
            type="checkbox"
            id={waitlistCheckId}
            checked={waitlistAlerts}
            onChange={(e) => onWaitlistAlertsChange(e.target.checked)}
          />
          <CheckCardTextBlock>
            <CheckCardLabel>Notify me when the waitlist count changes</CheckCardLabel>
            <CheckCardHint>
              Opens a prompt to check your email when the count shifts
            </CheckCardHint>
          </CheckCardTextBlock>
        </CheckCard>
      </Section>
    </div>
  );
};
