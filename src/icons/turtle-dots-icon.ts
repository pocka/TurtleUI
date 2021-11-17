import { LitElement, svg } from "lit";
import { minireset } from "../minireset.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleDotsIcon.defaultTagName]: TurtleDotsIcon;
  }
}

/**
 * @element turtle-dots-icon
 */
export class TurtleDotsIcon extends LitElement {
  static defaultTagName = "turtle-dots-icon" as const;

  static override get styles() {
    return [minireset, icon];
  }

  override render() {
    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `;
  }
}
