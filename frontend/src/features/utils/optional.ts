export const isEmpty = <T>(optional: Optional<T>): optional is null => {
  return optional === null || optional === undefined;
};

export const isNotEmpty = <T>(optional: Optional<T>): optional is T => {
  return optional !== null && optional !== undefined;
};
