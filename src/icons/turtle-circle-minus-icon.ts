import { LitElement, svg } from "lit";
import { property } from "lit/decorators/property.js";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCircleMinusIcon.defaultTagName]: TurtleCircleMinusIcon;
  }
}

/**
 * @element turtle-circle-minus-icon
 */
export class TurtleCircleMinusIcon extends LitElement {
  static defaultTagName = "turtle-circle-minus-icon" as const;

  static override get styles() {
    return [minireset, icon];
  }

  @property({
    type: Boolean,
  })
  outlined: boolean = false;

  override render() {
    if (this.outlined) {
      return svg`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `;
    }

    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `;
  }
}
