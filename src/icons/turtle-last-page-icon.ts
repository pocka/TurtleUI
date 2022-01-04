import { LitElement, svg } from "lit";
import { minireset } from "../minireset.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleLastPageIcon.defaultTagName]: TurtleLastPageIcon;
  }
}

/**
 * @element turtle-last-page-icon
 */
export class TurtleLastPageIcon extends LitElement {
  static defaultTagName = "turtle-last-page-icon" as const;

  static override get styles() {
    return [minireset, icon];
  }

  override render() {
    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87866 4.70718L6.29288 3.29297L15 12.0001L6.29288 20.7072L4.87866 19.293L12.1716 12.0001L4.87866 4.70718ZM20 4H18V20H20V4Z" fill="currentColor"/>
      </svg>
    `;
  }
}
