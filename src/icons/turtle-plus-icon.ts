import { LitElement, svg } from "lit";
import { minireset } from "../minireset.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtlePlusIcon.defaultTagName]: TurtlePlusIcon;
  }
}

/**
 * @element turtle-plus-icon
 */
export class TurtlePlusIcon extends LitElement {
  static defaultTagName = "turtle-plus-icon" as const;

  static override get styles() {
    return [minireset, icon];
  }

  override render() {
    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `;
  }
}
