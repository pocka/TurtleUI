import { css, LitElement, html, svg } from "lit";
import { property } from "lit/decorators/property.js";
import { state } from "lit/decorators/state.js";

import { wormhole } from "./directives/wormhole.js";
import {
  TurtleTextbox,
  isValidityValid,
  checkIcon,
  crossIcon,
} from "./turtle-textbox.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleSelectbox.defaultTagName]: TurtleSelectbox;
  }
}

/**
 * Select box.
 *
 * @element turtle-selectbox
 *
 * @slot - `<select>`.
 */
export class TurtleSelectbox extends LitElement {
  static defaultTagName = "turtle-selectbox" as const;

  static override get styles() {
    return [
      ...TurtleTextbox.styles,
      css`
        :host {
          --caret-size: calc(1.6 * var(--turtle-ui--unit));
          --caret-padding: 4px;
          --caret-total-shift: (var(--caret-size) + var(--caret-padding) * 2);
        }

        ::slotted(select) {
          --right-offset: calc(
            4px + 2.4 * var(--turtle-ui--unit) + var(--caret-total-shift)
          );
        }
        :host([novalidity]) ::slotted(select) {
          --right-offset: calc(4px + var(--caret-total-shift));
        }

        .indicator {
          right: calc(
            8px + 1.2 * var(--turtle-ui--unit) + var(--caret-total-shift)
          );
        }

        .caret {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          right: calc(8px + var(--caret-padding));
          width: var(--caret-size);
          height: var(--caret-size);
          font-size: var(--caret-size);

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          pointer-events: none;

          transform: translate(0, -50%);
        }

        .wrapper[data-disabled] > .caret {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `,
    ];
  }

  /**
   * Whether the user interacted to the slotted item.
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  touched: boolean = false;

  /**
   * When this attribute or property is set to `true`, the component goes into neither invalid nor valid state.
   */
  @property({
    type: Boolean,
    attribute: "novalidity",
  })
  noValidity: boolean = false;

  @state()
  private _isElementValid?: boolean;

  @state()
  private _disabled: boolean = false;

  #attributeSyncObserver = new MutationObserver((mutations) => {
    let validityRelatedAttributeChanged = false;

    for (const mutation of mutations) {
      switch (mutation.attributeName) {
        case "disabled":
          this._disabled = (mutation.target as HTMLSelectElement).disabled;
          break;
        default:
          validityRelatedAttributeChanged = true;
          break;
      }
    }

    if (validityRelatedAttributeChanged) {
      this._isElementValid = isValidityValid(
        mutations[0]!.target as HTMLSelectElement
      );
    }
  });

  override render() {
    return html`
      <div
        class="wrapper"
        data-invalid=${String(!(this._isElementValid ?? true))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${wormhole((el: Element | HTMLSelectElement) => {
            if (!("validity" in el)) {
              return;
            }

            this._isElementValid = isValidityValid(el);
            this._disabled = el.disabled;

            el.addEventListener("input", this.#updateValidity);
            el.addEventListener("focusout", this.touch);

            this.#attributeSyncObserver.observe(el, {
              attributes: true,
              attributeFilter: ["aria-invalid", "disabled", "required"],
            });

            return () => {
              el.removeEventListener("input", this.#updateValidity);
              el.removeEventListener("focusout", this.touch);

              this.#attributeSyncObserver.disconnect();
            };
          })}
        </slot>

        <div class="indicator valid" aria-hidden="true">${checkIcon}</div>
        <div class="indicator invalid" aria-hidden="true">${crossIcon}</div>

        <div class="caret" aria-hidden="true">${caretIcon}</div>
      </div>
    `;
  }

  #updateValidity = (ev: Event) => {
    this._isElementValid = isValidityValid(
      ev.currentTarget as HTMLSelectElement
    );
  };

  /**
   * @ignore
   */
  touch = () => {
    this.touched = true;
  };
}

const caretIcon = svg`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;
