import { LitElement, PropertyValues } from "lit";
import { property } from "lit/decorators/property.js";

// https://lit.dev/docs/composition/mixins/#typing-the-superclass
type Constructor<T = {}> = new (...args: any[]) => T;

export interface AutoFocusableProps {
  autofocus: boolean;
}

/**
 * Add autofocus functionality to a component.
 * Currently, only Chrome handles `autofocus` attribute for Custom Elements.
 */
export function AutoFocusable<T extends Constructor<LitElement>>(
  Base: T
): Constructor<AutoFocusableProps> & T {
  class AutoFocusableClass extends Base {
    /**
     * Whether to recieve a focus when the element appears in the DOM tree.
     * Same to native `autofocus` attribute.
     */
    @property({
      type: Boolean,
    })
    autofocus: boolean = false;

    override firstUpdated(changedProperties: PropertyValues) {
      super.firstUpdated(changedProperties);

      if (this.autofocus) {
        this.focus();
      }
    }
  }

  return AutoFocusableClass;
}
