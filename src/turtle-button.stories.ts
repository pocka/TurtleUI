import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import { TAG_NAME } from "./turtle-button";

export default {
  title: "Components/turtle-button",
  component: TAG_NAME,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=6%3A7",
    }),
  },
} as Meta;

const Template: Story = () => html`<turtle-button>Button</turtle-button>`;

export const Default = Template.bind({});
