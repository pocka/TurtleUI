export function disableControls(
  argNames: string[],
  disableCommonArgs: boolean = true
): Record<string, any> {
  // web-component-analyzer cannot handle the new `override` keyword added in TS 4.3
  const names = [...argNames, "styles", "override"];

  return Object.fromEntries(
    names.map((name) => [name, { control: { disable: true } }])
  );
}
