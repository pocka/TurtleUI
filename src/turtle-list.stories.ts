import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleList } from "./turtle-list";
import { TurtleListItem } from "./turtle-list-item";

interface Args {
  disabled: boolean;
  startIcon: boolean;
  endIcon: boolean;
  fullWidth: boolean;
}

export default {
  title: "Components/" + TurtleList.defaultTagName,
  component: TurtleList.defaultTagName,
  subcomponents: {
    [TurtleListItem.defaultTagName]: TurtleListItem.defaultTagName,
  },
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=41%3A342",
    }),
  },
  args: {
    disabled: false,
    startIcon: false,
    endIcon: false,
    fullWidth: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({
  disabled,
  startIcon,
  endIcon,
  fullWidth,
}) => html`
  <turtle-list
    style=${styleMap({
      border:
        "1px solid hsl(var(--turtle-ui--color--tone--primary), var(--turtle-ui--color--level--4))",
      width: fullWidth ? "100%" : "auto",
    })}
  >
    <turtle-list-item ?disabled=${disabled}>
      ${startIcon
        ? html`<turtle-brand-icon slot="icon-start"></turtle-brand-icon>`
        : null}
      Foo
      ${endIcon
        ? html`<turtle-angle-icon
            slot="icon-end"
            direction="right"
          ></turtle-angle-icon>`
        : null}
    </turtle-list-item>
    <turtle-list-item lightdom>
      ${startIcon
        ? html`<turtle-brand-icon slot="icon-start"></turtle-brand-icon>`
        : null}
      <button ?disabled=${disabled}>Bar</button>
      ${endIcon
        ? html`<turtle-angle-icon
            slot="icon-end"
            direction="right"
          ></turtle-angle-icon>`
        : null}
    </turtle-list-item>
    <turtle-list-item lightdom>
      ${startIcon
        ? html`<turtle-brand-icon slot="icon-start"></turtle-brand-icon>`
        : null}
      <a
        href="#"
        target="_blank"
        rel="noopener"
        aria-disabled=${disabled ? "true" : "false"}
        >Long name</a
      >
      ${endIcon
        ? html`<turtle-angle-icon
            slot="icon-end"
            direction="right"
          ></turtle-angle-icon>`
        : null}
    </turtle-list-item>
  </turtle-list>
`;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  startIcon: true,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  endIcon: true,
};

export const WithBothIcon = Template.bind({});
WithBothIcon.args = {
  startIcon: true,
  endIcon: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  startIcon: true,
  endIcon: true,
  fullWidth: true,
};
