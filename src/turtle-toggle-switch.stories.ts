import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleToggleSwitch } from "./turtle-toggle-switch";

interface Args {
  disabled: boolean;
  defaultChecked: boolean;
}

export default {
  title: "Components/" + TurtleToggleSwitch.defaultTagName,
  component: TurtleToggleSwitch.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=21%3A801",
    }),
  },
  args: {
    disabled: false,
    defaultChecked: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ disabled, defaultChecked }) => html`
  <turtle-toggle-switch>
    <input
      type="checkbox"
      ?checked=${defaultChecked}
      ?disabled=${disabled}
      aria-label="Demo"
    />
  </turtle-toggle-switch>
`;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
};

