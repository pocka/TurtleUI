import { LitElement, svg } from "lit";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCrossIcon.defaultTagName]: TurtleCrossIcon;
  }
}

/**
 * @element turtle-cross-icon
 */
export class TurtleCrossIcon extends LitElement {
  static defaultTagName = "turtle-cross-icon" as const;

  static override get styles() {
    return [minireset, icon];
  }

  override render() {
    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `;
  }
}
