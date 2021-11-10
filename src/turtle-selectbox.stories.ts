import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleSelectbox } from "./turtle-selectbox";

interface Args {
  disabled: boolean;
  touched?: boolean;
  ariaInvalid?: boolean;
}

export default {
  title: "Components/" + TurtleSelectbox.defaultTagName,
  component: TurtleSelectbox.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=16%3A461",
    }),
  },
  args: {
    disabled: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ disabled, touched, ariaInvalid }) => html`
  <turtle-selectbox ?touched=${touched}>
    <select
      ?disabled=${disabled}
      required
      aria-invalid=${ifDefined(
        typeof ariaInvalid === "boolean"
          ? ariaInvalid
            ? "true"
            : "false"
          : ariaInvalid
      )}
      aria-label="Demo"
    >
      <option value="foo">Foo</option>
      <option value="bar" selected>Bar</option>
      <option value="baz">Baz</option>
    </select>
  </turtle-selectbox>
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
AriaInvalid.args = {
  ariaInvalid: false,
};

export const DefaultInvalid = Template.bind({});
DefaultInvalid.args = {
  touched: true,
  ariaInvalid: true,
};
