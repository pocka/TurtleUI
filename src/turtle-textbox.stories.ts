import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleTextbox } from "./turtle-textbox";

interface Args {
  disabled: boolean;
  defaultValue?: string;
  touched?: boolean;
  ariaInvalid?: boolean;
  placeholder?: string;
  noValidity: boolean;
}

export default {
  title: "Components/" + TurtleTextbox.defaultTagName,
  component: TurtleTextbox.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=16%3A211",
    }),
  },
  args: {
    disabled: false,
    noValidity: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({
  disabled,
  defaultValue,
  placeholder,
  ariaInvalid,
  touched,
  noValidity,
}) => html`
  <turtle-textbox ?touched=${touched} ?novalidity=${noValidity}>
    <input
      type="text"
      ?disabled=${disabled}
      ?touched=${touched}
      aria-invalid=${ifDefined(
        typeof ariaInvalid === "boolean"
          ? ariaInvalid
            ? "true"
            : "false"
          : ariaInvalid
      )}
      placeholder=${ifDefined(placeholder)}
      value=${ifDefined(defaultValue)}
      required
      aria-label="Demo"
    />
  </turtle-textbox>
`;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DefaultTouched = Template.bind({});
DefaultTouched.args = {
  touched: true,
};

export const AriaInvalid = Template.bind({});
AriaInvalid.storyName = "aria-invalid";
AriaInvalid.args = {
  ariaInvalid: true,
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: "default value",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Placeholder",
};

export const Sized: Story<Args> = ({ disabled }) => html`
  <turtle-textbox style="display: block; width: 25%;">
    <input
      type="email"
      placeholder="Enter an e-mail address"
      ?disabled=${disabled}
      aria-label="Demo"
    />
  </turtle-textbox>

  <br />

  <turtle-textbox style="display: block; width: 50%;">
    <input
      type="email"
      placeholder="Enter an e-mail address"
      ?disabled=${disabled}
      aria-label="Demo"
    />
  </turtle-textbox>

  <br />

  <turtle-textbox style="display: block; width: 100%;">
    <input
      type="email"
      placeholder="Enter an e-mail address"
      ?disabled=${disabled}
      aria-label="Demo"
    />
  </turtle-textbox>
`;

export const NoValidity = Template.bind({});
NoValidity.args = {
  noValidity: true,
};
