import { LitElement, svg } from "lit";
import { property } from "lit/decorators/property.js";
import { minireset } from "../minireset.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCirclePlusIcon.defaultTagName]: TurtleCirclePlusIcon;
  }
}

/**
 * @element turtle-circle-plus-icon
 */
export class TurtleCirclePlusIcon extends LitElement {
  static defaultTagName = "turtle-circle-plus-icon" as const;

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
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `;
    }

    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `;
  }
}
