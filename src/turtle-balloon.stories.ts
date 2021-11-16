import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleBalloon, TailPosition } from "./turtle-balloon";

interface Args {
  tailPosition: TailPosition;
  tailOffset: number;
}

export default {
  title: "Components/" + TurtleBalloon.defaultTagName,
  component: TurtleBalloon.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=19%3A1095",
    }),
  },
  args: {
    tailPosition: "bottom",
    tailOffset: 0.5,
  },
  argTypes: {
    tailOffset: {
      control: {
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    tailPosition: {
      control: { type: "radio" },
      options: ["left", "right", "bottom", "top"],
    },
    ...disableControls(["tail-position", "tail-offset"]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ tailOffset, tailPosition }) => html`
  <turtle-balloon tail-offset=${tailOffset} tail-position=${tailPosition}>
    Foo Bar Baz
  </turtle-balloon>
`;

export const Default = Template.bind({});
