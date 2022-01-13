import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleDropZone } from "./turtle-drop-zone";

interface Args {
  disabled: boolean;
}

export default {
  title: "Components/" + TurtleDropZone.defaultTagName,
  component: TurtleDropZone.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/67XtAHAzMGNZLMuteAFCfX/Turtle-%F0%9F%90%A2-UI?node-id=509%3A1370",
    }),
  },
  args: {
    disabled: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ disabled }) => html`
  <turtle-drop-zone
    ?disabled=${disabled}
    @drop=${(ev: DragEvent) => {
      action("drop")(ev);
      console.info(ev.dataTransfer);
    }}
  >
    <turtle-file-upload-icon slot="icon"></turtle-file-upload-icon>

    Drop a file.
  </turtle-drop-zone>
`;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
