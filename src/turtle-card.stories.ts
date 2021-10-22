import type { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { config } from "storybook-addon-designs";

import landscapeJpg from "../.storybook/assets/landscape.jpg";
import landscapeWebp from "../.storybook/assets/landscape.webp";
import portraitJpg from "../.storybook/assets/portrait.jpg";
import portraitWebp from "../.storybook/assets/portrait.webp";
import { disableControls } from "../.storybook/helpers";

import { TurtleCard } from "./turtle-card";

interface Args {
  shadowed: boolean;
  bordered: boolean;
}

export default {
  title: "Components/turtle-card",
  component: TurtleCard.defaultTagName,
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=42%3A2083",
    }),
  },
  args: {
    shadowed: false,
    bordered: false,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ shadowed, bordered }) =>
  html`
    <turtle-card ?shadowed=${shadowed} ?bordered=${bordered}>
      I'm a card text.
    </turtle-card>
  `;

export const Default = Template.bind({});

export const Shadowed = Template.bind({});
Shadowed.args = {
  shadowed: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

export const WithTitle: Story<Args> = ({ shadowed, bordered }) => html`
  <turtle-card
    ?shadowed=${shadowed}
    ?bordered=${bordered}
    aria-labelledby="title"
  >
    <span id="title" slot="title">Title</span>

    Body text
  </turtle-card>
`;
WithTitle.args = {
  bordered: true,
};

const WithPicture: Story<Args & { jpg: string; webp: string }> = ({
  jpg,
  webp,
  shadowed,
  bordered,
}) => html`
  <turtle-card
    ?shadowed=${shadowed}
    ?bordered=${bordered}
    aria-labelledby="title"
  >
    <picture slot="image">
      <source srcset=${jpg} type="image/webp" />
      <img
        src=${webp}
        style="width: 100%; height: 100%; object-fit: cover;"
        alt=""
      />
    </picture>

    <span id="title" slot="title">Title</span>

    Body text
  </turtle-card>
`;

export const WithLandscapePicture = WithPicture.bind({});
WithLandscapePicture.args = {
  bordered: true,
  jpg: landscapeJpg,
  webp: landscapeWebp,
};

export const WithPortraitPicture = WithPicture.bind({});
WithPortraitPicture.args = {
  bordered: true,
  jpg: portraitJpg,
  webp: portraitWebp,
};

export const WithImg: Story<Args> = ({ shadowed, bordered }) => html`
  <turtle-card
    ?shadowed=${shadowed}
    ?bordered=${bordered}
    aria-labelledby="title"
  >
    <img slot="image" src=${landscapeJpg} alt="" />

    <span id="title" slot="title">Title</span>

    Body text
  </turtle-card>
`;
WithImg.args = {
  bordered: true,
};
