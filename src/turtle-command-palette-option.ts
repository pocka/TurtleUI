import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";
import { minireset } from "./minireset.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCommandPaletteOption.defaultTagName]: TurtleCommandPaletteOption;
  }
}

/**
 * @element turtle-command-palette-option
 *
 * @slot - A name of the option.
 * @slot description - Descriptive text for the option. Recommended to fill the slot for clarity.
 *
 * @fires selectoption - User selected the option. Bubbles.
 */
export class TurtleCommandPaletteOption extends LitElement {
  static defaultTagName = "turtle-command-palette-option" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: block;
          padding: 12px;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          cursor: pointer;
        }
        :host([aria-selected="true"]) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9),
            0.5
          );
        }
        :host(:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        :host(:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        .title {
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: bold;
        }

        .description::slotted(*) {
          display: block;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          margin: 0;
          margin-top: 4px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
        }
      `,
    ];
  }

  /**
   * WAI-ARIA role. Do not change unless you know what you're doing.
   */
  @property({
    type: String,
    reflect: true,
  })
  role: string = "option";

  override render() {
    return html`
      <span class="title">
        <slot></slot>
      </span>

      <slot class="description" name="description"></slot>
    `;
  }
}
