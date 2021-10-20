export function disableControls(
  argNames: string[],
  disableCommonArgs: boolean = true
): Record<string, any> {
  // web-component-analyzer cannot handle the new `override` keyword added in TS 4.3
  const disabledControls = Object.fromEntries(
    argNames.map((name) => [name, { control: { disable: true } }])
  );

  const hiddenArgs = disableCommonArgs
    ? {
        override: { table: { disable: true } },
        styles: { table: { disable: true } },
        defaultTagName: { table: { disable: true } },
      }
    : {};

  return {
    ...disabledControls,
    ...hiddenArgs,
  };
}
