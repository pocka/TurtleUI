import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";
import { minireset } from "./minireset.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleButtonGroup.defaultTagName]: TurtleButtonGroup;
  }
}

/**
 * Combines multiple buttons. Useful for grouping buttons by relations.
 *
 * @element turtle-button-group
 */
export class TurtleButtonGroup extends LitElement {
  static defaultTagName = "turtle-button-group" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: inline-flex;
        }
        :host([evenly]) {
          align-items: stretch;
        }
        :host([evenly]) ::slotted(*) {
          flex: 1;
        }

        ::slotted(:not(:last-child)) {
          --turtle-button--top-right-radius: 0;
          --turtle-button--bottom-right-radius: 0;
        }
        ::slotted(:not(:first-child)) {
          --turtle-button--top-left-radius: 0;
          --turtle-button--bottom-left-radius: 0;
        }
      `,
    ];
  }

  /**
   * When this attribute/property is set, each child buttons have same width.
   * Make sure to specify the width for this element.
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  evenly: boolean = false;

  override render() {
    return html` <slot></slot> `;
  }
}
