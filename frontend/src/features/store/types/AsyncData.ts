export interface Fulfilled<T> {
  state: "fulfilled";
  data: T;
}

export interface Loading {
  state: "loading";
}

export interface Idle {
  state: "idle";
}

export interface Failed {
  state: "failed";
  error: Partial<Error>;
}

export type AsyncData<T> = Idle | Loading | Fulfilled<T> | Failed;
