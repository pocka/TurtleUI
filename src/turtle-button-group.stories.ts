import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleButtonGroup } from "./turtle-button-group";

interface Args {
  evenly: boolean;
  rounded: boolean;
}

export default {
  title: "Components/" + TurtleButtonGroup.defaultTagName,
  component: TurtleButtonGroup.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=36%3A591",
    }),
  },
  args: {
    evenly: false,
    rounded: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ evenly, rounded }) => html`
  <turtle-button-group
    ?evenly=${evenly}
    style=${ifDefined(evenly ? "display: flex;" : undefined)}
  >
    <turtle-button variant="primary" ?rounded=${rounded}>Button</turtle-button>
    <turtle-button lightdom ?rounded=${rounded}>
      <button>LightDOM Button</button>
    </turtle-button>
    <turtle-button lightdom ?rounded=${rounded}>
      <a href="#">LightDOM Button (Anchor Link)</a>
    </turtle-button>
  </turtle-button-group>
`;

export const Default = Template.bind({});

export const Evenly = Template.bind({});
Evenly.args = {
  evenly: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};
