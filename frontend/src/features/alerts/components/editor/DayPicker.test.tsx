import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ALL_DAY_TIME_RANGE, type TimeRange } from "shared";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../../../test/renderWithTheme";
import { DAY_NAMES } from "../../constants/days";
import { DayPicker } from "./DayPicker";

const allDays = (): Optional<TimeRange>[] =>
  DAY_NAMES.map(() => ALL_DAY_TIME_RANGE);
const noDays = (): Optional<TimeRange>[] => DAY_NAMES.map(() => null);

const renderPicker = (timeRanges: Optional<TimeRange>[]) => {
  const setTimeRanges = vi.fn();
  renderWithTheme(
    <DayPicker timeRanges={timeRanges} setTimeRanges={setTimeRanges} />
  );
  return setTimeRanges;
};

const dayRow = (day: string) =>
  screen.getByText(day).closest("li") as HTMLElement;

describe("DayPicker", () => {
  it("lists every day of the week", () => {
    renderPicker(noDays());

    for (const day of DAY_NAMES) {
      expect(screen.getByText(day)).toBeInTheDocument();
    }
  });

  it("checks the days that have a range", () => {
    const ranges = noDays();
    ranges[3] = ALL_DAY_TIME_RANGE;
    renderPicker(ranges);

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes[3]).toBeChecked();
    expect(checkboxes[0]).not.toBeChecked();
  });

  it("enables a day with the default range when clicked", async () => {
    const setTimeRanges = renderPicker(noDays());

    await userEvent.click(screen.getByText("Wednesday"));

    const next = setTimeRanges.mock.calls[0][0];
    expect(next[3]).toEqual(ALL_DAY_TIME_RANGE);
    expect(next[0]).toBeNull();
  });

  it("disables a day that already has a range", async () => {
    const setTimeRanges = renderPicker(allDays());

    await userEvent.click(screen.getByText("Wednesday"));

    expect(setTimeRanges.mock.calls[0][0][3]).toBeNull();
  });

  it("only shows time selects for enabled days", () => {
    const ranges = noDays();
    ranges[3] = ALL_DAY_TIME_RANGE;
    renderPicker(ranges);

    // One enabled day means one start select and one end select.
    expect(screen.getAllByRole("combobox")).toHaveLength(2);
  });

  it("updates the start time for its own day only", async () => {
    const setTimeRanges = renderPicker(allDays());

    const [start] = within(dayRow("Wednesday")).getAllByRole("combobox");
    await userEvent.selectOptions(start, "420");

    const next = setTimeRanges.mock.calls[0][0];
    expect(next[3]).toEqual({ startMin: 420, endMin: 1440 });
    expect(next[0]).toEqual(ALL_DAY_TIME_RANGE);
  });

  it("updates the end time", async () => {
    const setTimeRanges = renderPicker(allDays());

    const [, end] = within(dayRow("Wednesday")).getAllByRole("combobox");
    await userEvent.selectOptions(end, "1140");

    expect(setTimeRanges.mock.calls[0][0][3]).toEqual({
      startMin: 0,
      endMin: 1140,
    });
  });

  it("resets an end time that a new start time would overtake", async () => {
    const ranges = noDays();
    ranges[3] = { startMin: 0, endMin: 300 };
    const setTimeRanges = renderPicker(ranges);

    const [start] = within(dayRow("Wednesday")).getAllByRole("combobox");
    await userEvent.selectOptions(start, "600");

    expect(setTimeRanges.mock.calls[0][0][3]).toEqual({
      startMin: 600,
      endMin: 0,
    });
  });

  it("disables end times that fall before the start", () => {
    const ranges = noDays();
    ranges[3] = { startMin: 600, endMin: 1140 };
    renderPicker(ranges);

    const [, end] = within(dayRow("Wednesday")).getAllByRole("combobox");
    const options = within(end).getAllByRole("option") as HTMLOptionElement[];
    expect(options.find((o) => o.value === "540")).toBeDisabled();
    expect(options.find((o) => o.value === "660")).not.toBeDisabled();
    // Midnight stays selectable as the "until end of day" sentinel.
    expect(options.find((o) => o.value === "0")).not.toBeDisabled();
  });

  it("offers 'Copy to all' only on the first enabled day", () => {
    const ranges = noDays();
    ranges[3] = ALL_DAY_TIME_RANGE;
    ranges[4] = ALL_DAY_TIME_RANGE;
    renderPicker(ranges);

    expect(screen.getAllByRole("button", { name: "Copy to all" })).toHaveLength(
      1
    );
    expect(
      within(dayRow("Wednesday")).getByRole("button", { name: "Copy to all" })
    ).toBeInTheDocument();
  });

  it("copies the first day's range to the other enabled days only", async () => {
    const ranges = noDays();
    ranges[3] = { startMin: 420, endMin: 1140 };
    ranges[5] = ALL_DAY_TIME_RANGE;
    const setTimeRanges = renderPicker(ranges);

    await userEvent.click(screen.getByRole("button", { name: "Copy to all" }));

    const next = setTimeRanges.mock.calls[0][0];
    expect(next[3]).toEqual({ startMin: 420, endMin: 1140 });
    expect(next[5]).toEqual({ startMin: 420, endMin: 1140 });
    expect(next[0]).toBeNull();
  });

  it("shows no 'Copy to all' when nothing is enabled", () => {
    renderPicker(noDays());

    expect(
      screen.queryByRole("button", { name: "Copy to all" })
    ).not.toBeInTheDocument();
  });
});
