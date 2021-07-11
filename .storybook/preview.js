import { setCustomElements } from "@storybook/web-components";

import TurtleButton from "../src/turtle-button?spec";

const components = [TurtleButton];

const spec = components.reduce(
  (a, b) => ({ ...a, ...b, tags: [...a.tags, ...b.tags] }),
  { tags: [] }
);

setCustomElements(spec);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
