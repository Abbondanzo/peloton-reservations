import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../../../test/renderWithTheme";
import { OptionCard } from "./OptionCard";

const renderGroup = (onChange = vi.fn()) => {
  renderWithTheme(
    <>
      <OptionCard
        name="status"
        value="free"
        checked
        onChange={vi.fn()}
        label="Free spots"
        hint="Notify when a seat opens"
      />
      <OptionCard
        name="status"
        value="waitlist"
        checked={false}
        onChange={onChange}
        label="Waitlist"
      />
    </>
  );
  return onChange;
};

describe("OptionCard", () => {
  it("renders a radio labelled by its text", () => {
    renderGroup();

    expect(screen.getByRole("radio", { name: /Free spots/ })).toBeChecked();
    expect(screen.getByRole("radio", { name: "Waitlist" })).not.toBeChecked();
  });

  it("groups options under one radio name", () => {
    renderGroup();

    for (const radio of screen.getAllByRole("radio")) {
      expect(radio).toHaveAttribute("name", "status");
    }
  });

  it("notifies when an unselected option is chosen", async () => {
    const onChange = renderGroup();

    await userEvent.click(screen.getByRole("radio", { name: "Waitlist" }));

    expect(onChange).toHaveBeenCalledOnce();
  });

  it("renders the hint when given", () => {
    renderGroup();

    expect(screen.getByText("Notify when a seat opens")).toBeInTheDocument();
  });

  it("omits the hint when there is none", () => {
    renderWithTheme(
      <OptionCard
        name="status"
        value="waitlist"
        checked={false}
        onChange={vi.fn()}
        label="Waitlist"
      />
    );

    expect(screen.getByRole("radio").parentElement).toHaveTextContent(
      "Waitlist"
    );
  });

  it("renders an optional icon", () => {
    renderWithTheme(
      <OptionCard
        name="status"
        value="free"
        checked={false}
        onChange={vi.fn()}
        label="Free spots"
        icon={<span data-testid="icon" />}
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
