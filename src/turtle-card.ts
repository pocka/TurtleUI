import { css, html, LitElement } from "lit";
import { property } from "lit/decorators/property";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { SlotSensorController } from "./controllers/SlotSensorController";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCard.defaultTagName]: TurtleCard;
  }
}

/**
 * @element turtle-card
 */
export class TurtleCard extends LitElement {
  static defaultTagName = "turtle-card" as const;

  #actionsSensor = new SlotSensorController(this, "action");

  /**
   * Whether to display shadow.
   */
  @property({
    type: Boolean,
    attribute: "shadowed",
    reflect: true,
  })
  shadowed: boolean = false;

  /**
   * Whether to display borders around.
   */
  @property({
    type: Boolean,
    attribute: "bordered",
    reflect: true,
  })
  bordered: boolean = false;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: block;
          border-radius: 8px;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
        }

        :host([shadowed]) {
          box-shadow: var(--turtle-ui--shadow--1);
        }

        :host([bordered]) {
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }

        .body {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          padding: 16px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: normal;
        }

        ::slotted([slot="title"]) {
          display: block;
          font-size: calc(1.8 * var(--turtle-ui--unit));
          line-height: 1.78;
          margin-bottom: calc(0.8 * var(--turtle-ui--unit));

          font-weight: bold;
        }

        .actions {
          display: flex;
          border-top: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
        .actions:not([assigned]) {
          display: none;
        }
      `,
    ];
  }

  override render() {
    return html`
      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${this.#actionsSensor.assigned}>
        <slot name="action"></slot>
      </div>
    `;
  }
}
