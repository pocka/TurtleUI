import { themes } from "@storybook/theming";
import { setCustomElements } from "@storybook/web-components";
import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

import "./global.css";
import "./fonts/fonts.css";

import { allComponents, registerTurtleUIComponents } from "../src";

import TurtleAvatar from "../src/turtle-avatar?spec";
import TurtleBalloon from "../src/turtle-balloon?spec";
import TurtleButton from "../src/turtle-button?spec";
import TurtleButtonGroup from "../src/turtle-button-group?spec";
import TurtleCard from "../src/turtle-card?spec";
import TurtleCardAction from "../src/turtle-card-action?spec";
import TurtleCheckbox from "../src/turtle-checkbox?spec";
import TurtleCommandPalette from "../src/turtle-command-palette?spec";
import TurtleCommandPaletteListbox from "../src/turtle-command-palette-listbox?spec";
import TurtleCommandPaletteOption from "../src/turtle-command-palette-option?spec";
import TurtleDesignSystem from "../src/turtle-design-system?spec";
import TurtleDropZone from "../src/turtle-drop-zone?spec";
import TurtleFileInput from "../src/turtle-file-input?spec";
import TurtleFormField from "../src/turtle-form-field?spec";
import TurtleLabelledItem from "../src/turtle-labelled-item?spec";
import TurtleList from "../src/turtle-list?spec";
import TurtleListItem from "../src/turtle-list-item?spec";
import TurtleNotification from "../src/turtle-notification?spec";
import TurtleNotificationAction from "../src/turtle-notification-action?spec";
import TurtlePill from "../src/turtle-pill?spec";
import TurtleProgressbar from "../src/turtle-progressbar?spec";
import TurtleRadioButton from "../src/turtle-radio-button?spec";
import TurtleSelectbox from "../src/turtle-selectbox?spec";
import TurtleSnackbar from "../src/turtle-snackbar?spec";
import TurtleSnackbarAction from "../src/turtle-snackbar-action?spec";
import TurtleTextbox from "../src/turtle-textbox?spec";
import TurtleToggleSwitch from "../src/turtle-toggle-switch?spec";

registerTurtleUIComponents(allComponents);

const components = [
  TurtleAvatar,
  TurtleBalloon,
  TurtleButton,
  TurtleButtonGroup,
  TurtleCard,
  TurtleCardAction,
  TurtleCheckbox,
  TurtleCommandPalette,
  TurtleCommandPaletteListbox,
  TurtleCommandPaletteOption,
  TurtleDesignSystem,
  TurtleDropZone,
  TurtleFileInput,
  TurtleFormField,
  TurtleLabelledItem,
  TurtleList,
  TurtleListItem,
  TurtleNotification,
  TurtleNotificationAction,
  TurtlePill,
  TurtleProgressbar,
  TurtleRadioButton,
  TurtleSelectbox,
  TurtleSnackbar,
  TurtleSnackbarAction,
  TurtleTextbox,
  TurtleToggleSwitch,
];

const spec = components.reduce(
  (a, b) => ({ ...a, ...b, tags: [...a.tags, ...b.tags] }),
  { tags: [] }
);

setCustomElements(spec);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.light },
  },
};

export const decorators = [
  (story, { parameters }) =>
    html`<turtle-design-system
      style=${styleMap({
        "--turtle-ui--unit": "1rem",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "auto",
        padding: parameters.layout === "fullscreen" ? "0" : "1em",
        boxSizing: "border-box",
      })}
      >${story()}</turtle-design-system
    >`,
];
