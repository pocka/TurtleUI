import { css, LitElement, html, svg } from "lit";
import { property } from "lit/decorators/property.js";
import { state } from "lit/decorators/state.js";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { wormhole } from "./directives/wormhole.js";

export function isValidityValid(
  el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
): boolean {
  const ariaInvalid = el.getAttribute("aria-invalid");
  // both `grammar` and `spelling` are not for validation, skipping
  switch (ariaInvalid) {
    case "true":
      return false;
    case "false":
      return true;
  }

  return el.validity.valid;
}

declare global {
  interface HTMLElementTagNameMap {
    [TurtleTextbox.defaultTagName]: TurtleTextbox;
  }
}

/**
 * @element turtle-textbox
 */
export class TurtleTextbox extends LitElement {
  static defaultTagName = "turtle-textbox" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
        }

        .wrapper {
          display: inherit;
        }

        ::slotted(input),
        ::slotted(select) {
          --border-color: var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7);
          --right-offset: calc(4px + 2.4 * var(--turtle-ui--unit));

          appearance: none;
          width: 100%;
          border: 1px solid hsl(var(--border-color));
          padding: 8px;
          padding-right: calc(8px + var(--right-offset));
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: 8px;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          outline: none;
        }
        ::slotted(input:placeholder) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
        ::slotted(input:focus),
        ::slotted(select:focus) {
          --border-color: var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4);

          box-shadow: 0 0 0 4px hsla(var(--border-color), 0.16);
        }
        ::slotted(input:disabled),
        ::slotted(select:disabled) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        :host([novalidity]) ::slotted(input),
        :host([novalidity]) ::slotted(select) {
          --right-offset: 0;
        }

        :host([touched]:not([novalidity])) ::slotted(input:not(:disabled)),
        :host([touched]:not([novalidity])) ::slotted(select:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(input[aria-invalid="false"]:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(select[aria-invalid="false"]:not(:disabled)) {
          --border-color: var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3);
        }

        :host([touched]:not([novalidity])) ::slotted(:invalid:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(select[aria-invalid="true"]:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(input[aria-invalid="true"]:not(:disabled)) {
          --border-color: var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4);
        }

        .indicator {
          display: none;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          right: calc(8px + 1.2 * var(--turtle-ui--unit));
          width: calc(1.4 * var(--turtle-ui--unit));
          height: calc(1.4 * var(--turtle-ui--unit));
          font-size: calc(0.7 * var(--turtle-ui--unit));

          border-radius: 50%;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          pointer-events: none;

          transform: translate(50%, -50%);
        }

        .valid {
          background-color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }

        @keyframes shake {
          0%,
          100% {
            transform: translate(50%, -50%);
          }

          20%,
          60% {
            transform: translate(50%, -50%) translateX(-8%);
          }

          40%,
          80% {
            transform: translate(50%, -50%) translateX(8%);
          }
        }
        .invalid {
          background-color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4)
          );

          animation: 0.3s 0s 1 ease-in shake;
        }
        :host([touched]:not([novalidity]))
          > [data-invalid="false"]:not([data-disabled])
          > .valid,
        :host([touched]:not([novalidity]))
          > [data-invalid="true"]:not([data-disabled])
          > .invalid {
          display: flex;
        }

        .icon {
          width: 1em;
          height: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .invalid {
            animation: none;
          }
        }
      `,
    ];
  }

  @property({
    type: Boolean,
    reflect: true,
  })
  touched: boolean = false;

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
          this._disabled = (mutation.target as HTMLInputElement).disabled;
          break;
        default:
          validityRelatedAttributeChanged = true;
          break;
      }
    }

    if (validityRelatedAttributeChanged) {
      this._isElementValid = isValidityValid(
        mutations[0]!.target as HTMLInputElement
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
          ${wormhole((el: Element | HTMLInputElement) => {
            if (!("validity" in el)) {
              return;
            }

            this._isElementValid = isValidityValid(el);
            this._disabled = el.disabled;

            el.addEventListener("input", this.#onSlottedInputInputted);
            el.addEventListener("focusout", this.touch);

            this.#attributeSyncObserver.observe(el, {
              attributes: true,
              attributeFilter: [
                "aria-invalid",
                "disabled",
                "checked",
                "required",
                "min",
                "max",
                "pattern",
                "maxlength",
                "type",
                "minlength",
              ],
            });

            return () => {
              el.removeEventListener("input", this.#onSlottedInputInputted);
              el.removeEventListener("focusout", this.touch);

              this.#attributeSyncObserver.disconnect();
            };
          })}
        </slot>

        <div class="indicator valid" aria-hidden="true">${checkIcon}</div>
        <div class="indicator invalid" aria-hidden="true">${crossIcon}</div>
      </div>
    `;
  }

  #onSlottedInputInputted = (ev: Event) => {
    this._isElementValid = isValidityValid(
      ev.currentTarget as HTMLInputElement
    );
  };

  touch = () => {
    this.touched = true;
  };
}

export const checkIcon = svg`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`;

export const crossIcon = svg`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;
