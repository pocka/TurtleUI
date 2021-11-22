import { css, LitElement, html } from "lit";

import { minireset } from "./minireset.js";

/**
 * Label styling helper for `<turtle-checkbox>` and `<turtle-radio-button>`.
 *
 * @element turtle-labelled-item
 *
 * @slot - Checkbox or Radio button.
 * @slot label - `<label>` element.
 */
export class TurtleLabelledItem extends LitElement {
  static defaultTagName = "turtle-labelled-item" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
        }

        .label::slotted(*) {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }
      `,
    ];
  }

  override render() {
    return html`
      <slot></slot>

      <slot class="label" name="label"></slot>
    `;
  }
}
