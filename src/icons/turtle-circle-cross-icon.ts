import { LitElement, svg } from "lit";
import { property } from "lit/decorators/property";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { icon } from "./styles";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCircleCrossIcon.defaultTagName]: TurtleCircleCrossIcon;
  }
}

/**
 * @element turtle-circle-cross-icon
 */
export class TurtleCircleCrossIcon extends LitElement {
  static defaultTagName = "turtle-circle-cross-icon" as const;

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
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `;
    }

    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `;
  }
}
