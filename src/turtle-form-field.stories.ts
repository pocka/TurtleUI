import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleFormField } from "./turtle-form-field";

interface Args {
  fullwidth: boolean;
  selectbox: boolean;
}

export default {
  title: "Components/" + TurtleFormField.defaultTagName,
  component: TurtleFormField.defaultTagName,
  parameters: {
    design: config([
      {
        name: "textbox",
        type: "figma",
        url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=21%3A549",
      },
      {
        name: "selectbox",
        type: "figma",
        url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=21%3A647",
      },
    ]),
  },
  args: {
    fullwidth: false,
    selectbox: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ fullwidth, selectbox }) => html`
  <turtle-form-field style=${ifDefined(fullwidth ? "width: 100%;" : undefined)}>
    <label slot="label" for="demo">Label</label>
    ${selectbox
      ? html`
          <turtle-selectbox>
            <select id="demo">
              <option>Foo</option>
              <option selected>Bar</option>
            </select>
          </turtle-selectbox>
        `
      : html`
          <turtle-textbox>
            <input id="demo" type="email" placeholder="foo@example.com" />
          </turtle-textbox>
        `}
    <span slot="description">Description</span>
  </turtle-form-field>
`;

export const Default = Template.bind({});

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullwidth: true,
};

export const Selectbox = Template.bind({});
Selectbox.args = {
  selectbox: true,
};
