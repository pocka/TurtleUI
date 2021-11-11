import { LitElement, svg } from "lit";
import { property } from "lit/decorators/property";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { icon } from "./styles";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCircleCheckIcon.defaultTagName]: TurtleCircleCheckIcon;
  }
}

/**
 * @element turtle-circle-check-icon
 */
export class TurtleCircleCheckIcon extends LitElement {
  static defaultTagName = "turtle-circle-check-icon" as const;

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
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Zm7 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `;
    }

    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm9 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
