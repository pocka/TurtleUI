import { css, LitElement, html } from "lit";
import { minireset } from "./minireset.js";

import { SlotSensorController } from "./controllers/SlotSensorController.js";
import { Pressable } from "./mixins/Pressable.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleListItem.defaultTagName]: TurtleListItem;
  }
}

/**
 * An item of the `<turtle-list>`.
 *
 * @element turtle-list-item
 *
 * @slot - Button-like element if `lightdom` is `true`, TextFragment otherwise.
 * @slot icon-start - A visual element placed to start position.
 * @slot icon-end - A visual element placed to end position.
 *
 * @cssprop [--turtle-list-item--icon-size=calc(2.4 * var(--turtle-ui--unit))] - Size of icons (if exist).
 * @cssprop [--turtle-list-item--padding=12px] - Padding of the item.
 * @cssprop [--turtle-list-item--gap=8px] - Gap between icons and text.
 */
export class TurtleListItem extends Pressable(LitElement) {
  static defaultTagName = "turtle-list-item" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --turtle-list-item--icon-size: calc(2.4 * var(--turtle-ui--unit));
          --turtle-list-item--padding: 12px;
          --turtle-list-item--gap: 8px;

          display: block;
          position: relative;
          box-sizing: border-box;
        }

        .button,
        .body-slot::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          height: calc(
            2.4 * var(--turtle-ui--unit) + var(--turtle-list-item--padding) * 2
          );
          padding: var(--turtle-list-item--padding);
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;
          border: none;
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          cursor: pointer;
          text-align: start;
          text-decoration: none;
          outline: none;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .button:hover,
        .body-slot::slotted(*:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        .button:active,
        .body-slot::slotted(*:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }
        .button:focus,
        .body-slot::slotted(*:focus) {
          box-shadow: inset 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
        }
        .button:disabled,
        .body-slot::slotted(:disabled),
        .body-slot::slotted([aria-disabled="true"]) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          box-shadow: none;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          cursor: not-allowed;
        }
        :host(:first-child) .button,
        :host(:first-child) .body-slot::slotted(*) {
          border-radius: var(--turtle-list--radius) var(--turtle-list--radius) 0
            0;
        }
        :host(:last-child) .button,
        :host(:last-child) .body-slot::slotted(*) {
          border-radius: 0 0 var(--turtle-list--radius)
            var(--turtle-list--radius);
        }

        .icon-start,
        .icon-start::slotted(*) {
          padding-inline-start: calc(
            var(--turtle-list-item--padding) +
              var(--turtle-list-item--icon-size) + var(--turtle-list-item--gap)
          );
        }

        .icon-end,
        .icon-end::slotted(*) {
          padding-inline-end: calc(
            var(--turtle-list-item--padding) +
              var(--turtle-list-item--icon-size) + var(--turtle-list-item--gap)
          );
        }

        [name="icon-start"]::slotted(*),
        [name="icon-end"]::slotted(*) {
          position: absolute;
          top: 50%;
          font-size: var(--turtle-list-item--icon-size);

          color: inherit;
          pointer-events: none;

          transform: translateY(-50%);
        }

        [name="icon-start"]::slotted(*) {
          left: var(--turtle-list-item--padding);
        }
        [name="icon-end"]::slotted(*) {
          right: var(--turtle-list-item--padding);
        }

        :host([disabled]) [name^="icon-"]::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `,
    ];
  }

  #startIconSensor = new SlotSensorController(this, "icon-start");
  #endIconSensor = new SlotSensorController(this, "icon-end");

  override render() {
    const slotClass = [
      "body-slot",
      this.#startIconSensor.assigned ? "icon-start" : "",
      this.#endIconSensor.assigned ? "icon-end" : "",
    ].join(" ");

    const body = this.lightDOM
      ? this.renderLightDOMSlot(slotClass)
      : html`
          <button class="button ${slotClass}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;

    return html`
      <slot name="icon-start"></slot>

      ${body}

      <slot name="icon-end"></slot>
    `;
  }
}
