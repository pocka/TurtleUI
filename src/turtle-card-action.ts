import { css, LitElement, html, PropertyValues } from "lit";
import { property } from "lit/decorators/property";
import { minireset } from "minireset.css/minireset.css.lit.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCardAction.defaultTagName]: TurtleCardAction;
  }
}

/**
 * @element turtle-card-action
 */
export class TurtleCardAction extends LitElement {
  static defaultTagName = "turtle-card-action" as const;

  @property({
    type: Boolean,
  })
  disabled: boolean = false;

  /**
   * TODO: Refactor
   * Whether to use a slotted element as a button element.
   * You need to provide an Element to slot, instead of a TextFragment.
   *
   * When `sync-attributes` attribute is set to `true` (default) or `syncAttributes` property is set to `true`,
   * <turtle-card-action> sets slotted elements' `disabled` or `aria-disabled` attribute to sync to
   * the value of the `disabled` attribute in <turtle-card-action>. If you set `disabled` or `aria-disabled`
   * attribute for the slotted elements, set `sync-attributes="false"`.
   *
   * @example
   * <turtle-card-action lightdom>
   *   <button type="submit">Button</button>
   * </turtle-card-action>
   */
  @property({
    type: Boolean,
    attribute: "lightdom",
  })
  lightDOM: boolean = false;

  /**
   * Whether to manipulate slotted elements' attributes based on <turtle-card-action>'s ones.
   * Affects only when lightDOM is set to `true`.
   *
   * You need to manually set attributes based on component state.
   */
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

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          flex: 1;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 12px;
          font: inherit;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          border: none;

          background: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: inherit;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          cursor: pointer;
          font-weight: normal;
          outline: none;
          text-align: center;
          text-decoration: none;
          user-select: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        .button:active,
        ::slotted(:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--color--highlight--shadow) inset;
        }
        .button:disabled,
        ::slotted(:disabled),
        ::slotted([aria-disabled="true"]) {
          box-shadow: none;
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          cursor: not-allowed;
        }
      `,
    ];
  }

  override render() {
    return this.lightDOM
      ? html`<slot id="lightdom"></slot>`
      : html`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;
  }

  override updated(changedProperties: PropertyValues<TurtleCardAction>) {
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

  /**
   * Mutate slotted elements' attribute base on `disabled` attribute value of <turtle-button>.
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
