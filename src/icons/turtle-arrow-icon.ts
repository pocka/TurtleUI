import { css, LitElement, svg } from "lit";
import { property } from "lit/decorators/property.js";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { icon } from "./styles.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleArrowIcon.defaultTagName]: TurtleArrowIcon;
  }
}

/**
 * @element turtle-arrow-icon
 */
export class TurtleArrowIcon extends LitElement {
  static defaultTagName = "turtle-arrow-icon" as const;

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
        <path d="m13.034 17.043 6.504-6.505L21 12l-9 9-9-9 1.462-1.462 6.504 6.505V3h2.068v14.043Z" fill="currentColor"/>
      </svg>
    `;
  }
}
