import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleCard } from "./turtle-card";

interface Args {
  shadowed: boolean;
  bordered: boolean;
}

export default {
  title: "Components/turtle-card",
  component: TurtleCard.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=42%3A2083",
    }),
  },
  args: {
    shadowed: false,
    bordered: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ shadowed, bordered }) =>
  html`
    <turtle-card ?shadowed=${shadowed} ?bordered=${bordered}>
      I'm a card text.
    </turtle-card>
  `;

export const Default = Template.bind({});

export const Shadowed = Template.bind({});
Shadowed.args = {
  shadowed: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

export const WithTitle: Story<Args> = ({ shadowed, bordered }) => html`
  <turtle-card
    ?shadowed=${shadowed}
    ?bordered=${bordered}
    aria-labelledby="title"
  >
    <span id="title" slot="title">Title</span>

    Body text
  </turtle-card>
`;
WithTitle.args = {
  bordered: true,
};
