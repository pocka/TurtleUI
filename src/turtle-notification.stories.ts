import type { Meta, Story } from "@storybook/web-components";
import { html, nothing } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleNotification } from "./turtle-notification";
import { TurtleNotificationAction } from "./turtle-notification-action";

interface Args {
  icon: boolean;
  image?: string;
  singleAction?: boolean;
}

export default {
  title: "Components/" + TurtleNotification.defaultTagName,
  component: TurtleNotification.defaultTagName,
  subcomponents: {
    [TurtleNotificationAction.defaultTagName]:
      TurtleNotificationAction.defaultTagName,
  },
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=19%3A937",
    }),
  },
  args: {
    icon: false,
    singleAction: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ icon, image, singleAction }) => html`
  <turtle-notification>
    ${icon
      ? html`<turtle-brand-icon slot="image"></turtle-brand-icon>`
      : image
      ? html`<img src=${image} alt="Demo" slot="image" />`
      : nothing}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit diam
    sit amet lorem luctus accumsan. Etiam eu mauris eget risus molestie
    tincidunt. Fusce eu dui sit amet ipsum commodo lobortis. Cras quis dignissim
    quam. Duis accumsan convallis nulla, non hendrerit mauris hendrerit a. In
    sed quam vel velit ultricies dignissim. Nulla efficitur rhoncus sapien, eget
    venenatis nibh pellentesque sit amet. Suspendisse iaculis porta ex eget
    mattis. Vestibulum elit tellus, eleifend ac ex in, euismod pulvinar sapien.
    Aliquam elementum semper ultricies. Integer lobortis vestibulum risus, quis
    volutpat massa sodales at. Nam congue non leo non auctor. Proin nisi nisi,
    accumsan ac semper et, posuere lobortis libero.

    <turtle-notification-action slot="action">
      Action
    </turtle-notification-action>
    ${singleAction
      ? nothing
      : html`
          <turtle-notification-action slot="action" lightdom>
            <a href="#" target="_blank" rel="noopener">Action Link</a>
          </turtle-notification-action>
        `}
  </turtle-notification>
`;

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
  image: "https://avatars.githubusercontent.com/u/13316015?v=4",
};

export const SingleAction = Template.bind({});
SingleAction.args = {
  singleAction: true,
};
