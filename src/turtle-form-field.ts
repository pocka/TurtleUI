import { css, LitElement, html } from "lit";
import { state } from "lit/decorators/state.js";

import { wormhole } from "./directives/wormhole.js";
import { minireset } from "./minireset.js";
import type { TurtleTextbox } from "./turtle-textbox";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleFormField.defaultTagName]: TurtleFormField;
  }
}

/**
 * A distinguishable property of a form.
 *
 * If you provide `<turtle-textbox>` or `<turtle-selectbox>` for the default slot and text element for the `description` slot,
 * a color of the `description` slot will change depends on the validity state of the slotted `<turtle-textbox>` (or `<turtle-selectbox>`).
 *
 * @element turtle-form-field
 *
 * @slot - Form item, required.
 * @slot label - `<label>` element, required.
 * @slot description - Description text, optional.
 */
export class TurtleFormField extends LitElement {
  static defaultTagName = "turtle-form-field" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: inline-block;
        }

        .label::slotted(*) {
          display: block;
          box-sizing: border-box;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;
          margin-block-end: 8px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: bold;
        }

        .item::slotted(*) {
          width: 100%;
        }

        .description::slotted(*) {
          display: block;
          box-sizing: border-box;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          margin-block-start: 8px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }
        .invalid::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4)
          );
        }
        .valid::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }
      `,
    ];
  }

  @state()
  _elementState: "neutral" | "invalid" | "valid" = "neutral";

  override render() {
    return html`
      <slot class="label" name="label"></slot>

      <slot class="item"
        >${wormhole((el: Element | TurtleTextbox) => {
          if (!("touched" in el && "isValid" in el && "noValidity" in el)) {
            return;
          }

          this.#updateValidity(el);

          el.addEventListener("validitychange", this.#onSlottedItemUpdated);
          el.addEventListener("fieldtouch", this.#onSlottedItemUpdated);

          return () => {
            el.removeEventListener(
              "validitychange",
              this.#onSlottedItemUpdated
            );
            el.removeEventListener("fieldtouch", this.#onSlottedItemUpdated);
          };
        })}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `;
  }

  #onSlottedItemUpdated = (ev: Event) => {
    this.#updateValidity(ev.currentTarget as TurtleTextbox);
  };

  #updateValidity = (el: TurtleTextbox) => {
    this._elementState =
      !el.touched || el.noValidity
        ? "neutral"
        : el.isValid
        ? "valid"
        : "invalid";
  };
}
