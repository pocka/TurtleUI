import { TurtleButton } from "./turtle-button";
import { TurtleDesignSystem } from "./turtle-design-system";

export { TurtleButton, TurtleDesignSystem };

/**
 * All of TurtleUI components.
 *
 * Convenient but prevents module bundler from tree-shaking.
 * Use this only when you use every components included in this list.
 */
export const allComponents = [TurtleButton, TurtleDesignSystem];

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
