import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";
import { config } from "storybook-addon-designs";

import { disableControls } from "../../.storybook/helpers";

interface Args {
  color: string;
  fontSize: number;
}

export default {
  title: "Icons",
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=19%3A851",
    }),
  },
  args: {
    color: "",
    fontSize: 32,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ color, fontSize }) => html`
  <div
    style=${styleMap({
      display: "grid",
      "grid-template-columns": `repeat(auto-fill, ${fontSize}px)`,
      gap: "8px",
      color,
      "font-size": fontSize + "px",
    })}
  >
    <turtle-brand-icon title="<turtle-brand-icon>"></turtle-brand-icon>

    <turtle-circle-check-icon
      title="<turtle-circle-check-icon>"
    ></turtle-circle-check-icon>
    <turtle-circle-check-icon
      title="<turtle-circle-check-icon outlined>"
      outlined
    ></turtle-circle-check-icon>

    <turtle-attention-icon
      title="<turtle-attention-icon>"
    ></turtle-attention-icon>
    <turtle-attention-icon
      title="<turtle-attention-icon outlined>"
      outlined
    ></turtle-attention-icon>

    <turtle-cross-icon title="<turtle-cross-icon>"></turtle-cross-icon>

    <turtle-check-icon title="<turtle-check-icon>"></turtle-check-icon>

    <turtle-angle-icon
      direction="up"
      title='<turtle-angle-icon direction="up">'
    ></turtle-angle-icon>
    <turtle-angle-icon
      direction="down"
      title='<turtle-angle-icon direction="down">'
    ></turtle-angle-icon>
    <turtle-angle-icon
      direction="left"
      title='<turtle-angle-icon direction="left">'
    ></turtle-angle-icon>
    <turtle-angle-icon
      direction="right"
      title='<turtle-angle-icon direction="right">'
    ></turtle-angle-icon>

    <turtle-arrow-icon
      direction="up"
      title='<turtle-arrow-icon direction="up">'
    ></turtle-arrow-icon>
    <turtle-arrow-icon
      direction="down"
      title='<turtle-arrow-icon direction="down">'
    ></turtle-arrow-icon>
    <turtle-arrow-icon
      direction="left"
      title='<turtle-arrow-icon direction="left">'
    ></turtle-arrow-icon>
    <turtle-arrow-icon
      direction="right"
      title='<turtle-arrow-icon direction="right">'
    ></turtle-arrow-icon>

    <turtle-heart-icon title="<turtle-heart-icon>"></turtle-heart-icon>
    <turtle-heart-icon
      title="<turtle-heart-icon outlined>"
      outlined
    ></turtle-heart-icon>

    <turtle-question-icon title="<turtle-question-icon>"></turtle-question-icon>
    <turtle-question-icon
      title="<turtle-question-icon outlined>"
      outlined
    ></turtle-question-icon>

    <turtle-info-icon title="<turtle-info-icon>"></turtle-info-icon>
    <turtle-info-icon
      title="<turtle-info-icon outlined>"
      outlined
    ></turtle-info-icon>

    <turtle-reload-icon title="<turtle-reload-icon>"></turtle-reload-icon>

    <turtle-plus-icon title="<turtle-plus-icon>"></turtle-plus-icon>
    <turtle-minus-icon title="<turtle-minus-icon>"></turtle-minus-icon>

    <turtle-circle-plus-icon
      title="<turtle-circle-plus-icon>"
    ></turtle-circle-plus-icon>
    <turtle-circle-plus-icon
      title="<turtle-circle-plus-icon outlined>"
      outlined
    ></turtle-circle-plus-icon>

    <turtle-circle-minus-icon
      title="<turtle-circle-minus-icon>"
    ></turtle-circle-minus-icon>
    <turtle-circle-minus-icon
      title="<turtle-circle-minus-icon outlined>"
      outlined
    ></turtle-circle-minus-icon>

    <turtle-circle-cross-icon
      title="<turtle-circle-cross-icon>"
    ></turtle-circle-cross-icon>
    <turtle-circle-cross-icon
      title="<turtle-circle-cross-icon outlined>"
      outlined
    ></turtle-circle-cross-icon>

    <turtle-dots-icon title="<turtle-dots-icon>"></turtle-dots-icon>

    <turtle-terminal-icon title="<turtle-terminal-icon>"></turtle-terminal-icon>

    <turtle-first-page-icon
      title="<turtle-first-page-icon>"
    ></turtle-first-page-icon>

    <turtle-last-page-icon
      title="<turtle-last-page-icon>"
    ></turtle-last-page-icon>

    <turtle-file-upload-icon
      title="<turtle-file-upload-icon>"
    ></turtle-file-upload-icon>
  </div>
`;

export const List = Template.bind({});
