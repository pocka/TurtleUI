import { html, LitElement, PropertyValues, TemplateResult } from "lit";
import { property } from "lit/decorators/property";
import { ifDefined } from "lit/directives/if-defined";

// https://lit.dev/docs/composition/mixins/#typing-the-superclass
type Constructor<T = {}> = new (...args: any[]) => T;

export interface PressableProps {
  /**
   * Whether the primary action (pressing) the element is disabled.
   */
  disabled: boolean;

  /**
   * Whether to use a slotted element as a button element.
   * You need to provide an Element to slot, instead of a TextFragment.
   */
  lightDOM: boolean;

  /**
   * Whether to manipulate slotted elements' attributes based on the element's ones.
   * Affects only when lightDOM is set to `true`.
   */
  syncAttributes: boolean;

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
 *
 * This mixin use these lifecycle hooks:
 *
 * - `updated`
 * - `connectedCallback`
 * - `disconnectedCallback`
 *
 * When you override these in a class uses this mixin, make sure to call super method at first.
 *
 * ```ts
 * class MyElement extends Pressable(LitElement) {
 *   connectedCallback() {
 *     super.connectedCallback();
 *
 *     // ...
 *   }
 * }
 * ```
 */
export function Pressable<T extends Constructor<LitElement>>(
  Base: T
): Constructor<PressableProps> & T {
  class PressableClass extends Base {
    @property({
      type: Boolean,
      reflect: true,
    })
    disabled: boolean = false;

    @property({
      type: Boolean,
      attribute: "lightdom",
    })
    lightDOM: boolean = false;

    @property({
      converter: {
        fromAttribute(value) {
          return value === "true";
        },
        toAttribute(value: boolean) {
          return String(value);
        },
      },
      attribute: "sync-attributes",
    })
    syncAttributes: boolean = true;

    override updated(changedProperties: PropertyValues<PressableClass>) {
      super.updated(changedProperties);

      if (
        this.shadowRoot &&
        this.lightDOM &&
        this.syncAttributes &&
        changedProperties.has("disabled")
      ) {
        this.#syncDisabledAttributeToLightDOM();
      }
    }

    override connectedCallback() {
      super.connectedCallback();

      this.addEventListener("click", this.#abortClickOnDisabledState, {
        capture: true,
      });
    }

    override disconnectedCallback() {
      super.disconnectedCallback();

      this.removeEventListener("click", this.#abortClickOnDisabledState, {
        capture: true,
      });
    }

    renderLightDOMSlot(className?: string) {
      return html`<slot id="lightdom" class=${ifDefined(className)}></slot>`;
    }

    /**
     * Mutate slotted elements' attribute base on `disabled` attribute value of the element.
     * For elements have `disabled` property, set empty string to `disabled` attribute when disabled and
     * remove the attribute when not.
     * For elements does not `disabled` property, set `"true"` to `aria-disabled` attribute when disabled
     * and set `"false"` to the attribute when not.
     */
    #syncDisabledAttributeToLightDOM() {
      const slot = this.shadowRoot!.getElementById(
        "lightdom"
      ) as HTMLSlotElement | null;
      if (!slot) {
        return;
      }

      const elements = slot.assignedElements();
      for (const el of elements) {
        if ("disabled" in el) {
          if (this.disabled) {
            el.setAttribute("disabled", "");
          } else {
            el.removeAttribute("disabled");
          }
        } else {
          el.setAttribute("aria-disabled", String(this.disabled));
        }
      }
    }

    /**
     * Cancel click event propagation and default behaviour when the component is in disabled state
     * and is used with lightDOM mode. Browsers does not emit `click` event when the element is
     * disabled, but does when the element only has `aria-disabled="true"`.
     */
    #abortClickOnDisabledState(ev: Event) {
      if (!this.lightDOM || !this.disabled) {
        return;
      }

      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  return PressableClass;
}
