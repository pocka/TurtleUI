import type { Meta, Story } from "@storybook/web-components";
import { html, nothing } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtlePill } from "./turtle-pill";

interface Args {
  pressable: boolean;

  icon: boolean;
  actionIcon: boolean;
}

export default {
  title: "Components/" + TurtlePill.defaultTagName,
  component: TurtlePill.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/67XtAHAzMGNZLMuteAFCfX/Turtle-%F0%9F%90%A2-UI?node-id=415%3A1685",
    }),
  },
  args: {
    pressable: false,
    icon: false,
    actionIcon: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ pressable, icon, actionIcon }) => html`
  <turtle-pill ?pressable=${pressable}>
    ${icon
      ? html`<turtle-brand-icon slot="icon"></turtle-brand-icon>`
      : nothing}
    Text
    ${actionIcon
      ? html`<turtle-circle-cross-icon
          slot="action-icon"
        ></turtle-circle-cross-icon>`
      : nothing}
  </turtle-pill>
`;

export const Default = Template.bind({});

export const Pressable = Template.bind({});
Pressable.args = {
  pressable: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: true,
};

export const WithActionIcon = Template.bind({});
WithActionIcon.args = {
  pressable: true,
  actionIcon: true,
};

export const LightDOM: Story = () => html`
  <turtle-pill lightdom>
    <turtle-file-upload-icon slot="icon"></turtle-file-upload-icon>

    <a href="#">SUBMIT CONTENT</a>

    <turtle-check-icon slot="action-icon"></turtle-check-icon>
  </turtle-pill>
`;
