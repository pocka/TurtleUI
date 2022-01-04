// Basic Components
import { TurtleAvatar } from "./turtle-avatar.js";
import { TurtleBalloon } from "./turtle-balloon.js";
import { TurtleButton } from "./turtle-button.js";
import { TurtleButtonGroup } from "./turtle-button-group";
import { TurtleCard } from "./turtle-card.js";
import { TurtleCardAction } from "./turtle-card-action.js";
import { TurtleCheckbox } from "./turtle-checkbox.js";
import { TurtleCommandPalette } from "./turtle-command-palette.js";
import { TurtleCommandPaletteListbox } from "./turtle-command-palette-listbox.js";
import { TurtleCommandPaletteOption } from "./turtle-command-palette-option.js";
import { TurtleDesignSystem } from "./turtle-design-system.js";
import { TurtleFormField } from "./turtle-form-field";
import { TurtleLabelledItem } from "./turtle-labelled-item";
import { TurtleList } from "./turtle-list.js";
import { TurtleListItem } from "./turtle-list-item.js";
import { TurtleNotification } from "./turtle-notification.js";
import { TurtleNotificationAction } from "./turtle-notification-action.js";
import { TurtlePill } from "./turtle-pill.js";
import { TurtleRadioButton } from "./turtle-radio-button.js";
import { TurtleSelectbox } from "./turtle-selectbox.js";
import { TurtleSnackbar } from "./turtle-snackbar.js";
import { TurtleSnackbarAction } from "./turtle-snackbar-action.js";
import { TurtleTextbox } from "./turtle-textbox.js";
import { TurtleToggleSwitch } from "./turtle-toggle-switch.js";

// Icons
import { TurtleAngleIcon } from "./icons/turtle-angle-icon.js";
import { TurtleArrowIcon } from "./icons/turtle-arrow-icon.js";
import { TurtleAttentionIcon } from "./icons/turtle-attention-icon.js";
import { TurtleBrandIcon } from "./icons/turtle-brand-icon.js";
import { TurtleCheckIcon } from "./icons/turtle-check-icon.js";
import { TurtleCircleCheckIcon } from "./icons/turtle-circle-check-icon.js";
import { TurtleCircleCrossIcon } from "./icons/turtle-circle-cross-icon.js";
import { TurtleCircleMinusIcon } from "./icons/turtle-circle-minus-icon.js";
import { TurtleCirclePlusIcon } from "./icons/turtle-circle-plus-icon.js";
import { TurtleCrossIcon } from "./icons/turtle-cross-icon.js";
import { TurtleDotsIcon } from "./icons/turtle-dots-icon.js";
import { TurtleFileUploadIcon } from "./icons/turtle-file-upload-icon.js";
import { TurtleFirstPageIcon } from "./icons/turtle-first-page-icon.js";
import { TurtleHeartIcon } from "./icons/turtle-heart-icon.js";
import { TurtleInfoIcon } from "./icons/turtle-info-icon.js";
import { TurtleLastPageIcon } from "./icons/turtle-last-page-icon.js";
import { TurtleMinusIcon } from "./icons/turtle-minus-icon.js";
import { TurtlePlusIcon } from "./icons/turtle-plus-icon.js";
import { TurtleQuestionIcon } from "./icons/turtle-question-icon.js";
import { TurtleReloadIcon } from "./icons/turtle-reload-icon.js";
import { TurtleTerminalIcon } from "./icons/turtle-terminal-icon.js";

export {
  // Basic Components
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
  TurtleFormField,
  TurtleLabelledItem,
  TurtleList,
  TurtleListItem,
  TurtleNotification,
  TurtleNotificationAction,
  TurtlePill,
  TurtleRadioButton,
  TurtleSelectbox,
  TurtleSnackbar,
  TurtleSnackbarAction,
  TurtleTextbox,
  TurtleToggleSwitch,
  // Icons
  TurtleAngleIcon,
  TurtleArrowIcon,
  TurtleAttentionIcon,
  TurtleBrandIcon,
  TurtleCheckIcon,
  TurtleCircleCheckIcon,
  TurtleCircleCrossIcon,
  TurtleCircleMinusIcon,
  TurtleCirclePlusIcon,
  TurtleCrossIcon,
  TurtleDotsIcon,
  TurtleFileUploadIcon,
  TurtleFirstPageIcon,
  TurtleHeartIcon,
  TurtleInfoIcon,
  TurtleLastPageIcon,
  TurtleMinusIcon,
  TurtlePlusIcon,
  TurtleQuestionIcon,
  TurtleReloadIcon,
  TurtleTerminalIcon,
};

export const icons = [
  TurtleAngleIcon,
  TurtleArrowIcon,
  TurtleAttentionIcon,
  TurtleBrandIcon,
  TurtleCheckIcon,
  TurtleCircleCheckIcon,
  TurtleCircleCrossIcon,
  TurtleCircleMinusIcon,
  TurtleCirclePlusIcon,
  TurtleCrossIcon,
  TurtleDotsIcon,
  TurtleFileUploadIcon,
  TurtleFirstPageIcon,
  TurtleHeartIcon,
  TurtleInfoIcon,
  TurtleLastPageIcon,
  TurtleMinusIcon,
  TurtlePlusIcon,
  TurtleQuestionIcon,
  TurtleReloadIcon,
  TurtleTerminalIcon,
];

/**
 * All of TurtleUI components.
 *
 * Convenient but prevents module bundler from tree-shaking.
 * Use this only when you use every components included in this list.
 */
export const allComponents = [
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
  TurtleFormField,
  TurtleLabelledItem,
  TurtleList,
  TurtleListItem,
  TurtleNotification,
  TurtleNotificationAction,
  TurtlePill,
  TurtleRadioButton,
  TurtleSelectbox,
  TurtleSnackbar,
  TurtleSnackbarAction,
  TurtleTextbox,
  TurtleToggleSwitch,
  ...icons,
];

export interface TurtleComponent {
  defaultTagName: string;
}

export type ComponentRegistration =
  | (TurtleComponent & CustomElementConstructor)
  | [string, CustomElementConstructor];

/**
 * Register CustomElements provided by TurtleUI.
 *
 * @param components List of a CustomElements constructor or a tuple of [tag name, CustomElements constructor]
 */
export function registerTurtleUIComponents(
  components: ComponentRegistration[]
): void {
  for (const c of components) {
    const [tagName, elementConstructor] =
      "defaultTagName" in c ? [c.defaultTagName, c] : c;

    if (!customElements.get(tagName)) {
      customElements.define(tagName, elementConstructor);
    }
  }
}
