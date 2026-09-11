import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderWithStore } from "../../../test/renderWithStore";
import type { Instructor } from "../../class-list/types/Instructor";

const useGetInstructorsQuery = vi.fn();

vi.mock("../../class-list/services/pelotonApi", async (importOriginal) => ({
  ...(await importOriginal<
    typeof import("../../class-list/services/pelotonApi")
  >()),
  useGetInstructorsQuery: () => useGetInstructorsQuery(),
}));

const { InstructorsGroup } = await import("./InstructorsGroup");

const INSTRUCTORS: Instructor[] = [
  { id: "1", name: "Alex Toussaint", imageUrl: "", display: true },
  { id: "2", name: "Emma Lovewell", imageUrl: "", display: true },
  { id: "3", name: "Kendall Toole", imageUrl: "", display: true },
];

const renderGroup = () => {
  useGetInstructorsQuery.mockReturnValue({
    currentData: INSTRUCTORS,
    isLoading: false,
    error: undefined,
  });
  return renderWithStore(<InstructorsGroup />);
};

describe("InstructorsGroup search", () => {
  it("narrows the list to instructors matching the query", async () => {
    renderGroup();

    await userEvent.type(
      screen.getByRole("searchbox", { name: "Search instructors" }),
      "lovewell"
    );

    expect(screen.getByText("Emma Lovewell")).toBeInTheDocument();
    expect(screen.queryByText("Alex Toussaint")).not.toBeInTheDocument();
    expect(screen.queryByText("Kendall Toole")).not.toBeInTheDocument();
  });

  it("matches surnames case-insensitively, not just the start of a name", async () => {
    renderGroup();

    await userEvent.type(
      screen.getByRole("searchbox", { name: "Search instructors" }),
      "to"
    );

    expect(screen.getByText("Alex Toussaint")).toBeInTheDocument();
    expect(screen.getByText("Kendall Toole")).toBeInTheDocument();
    expect(screen.queryByText("Emma Lovewell")).not.toBeInTheDocument();
  });

  it("reports when nothing matches and restores the list once cleared", async () => {
    renderGroup();

    const input = screen.getByRole("searchbox", { name: "Search instructors" });
    await userEvent.type(input, "zzz");

    expect(screen.getByText(/No instructors match/)).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole("button", { name: "Clear search instructors" })
    );

    expect(input).toHaveValue("");
    expect(screen.getByText("Alex Toussaint")).toBeInTheDocument();
    expect(screen.getByText("Emma Lovewell")).toBeInTheDocument();
    expect(screen.getByText("Kendall Toole")).toBeInTheDocument();
  });

  it("keeps a hidden instructor selected while the query is active", async () => {
    const { store } = renderGroup();

    await userEvent.click(screen.getByText("Emma Lovewell"));
    await userEvent.type(
      screen.getByRole("searchbox", { name: "Search instructors" }),
      "kendall"
    );

    expect(screen.queryByText("Emma Lovewell")).not.toBeInTheDocument();
    expect(store.getState().filters.selectedInstructors).toEqual(["2"]);
  });
});
