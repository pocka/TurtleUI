import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";
import { minireset } from "./minireset.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCommandPaletteListbox.defaultTagName]: TurtleCommandPaletteListbox;
  }
}

/**
 * Listbox for `<turtle-command-palette>`.
 *
 * You need to provide `id` attribute to the element to enable automatic
 * WAI-ARIA attributes management.
 *
 * @element turtle-command-palette-listbox
 *
 * @slot - A list of `<turtle-command-palette-option>`.
 */
export class TurtleCommandPaletteListbox extends LitElement {
  static defaultTagName = "turtle-command-palette-listbox" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --turtle-command-palette-listbox--radius: 8px;

          display: block;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          border-radius: var(--turtle-command-palette-listbox--radius);
          overflow-y: auto;
        }
        :host([empty]) {
          display: none;
        }

        ::slotted(:first-child) {
          border-top-left-radius: var(--turtle-command-palette-listbox--radius);
          border-top-right-radius: var(
            --turtle-command-palette-listbox--radius
          );
        }
        ::slotted(:last-child) {
          border-bottom-left-radius: var(
            --turtle-command-palette-listbox--radius
          );
          border-bottom-right-radius: var(
            --turtle-command-palette-listbox--radius
          );
        }
        ::slotted(*:not(:first-child)) {
          border-top: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
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
  role: string = "listbox";

  override connectedCallback() {
    super.connectedCallback();

    this.#updateEmptyAttribute();
  }

  override render() {
    return html`<slot @slotchange=${this.#updateEmptyAttribute}></slot>`;
  }

  #updateEmptyAttribute = () => {
    if (this.children.length > 0) {
      this.removeAttribute("empty");
    } else {
      this.setAttribute("empty", "");
    }
  };
}
