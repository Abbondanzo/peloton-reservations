import styled from "styled-components";
import { mediaMobile } from "../../../theme/constants/queries";

const Track = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${mediaMobile`
    padding: 0;
    margin-bottom: 12px;
  `}
`;

interface DotProps {
  $state: "completed" | "active" | "upcoming";
}

const Dot = styled.button<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.$state === "upcoming"
        ? props.theme.borderColor
        : props.theme.colors.accent};
  background-color: ${(props) =>
    props.$state === "completed" ? props.theme.colors.accent : "transparent"};
  padding: 0;
  cursor: ${(props) => (props.$state === "upcoming" ? "default" : "pointer")};
  transition:
    background-color 0.2s,
    border-color 0.2s;

  ${mediaMobile`
    width: 12px;
    height: 12px;
  `}
`;

const Connector = styled.div<{ $filled: boolean }>`
  flex: 1;
  height: 2px;
  background-color: ${(props) =>
    props.$filled ? props.theme.colors.accent : props.theme.borderColor};
  transition: background-color 0.2s;
`;

const StepLabel = styled.span<DotProps>`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${(props) =>
    props.$state === "active"
      ? props.theme.colors.main
      : props.theme.colors.secondary};
  font-weight: ${(props) => (props.$state === "active" ? 600 : 400)};

  ${mediaMobile`
    display: none;
  `}
`;

const StepWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  steps: string[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export const StepIndicator = ({ steps, currentStep, onStepClick }: Props) => {
  return (
    <Track role="navigation" aria-label="Editor steps">
      {steps.map((label, index) => {
        const state =
          index < currentStep
            ? "completed"
            : index === currentStep
              ? "active"
              : "upcoming";
        return (
          <StepWrapper
            key={index}
            style={{ flex: index < steps.length - 1 ? 1 : 0 }}
          >
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Dot
                $state={state}
                onClick={() => {
                  if (state !== "upcoming") onStepClick(index);
                }}
                aria-label={`Step ${index + 1}: ${label}`}
                aria-current={state === "active" ? "step" : undefined}
                type="button"
              />
              {index < steps.length - 1 && (
                <Connector $filled={index < currentStep} />
              )}
            </div>
            <StepLabel $state={state}>{label}</StepLabel>
          </StepWrapper>
        );
      })}
    </Track>
  );
};
