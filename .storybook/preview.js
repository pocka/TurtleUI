import { themes } from "@storybook/theming";
import { setCustomElements } from "@storybook/web-components";
import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

import "./global.css";
import "./fonts/fonts.css";

import { allComponents, registerTurtleUIComponents } from "../src";

import TurtleButton from "../src/turtle-button?spec";
import TurtleCard from "../src/turtle-card?spec";
import TurtleCardAction from "../src/turtle-card-action?spec";
import TurtleDesignSystem from "../src/turtle-design-system?spec";
import TurtleRadioButton from "../src/turtle-radio-button?spec";
import TurtleTextbox from "../src/turtle-textbox?spec";
import TurtleToggleSwitch from "../src/turtle-toggle-switch?spec";

registerTurtleUIComponents(allComponents);

const components = [
  TurtleButton,
  TurtleCard,
  TurtleCardAction,
  TurtleDesignSystem,
  TurtleRadioButton,
  TurtleTextbox,
  TurtleToggleSwitch,
];

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
        "--turtle-ui--unit": "1rem",
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
