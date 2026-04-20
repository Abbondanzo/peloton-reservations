export type Optional<T> = T | null;

export const isEmpty = <T>(optional: Optional<T>): optional is null =>
  optional === null || optional === undefined;

export const isNotEmpty = <T>(optional: Optional<T>): optional is T =>
  optional !== null && optional !== undefined;
