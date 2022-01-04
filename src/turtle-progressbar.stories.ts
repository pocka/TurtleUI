import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleProgressbar } from "./turtle-progressbar";

interface Args {
  max: number;
  value: number;
}

export default {
  title: "Components/" + TurtleProgressbar.defaultTagName,
  component: TurtleProgressbar.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/67XtAHAzMGNZLMuteAFCfX/Turtle-%F0%9F%90%A2-UI?node-id=511%3A1636",
    }),
  },
  args: {
    max: 100,
    value: 70,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ value, max }) => html`
  <turtle-progressbar>
    <progress .value=${value} .max=${max} />
  </turtle-progressbar>
`;

export const Default = Template.bind({});
