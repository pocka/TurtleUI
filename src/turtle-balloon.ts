import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";
import { styleMap } from "lit/directives/style-map.js";
import { minireset } from "./minireset.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleBalloon.defaultTagName]: TurtleBalloon;
  }
}

export type TailPosition = "left" | "right" | "bottom" | "top";

/**
 * Displays a balloon UI. a.k.a. Callout.
 *
 * This element is static placed: no `position: absolute` or `position: fixed`.
 * You need provide styles in your own to make this element a popover or a popup.
 *
 * @element turtle-balloon
 */
export class TurtleBalloon extends LitElement {
  static defaultTagName = "turtle-balloon" as const;

  static override get styles() {
    return [
      minireset,
      css`
        * {
          box-sizing: border-box;
        }

        :host {
          --turtle-balloon--bg: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0),
            0.8
          );
          --turtle-balloon--tail-width: calc(1.3 * var(--turtle-ui--unit));
          --turtle-balloon--tail-height: calc(0.6 * var(--turtle-ui--unit));
          --turtle-balloon--radius: 4px;

          display: inline-flex;
          box-sizing: border-box;
        }
        :host([tail-position="bottom"]) {
          flex-direction: column;
        }
        :host([tail-position="top"]) {
          flex-direction: column-reverse;
        }
        :host([tail-position="right"]) {
          flex-direction: row;
        }
        :host([tail-position="left"]) {
          flex-direction: row-reverse;
        }

        .body {
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          padding: 8px;

          background-color: var(--turtle-balloon--bg);
          border-radius: var(--turtle-balloon--radius);
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
        }

        .tail {
          border: calc(var(--turtle-balloon--tail-width) * 0.5) solid
            transparent;
        }
        :host([tail-position="bottom"]) > .tail,
        :host([tail-position="top"]) > .tail {
          margin-left: calc(
            (
                100% - var(--turtle-balloon--tail-width) -
                  var(--turtle-balloon--radius) * 2
              ) * var(--turtle-balloon--tail-offset) +
              var(--turtle-balloon--radius) + var(--turtle-balloon--tail-width) *
              0.5
          );
          width: var(--turtle-balloon--tail-width);
          height: var(--turtle-balloon--tail-height);
          transform: translateX(-50%);
        }
        :host([tail-position="bottom"]) > .tail {
          border-top-color: var(--turtle-balloon--bg);
          border-bottom: none;
        }
        :host([tail-position="top"]) > .tail {
          border-bottom-color: var(--turtle-balloon--bg);
          border-top: none;
        }
        :host([tail-position="left"]) > .tail,
        :host([tail-position="right"]) > .tail {
          height: var(--turtle-balloon--tail-width);
          width: var(--turtle-balloon--tail-height);
          align-self: center;
        }
        :host([tail-position="left"]) > .tail {
          border-right-color: var(--turtle-balloon--bg);
          border-left: none;
        }
        :host([tail-position="right"]) > .tail {
          border-left-color: var(--turtle-balloon--bg);
          border-right: none;
        }
      `,
    ];
  }

  /**
   * Where to show the balloon tail?
   * @type {"top" | "right" | "bottom" | "left"}
   */
  @property({
    type: String,
    attribute: "tail-position",
  })
  tailPosition: TailPosition = "bottom";

  /**
   * Horizontal position of the tail, in ratio (0.0 ~ 1.0, where 0.0 = 0%, 1.0 = 100%).
   * Ignored when `tail-position` is `"left"` or `"right"`.
   */
  @property({
    type: Number,
    attribute: "tail-offset",
  })
  tailOffset: number = 0.5;

  override render() {
    return html`
      <div class="body">
        <slot></slot>
      </div>

      <div
        class="tail"
        style=${styleMap({
          "--turtle-balloon--tail-offset": `${this.tailOffset}`,
        })}
        aria-hidden="true"
      ></div>
    `;
  }
}
