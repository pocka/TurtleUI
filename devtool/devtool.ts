export interface Suite<Properties extends { [key: string]: any }> {
  /**
   * Display name of the suite.
   */
  displayName?: string;

  render(container: HTMLElement, props: Properties): void | (() => void);

  matrix?: {
    [K in keyof Properties]: Properties[K][];
  };
}

// dumb function
export function suite<T>(values: Suite<T>) {
  return values;
}
