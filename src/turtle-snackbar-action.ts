import { css, LitElement, html } from "lit";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { Pressable } from "./mixins/Pressable";

/**
 * @element turtle-snackbar-action
 */
export class TurtleSnackbarAction extends Pressable(LitElement) {
  static defaultTagName = "turtle-snackbar-action" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          box-sizing: border-box;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 0 calc(0.2 * var(--turtle-ui--unit));
          font: inherit;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          border: none;
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-snackbar--bg-tone),
            var(--turtle-snackbar--bg-level)
          );
          border-radius: 2px;
          color: hsl(
            var(--turtle-snackbar--fg-tone),
            var(--turtle-snackbar--fg-level)
          );
          cursor: pointer;
          outline: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsl(
            var(--turtle-snackbar--bg-tone),
            var(--turtle-snackbar--bg-level-hover)
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-snackbar--fg-tone),
              var(--turtle-snackbar--fg-level),
              0.16
            );
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
