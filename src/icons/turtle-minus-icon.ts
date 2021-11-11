import { LitElement, svg } from "lit";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { icon } from "./styles";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleMinusIcon.defaultTagName]: TurtleMinusIcon;
  }
}

/**
 * @element turtle-minus-icon
 */
export class TurtleMinusIcon extends LitElement {
  static defaultTagName = "turtle-minus-icon" as const;

  static override get styles() {
    return [minireset, icon];
  }

  override render() {
    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `;
  }
}
