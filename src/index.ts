// Basic Components
import { TurtleButton } from "./turtle-button";
import { TurtleCard } from "./turtle-card";
import { TurtleCardAction } from "./turtle-card-action";
import { TurtleDesignSystem } from "./turtle-design-system";
import { TurtleList } from "./turtle-list";
import { TurtleListItem } from "./turtle-list-item";
import { TurtleRadioButton } from "./turtle-radio-button";
import { TurtleSelectbox } from "./turtle-selectbox";
import { TurtleTextbox } from "./turtle-textbox";
import { TurtleToggleSwitch } from "./turtle-toggle-switch";

// Icons
import { TurtleAngleIcon } from "./icons/turtle-angle-icon";
import { TurtleArrowIcon } from "./icons/turtle-arrow-icon";
import { TurtleAttentionIcon } from "./icons/turtle-attention-icon";
import { TurtleBrandIcon } from "./icons/turtle-brand-icon";
import { TurtleCheckIcon } from "./icons/turtle-check-icon";
import { TurtleCircleCheckIcon } from "./icons/turtle-circle-check-icon";
import { TurtleCircleCrossIcon } from "./icons/turtle-circle-cross-icon";
import { TurtleCircleMinusIcon } from "./icons/turtle-circle-minus-icon";
import { TurtleCirclePlusIcon } from "./icons/turtle-circle-plus-icon";
import { TurtleCrossIcon } from "./icons/turtle-cross-icon";
import { TurtleDotsIcon } from "./icons/turtle-dots-icon";
import { TurtleHeartIcon } from "./icons/turtle-heart-icon";
import { TurtleInfoIcon } from "./icons/turtle-info-icon";
import { TurtleMinusIcon } from "./icons/turtle-minus-icon";
import { TurtlePlusIcon } from "./icons/turtle-plus-icon";
import { TurtleQuestionIcon } from "./icons/turtle-question-icon";
import { TurtleReloadIcon } from "./icons/turtle-reload-icon";

export {
  // Basic Components
  TurtleButton,
  TurtleCard,
  TurtleCardAction,
  TurtleDesignSystem,
  TurtleList,
  TurtleListItem,
  TurtleRadioButton,
  TurtleSelectbox,
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
  TurtleHeartIcon,
  TurtleInfoIcon,
  TurtleMinusIcon,
  TurtlePlusIcon,
  TurtleQuestionIcon,
  TurtleReloadIcon,
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
  TurtleHeartIcon,
  TurtleInfoIcon,
  TurtleMinusIcon,
  TurtlePlusIcon,
  TurtleQuestionIcon,
  TurtleReloadIcon,
];

/**
 * All of TurtleUI components.
 *
 * Convenient but prevents module bundler from tree-shaking.
 * Use this only when you use every components included in this list.
 */
export const allComponents = [
  TurtleButton,
  TurtleCard,
  TurtleCardAction,
  TurtleDesignSystem,
  TurtleList,
  TurtleListItem,
  TurtleRadioButton,
  TurtleSelectbox,
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
