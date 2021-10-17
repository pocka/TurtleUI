import { themes } from "@storybook/theming";
import { setCustomElements } from "@storybook/web-components";
import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

import "./fonts/fonts.css";
import "../src/turtle-design-system";

import TurtleButton from "../src/turtle-button?spec";
import TurtleDesignSystem from "../src/turtle-design-system?spec";

const components = [TurtleButton, TurtleDesignSystem];

const spec = components.reduce(
  (a, b) => ({ ...a, ...b, tags: [...a.tags, ...b.tags] }),
  { tags: [] }
);

setCustomElements(spec);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.light },
  },
};

export const decorators = [
  (story, { parameters }) =>
    html`<turtle-design-system
      style=${styleMap({
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "auto",
        padding: parameters.layout === "fullscreen" ? "0" : "1em",
        boxSizing: "border-box",
      })}
      >${story()}</turtle-design-system
    >`,
];
