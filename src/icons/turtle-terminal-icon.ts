import { LitElement, svg } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { minireset } from "../minireset.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleTerminalIcon.defaultTagName]: TurtleTerminalIcon;
  }
}

/**
 * @element turtle-terminal-icon
 */
export class TurtleTerminalIcon extends LitElement {
  static defaultTagName = "turtle-terminal-icon" as const;

  static override get styles() {
    return [minireset, icon];
  }

  override render() {
    return graphic();
  }
}

export const graphic = (part?: string) => svg`
  <svg part=${ifDefined(
    part
  )} class="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;
