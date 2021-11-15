import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleCheckbox } from "./turtle-checkbox";

interface Args {
  disabled: boolean;
  defaultChecked: boolean;
  indeterminate: boolean;
}

export default {
  title: "Components/" + TurtleCheckbox.defaultTagName,
  component: TurtleCheckbox.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=21%3A279",
    }),
  },
  args: {
    disabled: false,
    defaultChecked: false,
    indeterminate: false,
  },
  argTypes: {
    ...disableControls(["sync"]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({
  disabled,
  defaultChecked,
  indeterminate,
}) => html`
  <turtle-checkbox>
    <input
      type="checkbox"
      ?disabled=${disabled}
      ?checked=${defaultChecked}
      .indeterminate=${indeterminate}
      aria-label="Demo"
    />
  </turtle-checkbox>
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

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};
