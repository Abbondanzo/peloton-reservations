export const isEmpty = (optional: Optional<any>): optional is null => {
  return optional === null;
};

export const isNotEmpty = <T>(optional: Optional<T>): optional is T => {
  return optional !== null;
};
