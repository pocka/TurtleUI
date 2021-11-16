import { css, LitElement, html, svg, nothing } from "lit";
import { property } from "lit/decorators/property.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { minireset } from "minireset.css/minireset.css.lit.js";

import { SlotSensorController } from "./controllers/SlotSensorController.js";
import { AutoFocusable } from "./mixins/AutoFocusable.js";

export type Severity = "info" | "success" | "warning" | "danger";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleSnackbar.defaultTagName]: TurtleSnackbar;
  }
}

/**
 * @element turtle-snackbar
 */
export class TurtleSnackbar extends AutoFocusable(LitElement) {
  static defaultTagName = "turtle-snackbar" as const;

  static override get styles() {
    return [
      minireset,
      css`
        * {
          box-sizing: border-box;
        }

        :host {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--mono);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--9);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--10);
          --turtle-snackbar--fg-tone: var(--turtle-ui--color--tone--mono);
          --turtle-snackbar--fg-level: var(--turtle-ui--color--level--0);
          --turtle-snackbar--focus-tone: var(--turtle-ui--color--tone--primary);
          --turtle-snackbar--focus-level: var(--turtle-ui--color--level--4);

          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          padding: 8px 12px;
          margin: 0;
          gap: 4px;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-snackbar--bg-tone),
            var(--turtle-snackbar--bg-level)
          );
          border-radius: 8px;
          color: hsl(
            var(--turtle-snackbar--fg-tone),
            var(--turtle-snackbar--fg-level)
          );
        }
        :host([severity="success"]) {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--safe);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--3);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--4);
          --turtle-snackbar--fg-level: var(--turtle-ui--color--level--10);
          --turtle-snackbar--focus-tone: var(--turtle-snackbar--bg-tone);
          --turtle-snackbar--focus-level: var(--turtle-snackbar--bg-level);
        }
        :host([severity="warning"]) {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--warning);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--5);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--6);
          --turtle-snackbar--focus-tone: var(--turtle-snackbar--bg-tone);
          --turtle-snackbar--focus-level: var(--turtle-snackbar--bg-level);
        }
        :host([severity="danger"]) {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--danger);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--4);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--7);
          --turtle-snackbar--fg-level: var(--turtle-ui--color--level--10);
          --turtle-snackbar--focus-tone: var(--turtle-snackbar--bg-tone);
          --turtle-snackbar--focus-level: var(--turtle-snackbar--bg-level);
        }
        :host(:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-snackbar--focus-tone),
              var(--turtle-snackbar--focus-level),
              0.3
            );
          outline: none;
        }

        @media (prefers-color-scheme: dark) {
          :host([severity="warning"]) {
            --turtle-snackbar--fg-level: var(--turtle-ui--color--level--10);
          }
        }

        .body {
          flex: 1;
        }

        .lifetime {
          width: auto;
          height: calc(1.8 * var(--turtle-ui--unit));

          fill: none;
          stroke: currentColor;
          stroke-width: 50;
          stroke-dasharray: 10;

          animation: linear both live;
          transform: rotate(90deg) scaleX(-1);
        }
        @keyframes live {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: 10;
          }
        }

        .actions {
          display: none;
          justify-content: flex-end;
          align-items: stretch;
          gap: 4px;
        }
        .actions[data-assigned] {
          display: flex;
        }
      `,
    ];
  }

  #actionsSensor = new SlotSensorController(this, "action");

  @property({
    type: String,
    reflect: true,
  })
  severity: Severity = "info";

  /**
   * in seconds
   */
  @property({
    type: Number,
  })
  lifetime?: number;

  @property({
    type: String,
    attribute: "lifetime-label",
  })
  lifetimeLabel?: string;

  override render() {
    return html`
      <div class="body">
        <slot></slot>
      </div>

      ${typeof this.lifetime === "number"
        ? svg`
        <svg
          class="lifetime"
          style=${styleMap({
            "animation-duration": this.lifetime + "s",
          })}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${
            typeof this.lifetimeLabel !== "string" ? "true" : "false"
          }
          role=${ifDefined(
            typeof this.lifetimeLabel === "string" ? "img" : undefined
          )}
          aria-label=${ifDefined(this.lifetimeLabel)}
          @animationend=${this.#emitTimerEnd}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`
        : nothing}

      <div class="actions" ?data-assigned=${this.#actionsSensor.assigned}>
        <slot name="action"></slot>
      </div>
    `;
  }

  #emitTimerEnd = () => {
    this.dispatchEvent(new CustomEvent("timerend"));
  };
}
