import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleButton } from "./turtle-button";

interface Args {
  variant: TurtleButton["variant"];
  rounded: boolean;
  disabled: boolean;
}

export default {
  title: "Components/turtle-button",
  component: TurtleButton.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=6%3A7",
    }),
  },
  args: {
    variant: "normal",
    rounded: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["normal", "danger", "primary"] as TurtleButton["variant"][],
      control: {
        type: "radio",
      },
    },
    ...disableControls(["lightDOM", "lightdom", "sync-attributes"]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ disabled, rounded, variant }) =>
  html`<turtle-button
    variant=${variant}
    ?disabled=${disabled}
    ?rounded=${rounded}
    >Button</turtle-button
  >`;

export const Default = Template.bind({});

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const FullWidth: Story<Args> = ({ rounded, variant }) =>
  html`<turtle-button
    variant=${variant}
    ?rounded=${rounded}
    style=${styleMap({ display: "block", width: "100%" })}
    >Button</turtle-button
  >`;

export const LightDOM: Story<Args> = ({ variant, rounded, disabled }) =>
  html`
    <div>
      <turtle-button lightdom variant=${variant} ?rounded=${rounded}>
        <button ?disabled=${disabled}>Button</button>
      </turtle-button>
      <turtle-button lightdom variant=${variant} ?rounded=${rounded}>
        <a aria-disabled=${disabled ? "true" : "false"} href="#">Anchor</a>
      </turtle-button>
    </div>
  `;
