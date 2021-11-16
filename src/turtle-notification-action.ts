import { css, LitElement, html } from "lit";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { Pressable } from "./mixins/Pressable.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleNotificationAction.defaultTagName]: TurtleNotificationAction;
  }
}

/**
 * @element turtle-notification-action
 */
export class TurtleNotificationAction extends Pressable(LitElement) {
  static defaultTagName = "turtle-notification-action" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          box-sizing: border-box;
          display: inline-flex;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 12px;
          font: inherit;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          border: none;
          box-sizing: border-box;

          background-color: transparent;
          border-radius: 0
            var(--turtle-notification-action--top-right-radius, 0)
            var(--turtle-notification-action--bottom-right-radius, 0) 0;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          cursor: pointer;
          outline: none;
          text-align: center;
          text-decoration: none;
          user-select: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10),
            0.08
          );
        }
        .button:active,
        ::slotted(:active) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0),
            0.16
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.32
            )
            inset;
        }
      `,
    ];
  }

  override render() {
    return this.lightDOM
      ? this.renderLightDOMSlot()
      : html`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;
  }
}
