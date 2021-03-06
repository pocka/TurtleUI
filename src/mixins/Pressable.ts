import { html, LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators/property.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { wormhole } from "../directives/wormhole.js";

// https://lit.dev/docs/composition/mixins/#typing-the-superclass
type Constructor<T = {}> = new (...args: any[]) => T;

export interface PressableProps {
  disabled: boolean;

  lightDOM: boolean;

  /**
   * Renders <slot> element for light DOM placement.
   * Classes that use this mixin MUST include the result of this method when `lightDOM`
   * property is `true`.
   *
   * @example
   * class MyElement extends Pressable(LitElement) {
   *   override render() {
   *     return html`
   *       <span>Foo</span>
   *
   *       ${this.lightDOM
   *         ? this.renderLightDOMSlot()
   *         : html`<button><slot></slot></button>`
   *       }
   *     `
   *   }
   * }
   */
  renderLightDOMSlot(className?: string): TemplateResult;
}

/**
 * A helper mixin for button-like pressable elements that support light DOM approach.
 */
export function Pressable<T extends Constructor<LitElement>>(
  Base: T
): Constructor<PressableProps> & T {
  class PressableClass extends Base {
    /**
     * Whether the element itself is disabled or not.
     *
     * When the `lightDOM` property is `true`, this property does not affect to anything.
     * Specify `disabled` or `aria-disabled` attribute for the slotted element (e.g. `<button disabled/>`, `<a aria-disabled="true"/>`).
     */
    @property({
      type: Boolean,
      reflect: true,
    })
    disabled: boolean = false;

    /**
     * Whether to use a slotted element as a button element.
     * You need to provide an Element to slot, instead of a TextFragment.
     */
    @property({
      type: Boolean,
      attribute: "lightdom",
    })
    lightDOM: boolean = false;

    /**
     * Slotted element's disabled state.
     */
    #disabled: boolean = false;

    #attributeSyncObserver = new MutationObserver((mutations) => {
      if (!mutations[0]) {
        return;
      }

      this.#disabled = isDisabledElement(mutations[0].target as HTMLElement);
    });

    renderLightDOMSlot(className?: string) {
      return html`<slot id="lightdom" class=${ifDefined(className)}>
        ${wormhole((el: Element | HTMLButtonElement) => {
          if (!("getAttribute" in el)) {
            return;
          }

          this.#disabled = isDisabledElement(el);

          el.addEventListener("click", this.#onSlottedElementClicked);

          this.#attributeSyncObserver.observe(el, {
            attributes: true,
            attributeFilter: ["disabled", "aria-disabled"],
          });

          return () => {
            el.removeEventListener("click", this.#onSlottedElementClicked);

            this.#attributeSyncObserver.disconnect();
          };
        })}
      </slot>`;
    }

    #onSlottedElementClicked = (ev: Event) => {
      if (!this.#disabled) {
        return;
      }

      ev.preventDefault();
      ev.stopPropagation();
    };
  }

  return PressableClass;
}

function isDisabledElement(el: Element | HTMLButtonElement): boolean {
  const ariaDisabled = el.getAttribute("aria-disabled");
  if (ariaDisabled) {
    return ariaDisabled === "true";
  }

  if ("disabled" in el) {
    return el.disabled;
  }

  return false;
}
