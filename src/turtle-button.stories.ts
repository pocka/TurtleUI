import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";

import { TAG_NAME } from "./turtle-button";

export default {
  title: "Components/turtle-button",
  component: TAG_NAME,
} as Meta;

const Template: Story = () => html`<turtle-button>Button</turtle-button>`;

export const Default = Template.bind({});
