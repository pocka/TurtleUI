import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleAvatar } from "./turtle-avatar";

interface Args {
  bordered: boolean;
  src?: string;
  defaultAlt?: string;
}

export default {
  title: "Components/" + TurtleAvatar.defaultTagName,
  component: TurtleAvatar.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=42%3A2412",
    }),
  },
  args: {
    bordered: false,
    src: undefined,
    defaultAlt: "Demo",
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ bordered, src, defaultAlt }) => html`
  <turtle-avatar ?bordered=${bordered} placeholder-alt=${ifDefined(defaultAlt)}
    >${src
      ? html`<img src=${ifDefined(src)} alt="Demo" />`
      : undefined}</turtle-avatar
  >
`;

export const Default = Template.bind({});
Default.args = {
  src: "https://avatars.githubusercontent.com/u/13316015?v=4",
};

export const Empty = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};
