import { css, LitElement, html } from "lit";
import { minireset } from "../../../es2019/minireset.js";

export class SiteLayout extends LitElement {
  static defaultTagName = "site-layout" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --header-height: calc(5.6 * var(--turtle-ui--unit));

          display: grid;
          grid-template-columns: max-content 1fr;
          grid-template-rows: var(--header-height) minmax(0, min-content) minmax(
              0,
              1fr
            );
          grid-template-areas:
            "header header"
            "sidebar body"
            "blank body";
          width: 100%;
          height: 100%;
        }

        .header::slotted(*) {
          grid-area: header;
        }

        .body::slotted(*) {
          grid-area: body;
          overflow-y: auto;
        }

        .sidebar::slotted(*) {
          grid-area: sidebar;
          overflow-y: auto;
        }
      `,
    ];
  }

  override render() {
    return html`
      <slot class="header" name="header"></slot>
      <slot class="body"></slot>
      <slot class="sidebar" name="sidebar"></slot>
    `;
  }
}
