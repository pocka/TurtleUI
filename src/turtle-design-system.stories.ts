import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleDesignSystem } from "./turtle-design-system";

interface Args {
  theme?: "dark" | "light";
}

export default {
  title: "Components/turtle-design-system",
  component: TurtleDesignSystem.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=19%3A698",
    }),
  },
  argTypes: {
    theme: {
      control: {
        type: "radio",
        options: ["light", "dark"],
      },
    },
    ...disableControls([]),
  },
} as Meta<Args>;

export const Default: Story<Args> = ({ theme }) =>
  html`<turtle-design-system theme=${ifDefined(theme)}>
    <p>Hello, World!</p>
  </turtle-design-system>`;
