import { css, LitElement, html, svg } from "lit";
import { state } from "lit/decorators/state.js";
import { minireset } from "./minireset.js";

import { wormhole } from "./directives/wormhole.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCheckbox.defaultTagName]: TurtleCheckbox;
  }
}

type CheckState = "unchecked" | "checked" | "indeterminate";

/**
 * A simple checkbox.
 *
 * @element turtle-checkbox
 *
 * @slot - `<input type="checkbox">`
 */
export class TurtleCheckbox extends LitElement {
  static defaultTagName = "turtle-checkbox" as const;

  static override get styles() {
    // # Why `transition: 1ms background` for the slotted input?
    //
    // Because we can't listen for changes for `checked` property due to lack of DOM API and events.
    // This element not knowing the current `checked` property causes inconsistent visual appearance,
    // e.g. background is filled in primary color but check icon is not visible.
    //
    // In order to work-around this platform limitation, this element sets transition to the slotted
    // element and listen for `transitionstart` event for the transition. When a user changes `checked`
    // property, `input:checked` rule goes active and change the background color, then this element
    // will sync state inside `transitionstart` event handler.
    return [
      minireset,
      css`
        * {
          box-sizing: border-box;
        }

        :host {
          display: inline-block;
          position: relative;
          width: calc(2 * var(--turtle-ui--unit));
          height: calc(2 * var(--turtle-ui--unit));

          vertical-align: text-bottom;
        }

        ::slotted(input) {
          appearance: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: calc(0.4 * var(--turtle-ui--unit));

          transition: 1ms 0s linear background-color;
        }
        ::slotted(input:checked),
        ::slotted(input:indeterminate) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:not(:disabled):checked:hover),
        ::slotted(input:not(:disabled):indeterminate:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--6)
          );
        }
        ::slotted(input:hover),
        ::slotted(input:focus) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
          outline: none;
        }
        ::slotted(input:disabled) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        .icon {
          display: none;
          position: absolute;
          width: calc(1.2 * var(--turtle-ui--unit));
          height: calc(1.2 * var(--turtle-ui--unit));
          top: 50%;
          left: 50%;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          pointer-events: none;

          transform: translate(-50%, -50%);
        }
        .icon[data-active] {
          display: block;
        }
        .icon[data-disabled] {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `,
    ];
  }

  @state()
  _checkState: CheckState = "unchecked";

  @state()
  _disabled: boolean = false;

  #attributeSyncObserver = new MutationObserver((mutations) => {
    if (!mutations[0]) {
      return;
    }

    this.#sync(mutations[0].target as HTMLInputElement);
  });

  override render() {
    return html`
      <slot
        >${wormhole((el: Element | HTMLInputElement) => {
          if (!("checked" in el)) {
            return;
          }

          this.#sync(el);

          el.addEventListener("change", this.#onSlottedElementUpdated);
          el.addEventListener("input", this.#onSlottedElementUpdated);
          el.addEventListener("transitionstart", this.#onSlottedElementUpdated);

          this.#attributeSyncObserver.observe(el, {
            attributes: true,
            attributeFilter: ["disabled", "checked", "indeterminate"],
          });

          return () => {
            el.removeEventListener("change", this.#onSlottedElementUpdated);
            el.removeEventListener("input", this.#onSlottedElementUpdated);
            el.removeEventListener(
              "transitionstart",
              this.#onSlottedElementUpdated
            );

            this.#attributeSyncObserver.disconnect();
          };
        })}</slot
      >

      <svg
        class="icon"
        ?data-active=${this._checkState === "checked"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${checkedIcon}
      </svg>

      <svg
        class="icon"
        ?data-active=${this._checkState === "indeterminate"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${indeterminateIcon}
      </svg>
    `;
  }

  #sync = (el: HTMLInputElement) => {
    this._disabled = el.disabled;

    if (el.indeterminate) {
      this._checkState = "indeterminate";
      return;
    }

    this._checkState = el.checked ? "checked" : "unchecked";
  };

  #onSlottedElementUpdated = (ev: Event) => {
    this.#sync(ev.currentTarget as HTMLInputElement);
  };
}

const checkedIcon = svg`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`;

const indeterminateIcon = svg`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`;
