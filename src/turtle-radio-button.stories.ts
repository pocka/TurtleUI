import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleRadioButton } from "./turtle-radio-button";

interface Args {
  disabled: boolean;
  defaultChecked: boolean;
}

export default {
  title: "Components/" + TurtleRadioButton.defaultTagName,
  component: TurtleRadioButton.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=21%3A297",
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
  <div>
    <turtle-radio-button>
      <input
        id="foo"
        type="radio"
        ?disabled=${disabled}
        ?checked=${defaultChecked}
        name="demo"
      />
    </turtle-radio-button>
    <label for="foo">Foo</label>
  </div>
  <br />
  <div>
    <turtle-radio-button>
      <input id="bar" type="radio" ?disabled=${disabled} name="demo" />
    </turtle-radio-button>
    <label for="bar">Bar</label>
  </div>
  <br />
  <div>
    <turtle-radio-button>
      <input id="baz" type="radio" ?disabled=${disabled} name="demo" />
    </turtle-radio-button>
    <label for="baz">Baz</label>
  </div>
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
