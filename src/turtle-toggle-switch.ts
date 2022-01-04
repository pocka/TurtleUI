import { css, LitElement, html } from "lit";
import { state } from "lit/decorators/state.js";
import { minireset } from "./minireset.js";

import { wormhole } from "./directives/wormhole.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleToggleSwitch.defaultTagName]: TurtleToggleSwitch;
  }
}

/**
 * Toggle Switch UI for representing an on/off value.
 *
 * **NOTE:** Due to browsers fire neither `blur` nor `change/input` event on unchecked radio (probably the spec defined), you can't place `<input type="radio">`.
 *
 * @element turtle-toggle-switch
 *
 * @slot - `<input type="checkbox" />`.
 */
export class TurtleToggleSwitch extends LitElement {
  static defaultTagName = "turtle-toggle-switch" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          position: relative;
          display: inline-flex;
          justify-content: flex-start;
          align-items: flex-start;
        }

        ::slotted(input) {
          -webkit-appearance: none;
          appearance: none;
          width: calc(4 * var(--turtle-ui--unit));
          height: calc(2.4 * var(--turtle-ui--unit));
          margin: 0;
          padding: 0;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          box-sizing: border-box;

          background: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-radius: calc(4 * var(--turtle-ui--unit));
        }
        ::slotted(input:checked) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:hover) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:checked:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--6)
          );
        }
        ::slotted(input:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--color--highlight--shadow);
          outline: none;
        }
        ::slotted(input:disabled:disabled) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        .knob {
          display: block;
          position: absolute;
          width: calc(1.8 * var(--turtle-ui--unit));
          height: calc(1.8 * var(--turtle-ui--unit));
          top: 50%;
          left: calc(0.3 * var(--turtle-ui--unit));
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--light-10)
          );
          border-radius: 50%;
          pointer-events: none;

          transform: translateY(-50%);
          transition: transform 0.3s ease;
        }
        .knob[data-checked] {
          transform: translate(100%, -50%)
            translateX(calc(-0.6 * var(--turtle-ui--unit)));
        }

        .knob[data-disabled] {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .knob {
            transition: none;
          }
        }
      `,
    ];
  }

  @state()
  private _checked: boolean = false;

  @state()
  private _disabled: boolean = false;

  #attributeSyncObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      switch (mutation.attributeName) {
        case "disabled":
          this._disabled = (mutation.target as HTMLInputElement).disabled;
          break;
        case "checked":
          this._checked = (mutation.target as HTMLInputElement).checked;
          break;
      }
    }
  });

  override render() {
    return html`
      <slot>
        ${wormhole((el: Element | HTMLInputElement) => {
          if (!("checked" in el)) {
            return;
          }

          this._disabled = el.disabled;
          this._checked = el.checked;

          el.addEventListener("input", this.#syncChecked);

          this.#attributeSyncObserver.observe(el, {
            attributes: true,
            attributeFilter: ["disabled", "checked"],
          });

          return () => {
            el.removeEventListener("input", this.#syncChecked);

            this.#attributeSyncObserver.disconnect();
          };
        })}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `;
  }

  #syncChecked = (ev: Event) => {
    this._checked = (ev.currentTarget as HTMLInputElement).checked;
  };
}
