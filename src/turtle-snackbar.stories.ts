import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/web-components";
import { html, nothing } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleSnackbar, Severity } from "./turtle-snackbar";
import { TurtleSnackbarAction } from "./turtle-snackbar-action";

interface Args {
  severity: Severity;
  lifetime?: number;
  lifetimeLabel?: string;
  actions?: boolean;
  autofocus?: boolean;
}

export default {
  title: "Components/" + TurtleSnackbar.defaultTagName,
  component: TurtleSnackbar.defaultTagName,
  subcomponents: {
    [TurtleSnackbarAction.defaultTagName]: TurtleSnackbarAction.defaultTagName,
  },
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=19%3A877",
    }),
  },
  args: {
    severity: "info",
    autofocus: false,
  },
  argTypes: {
    severity: {
      options: ["info", "success", "warning", "danger"],
      control: {
        type: "radio",
      },
    },
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({
  actions,
  autofocus,
  severity,
  lifetime,
  lifetimeLabel,
}) => html`
  <turtle-snackbar
    lifetime=${ifDefined(lifetime)}
    lifetime-label=${ifDefined(lifetimeLabel)}
    severity=${severity}
    @timerend=${action("timerend")}
    tabindex="-1"
    ?autofocus=${autofocus}
  >
    Foo Bar Baz
    ${actions
      ? html`
          <turtle-snackbar-action slot="action">
            Action 1
          </turtle-snackbar-action>
          <turtle-snackbar-action slot="action">
            Action 2
          </turtle-snackbar-action>
        `
      : nothing}
  </turtle-snackbar>
`;

export const Info = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  severity: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  severity: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  severity: "danger",
};

export const Lifetime = Template.bind({});
Lifetime.args = {
  lifetime: 5,
};

export const Actions = Template.bind({});
Actions.args = {
  actions: true,
};

export const FullFeature = Template.bind({});
FullFeature.args = {
  actions: true,
  lifetime: 15,
  lifetimeLabel: "Dismissed automatically in 15 seconds",
  autofocus: true,
};
