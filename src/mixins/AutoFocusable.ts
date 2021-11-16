import { LitElement, PropertyValues } from "lit";
import { property } from "lit/decorators/property";

// https://lit.dev/docs/composition/mixins/#typing-the-superclass
type Constructor<T = {}> = new (...args: any[]) => T;

export interface AutoFocusableProps {
  /**
   * Same to native `autofocus` element.
   */
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
