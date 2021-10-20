//  Copyright 2021 Shota Fuji
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
import { css, LitElement, html, PropertyValues } from "lit";
import { property } from "lit/decorators/property";
import { minireset } from "minireset.css/minireset.css.lit.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleButton.defaultTagName]: TurtleButton;
  }
}

/**
 * A basic button element.
 */
export class TurtleButton extends LitElement {
  static defaultTagName = "turtle-button" as const;

  /**
   * Color variant
   *
   * Unsupported value will be treated as `"normal"`.
   */
  @property({
    type: String,
  })
  variant: "normal" | "danger" | "primary" = "normal";

  @property({
    type: Boolean,
    reflect: true,
  })
  disabled: boolean = false;

  /**
   * Whether to use a slotted element as a button element.
   * You need to provide an Element to slot, instead of a TextFragment.
   *
   * When `sync-attributes` attribute is set to `true` (default) or `syncAttributes` property is set to `true`,
   * <turtle-button> sets slotted elements' `disabled` or `aria-disabled` attribute to sync to
   * the value of the `disabled` attribute in <turtle-button>. If you set `disabled` or `aria-disabled`
   * attribute for the slotted elements, set `sync-attributes="false"`.
   *
   * @example
   * <turtle-button lightdom>
   *   <button type="submit">Button</button>
   * </turtle-button>
   */
  @property({
    type: Boolean,
    attribute: "lightdom",
  })
  lightDOM: boolean = false;

  /**
   * Whether to manipulate slotted elements' attributes based on <turtle-button>'s ones.
   * Affects only when lightDOM is set to `true`.
   *
   * You need to manually set attributes based on component state.
   */
  @property({
    converter: {
      fromAttribute(value) {
        return value === "true";
      },
      toAttribute(value: boolean) {
        return String(value);
      },
    },
    attribute: "sync-attributes",
  })
  syncAttributes: boolean = true;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --base-font-size: var(--turtle-ui--base-font-size, 1rem);
          --turtle-ui--button--border-color: var(--turtle-ui--color--border);
          --turtle-ui--button--fg: var(--turtle-ui--color--text);
          --turtle-ui--button--bg: var(--turtle-ui--color--background);
          --turtle-ui--button--bg--hover: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          --turtle-ui--button--bg--active: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
          --turtle-ui--button--highlight-color: var(
            --turtle-ui--color--highlight
          );
          --turtle-ui--button--highlight-shadow-color: var(
            --turtle-ui--color--highlight--shadow
          );

          display: inline-block;
          font-size: var(--base-font-size);
          width: auto;
          box-sizing: border-box;
        }

        :host([variant="primary"]) {
          --turtle-ui--button--border-color: transparent;
          --turtle-ui--button--fg: hsl(
            var(--turtle-ui--color--tone--mono),
            100%
          );
          --turtle-ui--button--bg: var(--turtle-ui--color--primary);
          --turtle-ui--button--bg--hover: var(
            --turtle-ui--color--primary--light
          );
          --turtle-ui--button--bg--active: var(
            --turtle-ui--color--primary--dark
          );
          --turtle-ui--button--highlight-color: rgba(0, 0, 0, 0.4);
          --turtle-ui--button--highlight-shadow-color: rgba(0, 0, 0, 0.4);
        }

        :host([variant="danger"]) {
          --turtle-ui--button--border-color: transparent;
          --turtle-ui--button--fg: hsl(
            var(--turtle-ui--color--tone--mono),
            100%
          );
          --turtle-ui--button--bg: var(--turtle-ui--color--danger);
          --turtle-ui--button--bg--hover: var(
            --turtle-ui--color--danger--light
          );
          --turtle-ui--button--bg--active: var(
            --turtle-ui--color--danger--dark
          );
          --turtle-ui--button--highlight-color: rgba(0, 0, 0, 0.4);
          --turtle-ui--button--highlight-shadow-color: rgba(0, 0, 0, 0.4);
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: inherit;
          font: inherit;
          font-size: 1em;
          line-height: 1.5;
          border: 1px solid var(--turtle-ui--button--border-color);
          padding: calc(var(--base-font-size) / 2)
            calc(var(--base-font-size) * 0.75);

          background-color: var(--turtle-ui--button--bg);
          border-radius: 8px;
          color: var(--turtle-ui--button--fg);
          cursor: pointer;
          font-weight: bold;
          text-align: center;
          text-decoration: inherit;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: var(--turtle-ui--button--bg--hover);
        }
        .button:active,
        ::slotted(:active) {
          background-color: var(--turtle-ui--button--bg--active);
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--button--highlight-shadow-color)
            inset;
          border-color: var(--turtle-ui--button--highlight-color);
          outline: none;
        }
        .button:disabled,
        ::slotted(:disabled),
        ::slotted([aria-disabled="true"]) {
          box-shadow: none;
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
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
      ? html`<slot id="lightdom"></slot>`
      : html`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;
  }

  override updated(changedProperties: PropertyValues<TurtleButton>) {
    if (
      this.shadowRoot &&
      this.lightDOM &&
      this.syncAttributes &&
      changedProperties.has("disabled")
    ) {
      this.#syncDisabledAttributeToLightDOM();
    }
  }

  override connectedCallback() {
    super.connectedCallback();

    this.addEventListener("click", this.#abortClickOnDisabledState, {
      capture: true,
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener("click", this.#abortClickOnDisabledState, {
      capture: true,
    });
  }

  /**
   * Mutate slotted elements' attribute base on `disabled` attribute value of <turtle-button>.
   * For elements have `disabled` property, set empty string to `disabled` attribute when disabled and
   * remove the attribute when not.
   * For elements does not `disabled` property, set `"true"` to `aria-disabled` attribute when disabled
   * and set `"false"` to the attribute when not.
   */
  #syncDisabledAttributeToLightDOM() {
    const slot = this.shadowRoot!.getElementById(
      "lightdom"
    ) as HTMLSlotElement | null;
    if (!slot) {
      return;
    }

    const elements = slot.assignedElements();
    for (const el of elements) {
      if ("disabled" in el) {
        if (this.disabled) {
          el.setAttribute("disabled", "");
        } else {
          el.removeAttribute("disabled");
        }
      } else {
        el.setAttribute("aria-disabled", String(this.disabled));
      }
    }
  }

  /**
   * Cancel click event propagation and default behaviour when the component is in disabled state
   * and is used with lightDOM mode. Browsers does not emit `click` event when the element is
   * disabled, but does when the element only has `aria-disabled="true"`.
   */
  #abortClickOnDisabledState(ev: Event) {
    if (!this.lightDOM || !this.disabled) {
      return;
    }

    ev.preventDefault();
    ev.stopPropagation();
  }
}
