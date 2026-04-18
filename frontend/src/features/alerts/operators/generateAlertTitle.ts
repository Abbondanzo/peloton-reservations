const formatList = (
  names: string[] | null,
  allLabel: string,
  countSuffix: string
): string => {
  if (!names || names.length === 0) return allLabel;
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} or ${names[1]}`;
  return `${names.length} ${countSuffix}`;
};

export const generateAlertTitle = (
  disciplineNames: string[] | null,
  instructorNames: string[] | null
): string => {
  const disciplinePart = formatList(
    disciplineNames,
    "Any Class",
    "Disciplines"
  );
  const instructorPart = formatList(
    instructorNames,
    "Any Instructor",
    "Instructors"
  );
  return `${disciplinePart} with ${instructorPart}`;
};
