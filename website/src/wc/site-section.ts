import { css, LitElement, html } from "lit";
import { minireset } from "../../../es2019/minireset.js";

export class SiteSection extends LitElement {
  static defaultTagName = "site-section" as const;

  static override get styles() {
    return [
      minireset,
      css`
        @media (min-width: 1300px) {
          :host {
            --gap: 24px;
            --half: calc((100% - var(--gap)) / 2);

            display: grid;
            grid-template-columns:
              min(var(--half), calc(80 * var(--turtle-ui--unit)))
              1fr;
            align-items: flex-start;
            column-gap: var(--gap);
            box-sizing: border-box;
          }

          ::slotted(*) {
            grid-column: 1;
          }

          ::slotted(.demo) {
            grid-column: 2;
          }
        }
      `,
    ];
  }

  override render() {
    return html` <slot></slot> `;
  }
}
