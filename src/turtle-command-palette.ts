import { css, LitElement, html, svg } from "lit";
import { property } from "lit/decorators/property.js";
import { state } from "lit/decorators/state.js";
import { minireset } from "./minireset.js";

import { wormhole } from "./directives/wormhole.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleCommandPalette.defaultTagName]: TurtleCommandPalette;
  }
}

/**
 * Command palette UI, which enables a user to search/select a command from a list of commands.
 *
 * This component handles basic keyboard controls, such as <kbd>Arrow Up</kbd> and <kbd>Enter</kbd>.
 * However, this component **does not** handles filtering: you need to filter `<turtle-command-palette-option>`
 * element based on the input text.
 *
 * Also, you need to implement exit actions (e.g. global <kbd>Esc</kbd> handling, backdrop) when you use this element as a modal dialog.
 *
 * @element turtle-command-palette
 *
 * @slot icon - Icon next to the textbox.
 * @slot search - Textbox. Use `<input type="text">` with `id` attribute set.
 * @slot listbox - Container list of options. Use `<turtle-command-palette-listbox>` with `id` attribute set.
 * @slot placeholder - Placeholder text for when there are no options available.
 *
 * @csspart icon - The default icon element (`<svg>`).
 */
export class TurtleCommandPalette extends LitElement {
  static defaultTagName = "turtle-command-palette" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          padding: 16px;
          box-sizing: border-box;
          max-height: 100%;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--9)
            );

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .searchbox {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .search::slotted(*) {
          appearance: none;
          display: block;
          flex: 1;
          min-width: 0;
          padding: 8px 12px;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          font: inherit;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          border-radius: 8px;
          outline: none;
        }
        .search::slotted(*:hover),
        .search::slotted(*:focus) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        .search::slotted(*:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
        }
        .search::slotted(input)::placeholder {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );

          opacity: 1;
        }

        .icon::slotted(*),
        [part="icon"] {
          flex-shrink: 0;
          width: calc(3.2 * var(--turtle-ui--unit));
          height: calc(3.2 * var(--turtle-ui--unit));
          margin: 4px 0;
          margin-inline-end: 16px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }

        .listbox::slotted(*) {
          margin-top: 16px;
          flex-shrink: 1;
        }

        .placeholder::slotted(*) {
          display: block;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          margin: 0;
          margin-top: 16px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
          text-align: center;
        }

        [data-hidden]::slotted(*) {
          display: none;
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
  role: string = "combobox";

  /**
   * Disables automatic WAI-ARIA attributes management.
   */
  @property({
    type: Boolean,
    attribute: "noautoaria",
  })
  noAutoAria: boolean = false;

  #textbox: HTMLInputElement | null = null;
  #currentIndex: number = 0;

  @state()
  _listbox: Element | null = null;

  @state()
  _options: Element[] = [];

  override render() {
    return html`
      <div class="searchbox">
        <slot class="icon" name="icon">${terminalIcon}</slot>
        <slot class="search" name="search"
          >${wormhole((el: HTMLInputElement | Element) => {
            // Process HTMLInputElement only.
            if (!("disabled" in el)) {
              return;
            }

            this.#textbox = el;
            this.#syncAriaAttributes();

            el.addEventListener("keydown", this.#handleKeyDown);

            return () => {
              this.#textbox = null;
              el.removeEventListener("keydown", this.#handleKeyDown);
            };
          })}</slot
        >
      </div>

      <slot class="listbox" name="listbox"
        >${wormhole((el: HTMLElement | Element) => {
          this._listbox = el;
          this._options = Array.from(el.children);

          this.#syncAriaAttributes();
          this.#changeFocusedOption(0);

          const onSlotChange = () => {
            this.#changeFocusedOption(0);

            this._options = Array.from(el.children);
          };

          el.shadowRoot?.addEventListener("slotchange", onSlotChange);

          const onClick = (ev: Event) => {
            if (!ev.target || !("getAttribute" in (ev.target as HTMLElement))) {
              return;
            }

            const target = ev.target as HTMLElement;
            const option = target.closest("turtle-command-palette-option");
            if (option) {
              /** @ignore */
              option.dispatchEvent(
                new CustomEvent("selectoption", { bubbles: true })
              );
            }
          };

          el.addEventListener("click", onClick);

          return () => {
            this._listbox = null;
            this._options = [];
            el.shadowRoot?.removeEventListener("slotchange", onSlotChange);
            el.removeEventListener("click", onClick);
          };
        })}</slot
      >

      <slot
        class="placeholder"
        name="placeholder"
        ?data-hidden=${this._options.length > 0}
      ></slot>
    `;
  }

  #changeFocusedOption = (index: number) => {
    if (this.noAutoAria) {
      return;
    }

    this.#currentIndex = index;

    if (!this.#textbox) {
      return;
    }

    if (!this._options.length) {
      this.#textbox.removeAttribute("aria-activedescendant");
      return;
    }

    // Ensure there is only one `aria-selected="true"`.
    this._options.forEach((el, i) => {
      if (i === index) {
        el.setAttribute("aria-selected", "true");
      } else {
        el.removeAttribute("aria-selected");
      }
    });

    const selectedOption = this._options[index];
    if (!selectedOption?.id) {
      console.warn("[turtle-command-palette] Listbox option MUST have an ID.");
      return;
    }

    if (this._listbox?.clientHeight !== this._listbox?.scrollHeight) {
      selectedOption.scrollIntoView();
    }

    this.#textbox.setAttribute("aria-activedescendant", selectedOption.id);
  };

  #syncAriaAttributes = () => {
    if (
      this.noAutoAria ||
      !this.#textbox ||
      !this._listbox ||
      this.role !== "combobox"
    ) {
      return;
    }

    if (!this._listbox.id) {
      console.warn("[turtle-command-palette] Listbox MUST have an ID.");
      return;
    }

    const options = Array.from(this._listbox.children);

    this.setAttribute("aria-haspopup", "listbox");
    this.setAttribute("aria-owns", this._listbox.id);
    this.setAttribute("aria-expanded", String(options.length > 0));

    this.#textbox.setAttribute("aria-controls", this._listbox.id);
  };

  #handleKeyDown = (ev: KeyboardEvent) => {
    // Do nothing when IME is on.
    if (ev.isComposing) {
      return;
    }

    switch (ev.key) {
      case "Enter":
        this.#selectItem();
        ev.preventDefault();
        return;
      case "Escape":
        this.#cancel();
        ev.preventDefault();
        return;
      case "ArrowUp": {
        const prevIndex =
          this.#currentIndex <= 0
            ? this._options.length - 1
            : this.#currentIndex - 1;
        this.#changeFocusedOption(prevIndex);
        ev.preventDefault();
        return;
      }
      case "ArrowDown": {
        const nextIndex =
          this.#currentIndex >= this._options.length - 1
            ? 0
            : this.#currentIndex + 1;
        this.#changeFocusedOption(nextIndex);
        ev.preventDefault();
        return;
      }
    }
  };

  #selectItem = (index: number = this.#currentIndex) => {
    const option = this._options[index];
    if (!option) {
      return;
    }

    /** @ignore */
    option.dispatchEvent(new CustomEvent("selectoption", { bubbles: true }));
  };

  #cancel = () => {
    /**
     * When the user press `ESC` key on textbox.
     */
    this.dispatchEvent(new CustomEvent("cancel"));
  };
}

const terminalIcon = svg`
  <svg part="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;
