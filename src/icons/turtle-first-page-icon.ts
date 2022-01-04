import { LitElement, svg } from "lit";
import { minireset } from "../minireset.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleFirstPageIcon.defaultTagName]: TurtleFirstPageIcon;
  }
}

/**
 * @element turtle-first-page-icon
 */
export class TurtleFirstPageIcon extends LitElement {
  static defaultTagName = "turtle-first-page-icon" as const;

  static override get styles() {
    return [minireset, icon];
  }

  override render() {
    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1213 4.70718L17.7071 3.29297L9 12.0001L17.7071 20.7072L19.1213 19.293L11.8284 12.0001L19.1213 4.70718ZM6 4H4V20H6V4Z" fill="currentColor" />
      </svg>
    `;
  }
}
