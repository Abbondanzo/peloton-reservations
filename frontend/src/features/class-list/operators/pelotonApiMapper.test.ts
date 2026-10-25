import { captureMessage } from "@sentry/react";
import { buildRawClass, buildInstructor } from "shared/testing";
import { describe, expect, it, vi } from "vitest";
import { mapClasses, mapDisciplines, mapInstructors } from "./pelotonApiMapper";

const rawDiscipline = (overrides: Record<string, unknown> = {}) => ({
  id: 5,
  name: "Cycling",
  image: {
    url: "https://example.com/{width}x{height}/cycling.png",
    original_height: 96,
    original_width: 96,
  },
  ...overrides,
});

describe("mapInstructors", () => {
  it("normalizes ids to strings and renames the picture field", () => {
    const [instructor] = mapInstructors({
      results: [buildInstructor({ id: 7, name: "Robin" })],
    });
    expect(instructor).toEqual({
      id: "7",
      name: "Robin",
      imageUrl: "https://example.com/alex.png",
      display: true,
    });
  });

  it("sorts instructors by name", () => {
    const names = mapInstructors({
      results: [
        buildInstructor({ id: 1, name: "Robin" }),
        buildInstructor({ id: 2, name: "Alex" }),
        buildInstructor({ id: 3, name: "Emma" }),
      ],
    }).map((i) => i.name);
    expect(names).toEqual(["Alex", "Emma", "Robin"]);
  });

  it("returns nothing for an empty response", () => {
    expect(mapInstructors({ results: [] })).toEqual([]);
  });
});

describe("mapDisciplines", () => {
  it("substitutes the icon's own dimensions into its url template", () => {
    const [discipline] = mapDisciplines({ results: [rawDiscipline()] });
    expect(discipline).toEqual({
      id: "5",
      name: "Cycling",
      iconUrl: "https://example.com/96x96/cycling.png",
    });
  });

  it("falls back to 48px when the icon reports no dimensions", () => {
    const [discipline] = mapDisciplines({
      results: [
        rawDiscipline({
          image: {
            url: "https://example.com/{width}x{height}/x.png",
            original_height: 0,
            original_width: null,
          },
        }),
      ],
    });
    expect(discipline.iconUrl).toBe("https://example.com/48x48/x.png");
  });

  it("sorts disciplines by name", () => {
    const names = mapDisciplines({
      results: [
        rawDiscipline({ id: 1, name: "Yoga" }),
        rawDiscipline({ id: 2, name: "Cycling" }),
      ],
    }).map((d) => d.name);
    expect(names).toEqual(["Cycling", "Yoga"]);
  });
});

describe("mapClasses", () => {
  const mapOne = (overrides = {}) =>
    mapClasses({
      results: [
        {
          ...buildRawClass(overrides),
          offering_type: {
            ...buildRawClass().offering_type,
            category: rawDiscipline(),
          },
        },
      ],
    })[0];

  it("maps the fields the class list renders", () => {
    expect(mapOne()).toMatchObject({
      id: "100",
      name: "45 min Club Bangers Ride",
      start: "2026-04-29T09:00:00-04:00",
      end: "2026-04-29T09:45:00-04:00",
      customerUrl: "https://studio.onepeloton.com/classes/100",
      status: "free",
    });
  });

  it("computes the duration in seconds", () => {
    expect(mapOne().duration).toBe(45 * 60);
  });

  it("derives the bookable status from occupancy and waitlist", () => {
    expect(
      mapOne({ occupancy: 60, max_occupancy: 60, waiting_count: 2 }).status
    ).toBe("waitlist");
    expect(
      mapOne({ occupancy: 60, max_occupancy: 60, waiting_count: 10 }).status
    ).toBe("full");
  });

  it("uses the first instructor when a class has several", () => {
    const mapped = mapOne({
      instructors: [
        buildInstructor({ id: 1, name: "Alex" }),
        buildInstructor({ id: 2, name: "Robin" }),
      ],
    });
    expect(mapped.instructor).toMatchObject({ id: "1", name: "Alex" });
  });

  it("substitutes a placeholder instructor when the class has none", () => {
    expect(mapOne({ instructors: [] }).instructor).toEqual({
      id: "0",
      name: "Unknown Instructor",
      imageUrl: "",
      display: false,
    });
  });

  it("reports an unparseable duration to Sentry rather than throwing", () => {
    expect(mapOne({ ends_at: "not-a-date" }).duration).toBeNaN();
    expect(captureMessage).toHaveBeenCalledWith(
      "Computed invalid duration",
      expect.objectContaining({ extra: expect.anything() })
    );
  });

  it("does not report Sentry noise for a valid class", () => {
    mapOne();
    expect(captureMessage).not.toHaveBeenCalled();
  });

  it("maps every class in the response", () => {
    const results = [1, 2, 3].map((id) => ({
      ...buildRawClass({ id }),
      offering_type: {
        ...buildRawClass().offering_type,
        category: rawDiscipline(),
      },
    }));
    expect(mapClasses({ results }).map((c) => c.id)).toEqual(["1", "2", "3"]);
  });
});

describe("Sentry stub", () => {
  it("is mocked so tests never emit real events", () => {
    expect(vi.isMockFunction(captureMessage)).toBe(true);
  });
});
