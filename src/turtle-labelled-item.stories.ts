import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleLabelledItem } from "./turtle-labelled-item";

interface Args {
  checkbox: boolean;
}

export default {
  title: "Components/" + TurtleLabelledItem.defaultTagName,
  component: TurtleLabelledItem.defaultTagName,
  parameters: {
    design: config([
      {
        name: "Checkbox",
        type: "figma",
        url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=21%3A302",
      },
      {
        name: "Radiobutton",
        type: "figma",
        url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=21%3A413",
      },
    ]),
  },
  args: {
    checkbox: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ checkbox }) => html`
  <turtle-labelled-item>
    <label slot="label" for="demo">Label</label>
    ${checkbox
      ? html`
          <turtle-checkbox><input id="demo" type="checkbox" /></turtle-checkbox>
        `
      : html`
          <turtle-radio-button>
            <input id="demo" type="radio" />
          </turtle-radio-button>
        `}
  </turtle-labelled-item>
`;

export const Radio = Template.bind({});

export const Checkbox = Template.bind({});
Checkbox.args = {
  checkbox: true,
};
