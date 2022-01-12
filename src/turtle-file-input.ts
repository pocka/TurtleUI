import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";
import { minireset } from "./minireset.js";

import { wormhole } from "./directives/wormhole.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleFileInput.defaultTagName]: TurtleFileInput;
  }
}

function getControlTarget(source: Element): HTMLInputElement | null {
  const ariaControls = source.getAttribute("aria-controls");
  if (!ariaControls) {
    return null;
  }

  const el = document.getElementById(ariaControls);
  if (!el || !(el instanceof HTMLInputElement) || el.type !== "file") {
    return null;
  }

  return el;
}

/**
 * File selector element.
 * Unlike the native `<input type="file">`, this elements does not open OS file picker when a user clicks outside the button.
 *
 * By default, this element creates `<input type="file">` then click it when a user click the slotted button.
 * You can change the `<input type="file">` by giving an ID of the input to the button via `aria-controls` attribute.
 * This is useful when you use this element in server-side template.
 *
 * ```html
 * <form>
 *   <input id="sample_file" type="file" hidden />
 *   <turtle-file-input>
 *     <turtle-button aria-controls="sample_file">Select file</turtle-button>
 *
 *     <span slot="placeholder">No file selected.</span>
 *   </turtle-file-input>
 * </form>
 * ```
 *
 * @element turtle-file-input
 *
 * @slot - A button that launches OS file picker when pressed by a user. This element adds custom event listener.
 * @slot placeholder - Text shown when file is not selected.
 *
 * @csspart text - The text section displaying status and filename.
 */
export class TurtleFileInput extends LitElement {
  static defaultTagName = "turtle-file-input" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: flex;
          gap: calc(1.6 * var(--turtle-ui--unit));
          justify-content: start;
          align-items: center;

          overflow: visible;
        }

        .input::slotted(*) {
          flex-shrink: 0;
        }

        .filename {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;

          white-space: nowrap;
          overflow-x: hidden;
          text-overflow: ellipsis;
        }
      `,
    ];
  }

  /**
   * `accept` attribute for generated `<input type="file">`.
   * Ignored when you explicitly set `<input type="file">` via `aria-controls` at the slotted button.
   */
  @property({
    type: String,
  })
  accept?: string;

  /**
   * `capture` attribute for generated `<input type="file">`.
   * Ignored when you explicitly set `<input type="file">` via `aria-controls` at the slotted button.
   */
  @property({
    type: String,
  })
  capture?: string;

  /**
   * `multiple` attribute for generated `<input type="file">`.
   * Ignored when you explicitly set `<input type="file">` via `aria-controls` at the slotted button.
   */
  @property({
    type: Boolean,
  })
  multiple: boolean = false;

  /**
   * Delimiter string to use for filename text.
   */
  @property({
    type: String,
  })
  delimiter: string = ", ";

  #files: FileList | null = null;

  /**
   * Same as `HTMLInputElement.files`.
   */
  get files(): FileList | null {
    return this.#files;
  }

  get #fileNames(): string | null {
    if (!this.#files || !this.#files.length) {
      return null;
    }

    return Array.from(this.#files)
      .map((file) => file.name)
      .join(this.delimiter);
  }

  override render() {
    return html`
      <slot class="input"
        >${wormhole((el: Element) => {
          el.addEventListener("click", this.#onButtonClick);

          return () => {
            el.removeEventListener("click", this.#onButtonClick);
          };
        })}</slot
      >

      <span class="filename" part="text">
        ${this.#fileNames
          ? html`<span title=${this.#fileNames}>${this.#fileNames}</span>`
          : html`<slot name="placeholder"></slot>`}
      </span>
    `;
  }

  #createFileInput(): HTMLInputElement {
    const el = document.createElement("input");

    el.type = "file";

    if (typeof this.accept === "string") {
      el.accept = this.accept;
    }

    if (typeof this.capture === "string") {
      el.capture = this.capture;
    }

    el.multiple = this.multiple;

    return el;
  }

  #onFileSelected = (ev: Event) => {
    const target = ev.currentTarget as HTMLInputElement;

    this.#files = target.files;
    this.requestUpdate();

    /**
     * When a user selected file(s).
     * You can access selected file(s) via `(event).detail.files` or `(element).files`, which are `FileList | null`.
     */
    this.dispatchEvent(
      new CustomEvent("selectfile", { detail: { files: target.files } })
    );
  };

  #onButtonClick = (ev: Event) => {
    const target = ev.currentTarget as Element;

    const file = getControlTarget(target) || this.#createFileInput();

    // Remove stale listener that occurs when using input ref and user cancelled
    file.removeEventListener("input", this.#onFileSelected);

    file.addEventListener("input", this.#onFileSelected, { once: true });

    file.click();
  };
}
