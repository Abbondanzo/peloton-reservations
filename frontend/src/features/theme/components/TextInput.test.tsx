import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../../test/renderWithTheme";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  it("associates the label with the input", () => {
    renderWithTheme(
      <TextInput label="Alert name" value="" onChange={vi.fn()} />
    );

    expect(screen.getByLabelText("Alert name")).toBeInTheDocument();
  });

  it("reports each keystroke's resulting value", async () => {
    const onChange = vi.fn();
    renderWithTheme(
      <TextInput label="Alert name" value="" onChange={onChange} />
    );

    await userEvent.type(screen.getByLabelText("Alert name"), "Hi");

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenLastCalledWith("i");
  });

  it("describes the input with its hint", () => {
    renderWithTheme(
      <TextInput
        label="Alert name"
        hint="Shown in your alerts list"
        value=""
        onChange={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Alert name")).toHaveAccessibleDescription(
      "Shown in your alerts list"
    );
  });

  it("omits the description when there is no hint", () => {
    renderWithTheme(
      <TextInput label="Alert name" value="" onChange={vi.fn()} />
    );

    expect(screen.getByLabelText("Alert name")).not.toHaveAttribute(
      "aria-describedby"
    );
  });

  it("gives two inputs on the same page distinct ids", () => {
    renderWithTheme(
      <>
        <TextInput label="First" value="" onChange={vi.fn()} />
        <TextInput label="Second" value="" onChange={vi.fn()} />
      </>
    );

    expect(screen.getByLabelText("First").id).not.toBe(
      screen.getByLabelText("Second").id
    );
  });

  it("renders the current value and placeholder", () => {
    renderWithTheme(
      <TextInput
        label="Alert name"
        placeholder="e.g. Morning rides"
        value="Morning rides"
        onChange={vi.fn()}
      />
    );

    const input = screen.getByLabelText("Alert name");
    expect(input).toHaveValue("Morning rides");
    expect(input).toHaveAttribute("placeholder", "e.g. Morning rides");
  });
});
