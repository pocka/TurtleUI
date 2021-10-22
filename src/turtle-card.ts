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
 * A card with optional title, image, and actions.
 *
 * ## Limitations
 *
 * ### `<picture>` ignores our `::slotted` styles
 *
 * When you place `<picture>` element for `image` slot, due to the poor design of `<picture>` element,
 * you need to style `<img>` element inside so it does fit to the container.
 *
 * ```css
 * turtle-card > picture[slot="image"] > img {
 *   width: 100%;
 *   height: 100%;
 *   object-fit: cover;
 * }
 * ```
 *
 * @element turtle-card
 */
export class TurtleCard extends LitElement {
  static defaultTagName = "turtle-card" as const;

  #actionsSensor = new SlotSensorController(this, "action");
  #imageSensor = new SlotSensorController(this, "image");

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
          --turtle-ui--card--radius: 8px;

          display: block;
          border-radius: var(--turtle-ui--card--radius);

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          overflow: hidden;
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

        .image-sizer {
          position: relative;
          width: 100%;
          height: 0;
          padding-top: min(56.875%, 30vh);
        }
        .image-sizer:not([assigned]) {
          display: none;
        }

        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          overflow: hidden;
        }

        ::slotted([slot="image"]) {
          width: 100%;
          height: 100%;
          object-fit: cover;
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

        ::slotted([slot="action"]:not(:first-of-type)) {
          border-left: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
        ::slotted([slot="action"]:first-of-type) {
          border-bottom-left-radius: var(--turtle-ui--card--radius);
        }
        ::slotted([slot="action"]:last-of-type) {
          border-bottom-right-radius: var(--turtle-ui--card--radius);
        }
      `,
    ];
  }

  override render() {
    return html`
      <div class="image-sizer" ?assigned=${this.#imageSensor.assigned}>
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

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
