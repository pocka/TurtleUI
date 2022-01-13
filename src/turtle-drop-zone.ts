import { css, html, LitElement } from "lit";
import { property } from "lit/decorators/property.js";

import { minireset } from "./minireset.js";

/**
 * Drop zone UI, which allows users to drop files or DOM elements into.
 * To handle the dragged/dropped files, use `dragover` and `drop` event.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
 *
 * @element turtle-drop-zone
 *
 * @slot - Default slot, primarily for text.
 * @slot icon - We set optimal `font-size` for this slot. Override if necessary.
 */
export class TurtleDropZone extends LitElement {
  static defaultTagName = "turtle-drop-zone" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: calc(24 * var(--turtle-ui--unit));
          gap: calc(0.8 * var(--turtle-ui--unit));
          border: 2px dashed
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10),
            0.24
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          border-radius: 8px;
          user-select: none;
        }
        :host([disabled]) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
          cursor: not-allowed;
        }
        :host([border-color="primary"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        :host([border-color="safe"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }
        :host([border-color="danger"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4)
          );
        }
        :host([border-color="warning"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--warning),
            var(--turtle-ui--color--level--4)
          );
        }

        .icon::slotted(*) {
          font-size: calc(3.2 * var(--turtle-ui--unit));
        }

        .text {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
        }
      `,
    ];
  }

  /**
   * Whether to accept a drop.
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  disabled: boolean = false;

  /**
   * Color of the border. Useful to indicate whether the dragging file is allowed.
   * If you want more customization, set `border-color` CSS property at this element.
   */
  @property({
    type: String,
    reflect: true,
    attribute: "border-color",
  })
  borderColor: "primary" | "safe" | "danger" | "warning" | "neutral" =
    "neutral";

  constructor() {
    super();

    this.addEventListener(
      "drop",
      (ev) => {
        ev.preventDefault();

        if (this.disabled) {
          ev.stopImmediatePropagation();
        }
      },
      {
        // Make sure this listener will be called first.
        capture: true,
      }
    );

    this.addEventListener(
      "dragover",
      (ev) => {
        ev.preventDefault();

        if (this.disabled) {
          if (ev.dataTransfer) {
            ev.dataTransfer.dropEffect = "none";
          }

          ev.stopImmediatePropagation();
        }
      },
      {
        // Make sure this listener will be called first.
        capture: true,
      }
    );
  }

  override render() {
    return html`
      <slot class="icon" name="icon"></slot>

      <span class="text">
        <slot></slot>
      </span>
    `;
  }
}
