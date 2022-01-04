import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";
import { minireset } from "./minireset.js";

import { SlotSensorController } from "./controllers/SlotSensorController.js";
import { Pressable } from "./mixins/Pressable.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtlePill.defaultTagName]: TurtlePill;
  }
}

/**
 * Label element, with or without a user action triggered by click/touch.
 *
 * When the `pressable` attribute or `lightdom` attribute presents, this element act as a button and recieve focus.
 *
 * If you mix non-`pressable` ones and `pressable` ones, please consider differentiating them by, for example, making pressable ones all-uppercase.
 *
 * @element turtle-pill
 *
 * @slot - Label text.
 * @slot icon - Icon element, optional.
 * @slot action-icon - Icon indicates the type of action, optional.
 *
 * @csspart button - the main `<button>` element, which is rendered when `pressable` is `true` and `lightdom` is not present.
 * @csspart label - the main `<span>` element, which is rendered when neither `pressable` nor `lightdom` is present.
 * @csspart icon - Icon wrapper element.
 * @csspart action-icon - Action icon wrapper element.
 *
 * @cssprop [--turtle-pill--radius=calc(3.2 * var(--turtle-ui--unit))] Border radius of the element.
 * @cssprop [--turtle-pill--background=hsl(var(--turtle-ui--color--tone--mono), var(--turtle-ui--color--level--9))] Background color.
 * @cssprop [--turtle-pill--color=hsl(var(--turtle-ui--color--tone--mono), var(--turtle-ui--color--level--0))] Foreground color.
 * @cssprop [--turtle-pill--border-color=hsl(var(--turtle-ui--color--tone--mono), var(--turtle-ui--color--level--7))] Border color.
 * @cssprop [--turtle-pill--inactive-color=hsl(var(--turtle-ui--color--tone--mono), var(--turtle-ui--color--level--5))] Foreground color for action icon when user does not hover.
 */
export class TurtlePill extends Pressable(LitElement) {
  static defaultTagName = "turtle-pill" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --turtle-pill--radius--default: calc(3.2 * var(--turtle-ui--unit));
          --turtle-pill--background--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          --turtle-pill--color--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          --turtle-pill--border-color--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          --turtle-pill--inactive-color--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--5)
          );

          position: relative;
          display: inline-block;
        }

        .label,
        .button,
        .lightdom::slotted(*) {
          appearance: none;

          display: inline-block;
          font: inherit;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          padding: 2px calc(0.8 * var(--turtle-ui--unit));
          border: 1px solid
            var(
              --turtle-pill--border-color,
              var(--turtle-pill--border-color--default)
            );

          border-radius: var(
            --turtle-pill--radius,
            var(--turtle-pill--radius--default)
          );
          background-color: var(
            --turtle-pill--background,
            var(--turtle-pill--background--default)
          );
          color: var(--turtle-pill--color, var(--turtle-pill--color--default));
          text-decoration: none;

          cursor: default;
        }

        .with-icon,
        .with-icon::slotted(*) {
          padding-left: calc(3 * var(--turtle-ui--unit));
        }

        .with-action-icon,
        .with-action-icon::slotted(*) {
          padding-right: calc(3 * var(--turtle-ui--unit));
        }

        .button,
        .lightdom::slotted(*) {
          cursor: pointer;
        }

        .button:focus,
        .lightdom::slotted(*:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
          outline: none;
        }

        .icon,
        .action-icon {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          bottom: 0;
          margin: auto 0;
          font-size: calc(2 * var(--turtle-ui--unit));

          pointer-events: none;
        }

        .icon {
          left: calc(0.4 * var(--turtle-ui--unit));

          color: var(--turtle-pill--color, var(--turtle-pill--color--default));
        }

        .action-icon {
          right: calc(0.4 * var(--turtle-ui--unit));

          color: var(
            --turtle-pill--inactive-color,
            var(--turtle-pill--inactive-color--default)
          );
        }

        :host(:hover) > .action-icon {
          color: var(--turtle-pill--color, var(--turtle-pill--color--default));
        }

        [data-hidden] {
          display: none;
        }
      `,
    ];
  }

  /**
   * Whether the element act as a button.
   */
  @property({
    type: Boolean,
  })
  pressable: boolean = false;

  #iconSlot = new SlotSensorController(this, "icon");
  #actionIconSlot = new SlotSensorController(this, "action-icon");

  override render() {
    const labelClass = [
      this.#iconSlot.assigned ? "with-icon" : null,
      this.#actionIconSlot.assigned ? "with-action-icon" : null,
    ]
      .filter(Boolean)
      .join(" ");

    const label = this.lightDOM
      ? this.renderLightDOMSlot(`lightdom ${labelClass}`)
      : this.pressable
      ? html`<button part="button" class="button ${labelClass}">
          <slot></slot>
        </button>`
      : html`<span part="label" class="label ${labelClass}"
          ><slot></slot
        ></span>`;

    return html`
      <div
        part="icon"
        class="icon"
        ?data-hidden=${!this.#iconSlot.assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="icon"></slot>
      </div>

      ${label}

      <div
        part="action-icon"
        class="action-icon"
        ?data-hidden=${!this.#actionIconSlot.assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="action-icon"></slot>
      </div>
    `;
  }
}
