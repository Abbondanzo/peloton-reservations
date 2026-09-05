import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../../../test/renderWithTheme";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("exposes a checkbox labelled by its visible text", () => {
    renderWithTheme(
      <Toggle
        id="t"
        checked={false}
        onChange={vi.fn()}
        label="Waitlist alerts"
      />
    );

    expect(
      screen.getByRole("checkbox", { name: "Waitlist alerts" })
    ).not.toBeChecked();
  });

  it("reflects the checked state", () => {
    renderWithTheme(
      <Toggle id="t" checked onChange={vi.fn()} label="Waitlist alerts" />
    );

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("reports the new value when clicked", async () => {
    const onChange = vi.fn();
    renderWithTheme(
      <Toggle
        id="t"
        checked={false}
        onChange={onChange}
        label="Waitlist alerts"
      />
    );

    await userEvent.click(screen.getByRole("checkbox"));

    expect(onChange).toHaveBeenCalledExactlyOnceWith(true);
  });

  it("reports false when toggled off", async () => {
    const onChange = vi.fn();
    renderWithTheme(
      <Toggle id="t" checked onChange={onChange} label="Waitlist alerts" />
    );

    await userEvent.click(screen.getByRole("checkbox"));

    expect(onChange).toHaveBeenCalledExactlyOnceWith(false);
  });

  it("toggles when the visible label is clicked", async () => {
    const onChange = vi.fn();
    renderWithTheme(
      <Toggle
        id="t"
        checked={false}
        onChange={onChange}
        label="Waitlist alerts"
      />
    );

    await userEvent.click(screen.getByText("Waitlist alerts"));

    expect(onChange).toHaveBeenCalledExactlyOnceWith(true);
  });

  it("prefers an explicit aria-label over the visible text", () => {
    renderWithTheme(
      <Toggle
        id="t"
        checked={false}
        onChange={vi.fn()}
        label="On"
        aria-label="Pause all notifications"
      />
    );

    expect(
      screen.getByRole("checkbox", { name: "Pause all notifications" })
    ).toBeInTheDocument();
  });

  it("stays accessible with no visible label at all", () => {
    renderWithTheme(
      <Toggle
        id="t"
        checked={false}
        onChange={vi.fn()}
        aria-label="Pause all notifications"
      />
    );

    expect(
      screen.getByRole("checkbox", { name: "Pause all notifications" })
    ).toBeInTheDocument();
  });
});
