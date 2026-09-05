import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../../../test/renderWithTheme";
import { StepIndicator } from "./StepIndicator";

const STEPS = ["Basics", "Filters", "Schedule", "Review"];

const renderIndicator = (currentStep: number, onStepClick = vi.fn()) => {
  renderWithTheme(
    <StepIndicator
      steps={STEPS}
      currentStep={currentStep}
      onStepClick={onStepClick}
    />
  );
  return onStepClick;
};

describe("StepIndicator", () => {
  it("renders one control per step inside a labelled nav", () => {
    renderIndicator(0);

    expect(
      screen.getByRole("navigation", { name: "Editor steps" })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(STEPS.length);
  });

  it("names each step for screen readers", () => {
    renderIndicator(0);

    expect(
      screen.getByRole("button", { name: "Step 2: Filters" })
    ).toBeInTheDocument();
  });

  it("marks only the current step as current", () => {
    renderIndicator(2);

    expect(
      screen.getByRole("button", { name: "Step 3: Schedule" })
    ).toHaveAttribute("aria-current", "step");
    expect(
      screen.getByRole("button", { name: "Step 1: Basics" })
    ).not.toHaveAttribute("aria-current");
  });

  it("navigates back to a completed step", async () => {
    const onStepClick = renderIndicator(2);

    await userEvent.click(
      screen.getByRole("button", { name: "Step 1: Basics" })
    );

    expect(onStepClick).toHaveBeenCalledExactlyOnceWith(0);
  });

  it("allows re-selecting the current step", async () => {
    const onStepClick = renderIndicator(2);

    await userEvent.click(
      screen.getByRole("button", { name: "Step 3: Schedule" })
    );

    expect(onStepClick).toHaveBeenCalledExactlyOnceWith(2);
  });

  it("does not let the user skip ahead to an upcoming step", async () => {
    const onStepClick = renderIndicator(0);

    await userEvent.click(
      screen.getByRole("button", { name: "Step 4: Review" })
    );

    expect(onStepClick).not.toHaveBeenCalled();
  });

  it("renders the step labels", () => {
    renderIndicator(0);

    for (const label of STEPS) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });
});
