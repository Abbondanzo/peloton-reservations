import { STUDIOS } from "shared";
import styled from "styled-components";
import type { BookableStatus } from "../../../filters/types/BookableStatus";
import { mediaMobile } from "../../../theme/constants/queries";
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
  studioId: string;
  onStudioChange: (studioId: string) => void;
  maxStatus: BookableStatus;
  onStatusChange: (status: BookableStatus) => void;
}

export const StepBasics = ({
  studioId,
  onStudioChange,
  maxStatus,
  onStatusChange,
}: Props) => {
  return (
    <div>
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
    </div>
  );
};
