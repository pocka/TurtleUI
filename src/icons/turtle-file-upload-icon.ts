import { LitElement, svg } from "lit";
import { minireset } from "../minireset.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleFileUploadIcon.defaultTagName]: TurtleFileUploadIcon;
  }
}

/**
 * @element turtle-file-upload-icon
 */
export class TurtleFileUploadIcon extends LitElement {
  static defaultTagName = "turtle-file-upload-icon" as const;

  static override get styles() {
    return [minireset, icon];
  }

  override render() {
    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z" fill="currentColor"/>
      </svg>
    `;
  }
}
