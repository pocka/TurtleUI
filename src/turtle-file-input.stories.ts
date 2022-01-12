import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/web-components";
import { html, nothing } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleFileInput } from "./turtle-file-input";

interface Args {
  ref: boolean;
  multiple: boolean;
  accept: string;
  capture: string;
  delimiter: string;
  disabled: boolean;
}

export default {
  title: "Components/" + TurtleFileInput.defaultTagName,
  component: TurtleFileInput.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/67XtAHAzMGNZLMuteAFCfX/Turtle-%F0%9F%90%A2-UI?node-id=447%3A1379",
    }),
  },
  args: {
    ref: false,
    capture: "",
    accept: "",
    multiple: false,
    delimiter: ", ",
    disabled: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({
  ref,
  capture,
  accept,
  multiple,
  delimiter,
  disabled,
}) => html`
  ${ref ? html`<input type="file" hidden id="file_el" />` : nothing}

  <turtle-file-input
    capture=${capture}
    accept=${accept}
    ?multiple=${multiple}
    delimiter=${delimiter}
    @selectfile=${action("selectfile")}
  >
    <turtle-button
      ?disabled=${disabled}
      aria-controls=${ifDefined(ref ? "file_el" : undefined)}
    >
      Launch
    </turtle-button>

    <span slot="placeholder">No file selected.</span>
  </turtle-file-input>
`;

export const Default = Template.bind({});
