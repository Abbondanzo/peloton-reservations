import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../../../test/renderWithTheme";
import { CheckOption } from "./CheckOption";

describe("CheckOption", () => {
  it("exposes a checkbox labelled by its text", () => {
    renderWithTheme(
      <CheckOption
        value="5"
        checked={false}
        onChange={vi.fn()}
        label="Cycling"
      />
    );

    expect(screen.getByRole("checkbox", { name: "Cycling" })).not.toBeChecked();
  });

  it("reflects the checked state", () => {
    renderWithTheme(
      <CheckOption value="5" checked onChange={vi.fn()} label="Cycling" />
    );

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("notifies on click", async () => {
    const onChange = vi.fn();
    renderWithTheme(
      <CheckOption
        value="5"
        checked={false}
        onChange={onChange}
        label="Cycling"
      />
    );

    await userEvent.click(screen.getByRole("checkbox"));

    expect(onChange).toHaveBeenCalledOnce();
  });

  it("notifies when the label is clicked", async () => {
    const onChange = vi.fn();
    renderWithTheme(
      <CheckOption
        value="5"
        checked={false}
        onChange={onChange}
        label="Cycling"
      />
    );

    await userEvent.click(screen.getByText("Cycling"));

    expect(onChange).toHaveBeenCalledOnce();
  });

  it("carries its value so grouped options stay distinguishable", () => {
    renderWithTheme(
      <CheckOption
        value="5"
        checked={false}
        onChange={vi.fn()}
        label="Cycling"
      />
    );

    expect(screen.getByRole("checkbox")).toHaveAttribute("value", "5");
  });

  it("renders an optional icon alongside the label", () => {
    renderWithTheme(
      <CheckOption
        value="5"
        checked={false}
        onChange={vi.fn()}
        label="Cycling"
        icon={<span data-testid="icon" />}
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("gives sibling options distinct ids", () => {
    renderWithTheme(
      <>
        <CheckOption
          value="5"
          checked={false}
          onChange={vi.fn()}
          label="Cycling"
        />
        <CheckOption
          value="6"
          checked={false}
          onChange={vi.fn()}
          label="Yoga"
        />
      </>
    );

    expect(screen.getByRole("checkbox", { name: "Cycling" }).id).not.toBe(
      screen.getByRole("checkbox", { name: "Yoga" }).id
    );
  });
});
