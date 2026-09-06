import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../../test/renderWithTheme";
import type { DayMetrics } from "../hooks/useMetrics";
import type { InstructorSelloutStats } from "../hooks/useSelloutStats";

vi.mock("../../navigation/components/NavbarProvider", () => ({
  NavbarProvider: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

const useMetrics = vi.fn();
const useSelloutStats = vi.fn();

vi.mock("../hooks/useMetrics", () => ({
  useMetrics: () => useMetrics(),
}));

vi.mock("../hooks/useSelloutStats", () => ({
  useSelloutStats: () => useSelloutStats(),
}));

const { StatsRoot } = await import("./StatsRoot");

const DAYS: DayMetrics[] = ["2026-09-01", "2026-09-02"].map((date) => ({
  date,
  diffs: { "7248695": { added: 1, changed: 1, removed: 1 } },
  notifications: { sent: 2, failed: 0, usersReached: 2 },
}));

function instructors(count: number): InstructorSelloutStats[] {
  return Array.from({ length: count }, (_, i) => ({
    instructorId: `id-${i}`,
    // Zero-padded so alphabetical order matches creation order.
    instructorName: `Instructor ${String(i).padStart(2, "0")}`,
    classCount: 3,
    medianTimeToFullMs: 60_000,
  }));
}

describe("StatsRoot waitlist table", () => {
  beforeEach(() => {
    useMetrics.mockReturnValue({ state: "loaded", data: DAYS });
  });

  it("shows every instructor when there are ten or fewer", () => {
    useSelloutStats.mockReturnValue({ state: "loaded", data: instructors(10) });

    renderWithTheme(<StatsRoot />);

    expect(screen.getByText("Instructor 09")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /more instructor/ })
    ).not.toBeInTheDocument();
  });

  it("collapses to ten rows and expands on request", async () => {
    useSelloutStats.mockReturnValue({ state: "loaded", data: instructors(13) });

    renderWithTheme(<StatsRoot />);

    expect(screen.getByText("Instructor 09")).toBeInTheDocument();
    expect(screen.queryByText("Instructor 10")).not.toBeInTheDocument();

    const expand = screen.getByRole("button", {
      name: "Show 3 more instructors",
    });
    expect(expand).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(expand);

    expect(screen.getByText("Instructor 12")).toBeInTheDocument();

    const collapse = screen.getByRole("button", {
      name: "Show fewer instructors",
    });
    expect(collapse).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(collapse);

    expect(screen.queryByText("Instructor 10")).not.toBeInTheDocument();
  });
});
