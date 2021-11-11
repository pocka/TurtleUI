import { css, LitElement, svg } from "lit";
import { property } from "lit/decorators/property";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { icon } from "./styles";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleAngleIcon.defaultTagName]: TurtleAngleIcon;
  }
}

/**
 * @element turtle-angle-icon
 */
export class TurtleAngleIcon extends LitElement {
  static defaultTagName = "turtle-angle-icon" as const;

  static override get styles() {
    return [
      minireset,
      icon,
      css`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `,
    ];
  }

  @property({
    type: String,
    reflect: true,
  })
  direction: "up" | "down" | "right" | "left" = "down";

  override render() {
    return svg`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.414 8.414 19 7l-7.293 7.293L4.414 7 3 8.414l8.707 8.707 8.707-8.707Z" fill="currentColor"/>
      </svg>
    `;
  }
}
