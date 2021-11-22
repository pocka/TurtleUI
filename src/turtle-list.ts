import { css, LitElement, html } from "lit";
import { minireset } from "./minireset.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleList.defaultTagName]: TurtleList;
  }
}

/**
 * A list of actionable items.
 *
 * @element turtle-list
 *
 * @slot - One or more of `<turtle-list-item>`.
 *
 * @cssprop [--turtle-list--radius=8px] - Corner radius.
 */
export class TurtleList extends LitElement {
  static defaultTagName = "turtle-list" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --turtle-list--radius: 8px;

          box-sizing: border-box;
          display: inline-grid;
          grid-template-columns: minmax(100%, 1fr);
          grid-template-rows: min-content;
          gap: 1px;
          align-items: stretch;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          border-radius: var(--turtle-list--radius);
          overflow: hidden;
        }
      `,
    ];
  }

  override render() {
    return html` <slot></slot> `;
  }
}
