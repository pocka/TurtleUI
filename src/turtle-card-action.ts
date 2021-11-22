import { css, LitElement, html } from "lit";
import { minireset } from "./minireset.js";

import { Pressable } from "./mixins/Pressable.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCardAction.defaultTagName]: TurtleCardAction;
  }
}

/**
 * An action related to a `<turtle-card>`.
 *
 * @element turtle-card-action
 *
 * @slot - Button-like element if `lightdom` is set to `true`, TextFragment otherwise.
 */
export class TurtleCardAction extends Pressable(LitElement) {
  static defaultTagName = "turtle-card-action" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          flex: 1;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 12px;
          font: inherit;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          border: none;
          box-sizing: border-box;

          background: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: inherit;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          cursor: pointer;
          font-weight: normal;
          outline: none;
          text-align: center;
          text-decoration: none;
          user-select: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        .button:active,
        ::slotted(:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--color--highlight--shadow) inset;
        }
        .button:disabled,
        ::slotted(:disabled),
        ::slotted([aria-disabled="true"]) {
          box-shadow: none;
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          cursor: not-allowed;
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
