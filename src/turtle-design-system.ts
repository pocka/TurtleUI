import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleDesignSystem.defaultTagName]: TurtleDesignSystem;
  }
}

/**
 * Design System wrapper.
 *
 * This component provides CSS custom properties and set basic styles to itself.
 *
 * @element turtle-design-system
 *
 * @slot - Your app.
 *
 * @cssprop [--turtle-ui--unit=10px] Base unit size for responsive font size.
 * @cssprop [--turtle-ui--color--level--0] - L%
 * @cssprop [--turtle-ui--color--level--1] - L%
 * @cssprop [--turtle-ui--color--level--2] - L%
 * @cssprop [--turtle-ui--color--level--3] - L%
 * @cssprop [--turtle-ui--color--level--4] - L%
 * @cssprop [--turtle-ui--color--level--5] - L%
 * @cssprop [--turtle-ui--color--level--6] - L%
 * @cssprop [--turtle-ui--color--level--7] - L%
 * @cssprop [--turtle-ui--color--level--8] - L%
 * @cssprop [--turtle-ui--color--level--9] - L%
 * @cssprop [--turtle-ui--color--level--10] - L%
 * @cssprop [--turtle-ui--color--tone--mono] - H, S%
 * @cssprop [--turtle-ui--color--tone--safe] - H, S%
 * @cssprop [--turtle-ui--color--tone--warning] - H, S%
 * @cssprop [--turtle-ui--color--tone--danger] - H, S%
 * @cssprop [--turtle-ui--color--tone--primary] - H, S%
 */
export class TurtleDesignSystem extends LitElement {
  static defaultTagName = "turtle-design-system" as const;

  /**
   * Explicitly set the color theme.
   */
  @property({
    type: String,
    reflect: true,
  })
  theme?: "light" | "dark";

  static override get styles() {
    return css`
      :host {
        --turtle-ui--unit: 10px;
        --turtle-ui--base-font-size: calc(1.6 * var(--turtle-ui--unit));

        /* Levels (light) */
        --turtle-ui--color--level--light-0: 0%;
        --turtle-ui--color--level--light-1: 10%;
        --turtle-ui--color--level--light-2: 20%;
        --turtle-ui--color--level--light-3: 30%;
        --turtle-ui--color--level--light-4: 40%;
        --turtle-ui--color--level--light-5: 50%;
        --turtle-ui--color--level--light-6: 60%;
        --turtle-ui--color--level--light-7: 70%;
        --turtle-ui--color--level--light-8: 80%;
        --turtle-ui--color--level--light-9: 90%;
        --turtle-ui--color--level--light-10: 100%;
        --turtle-ui--color--level--light-safe: 34%;
        --turtle-ui--color--level--light-danger: 44%;
        --turtle-ui--color--level--light-primary: 40%;
        --turtle-ui--level--modifier--light-darker: -1;
        --turtle-ui--level--modifier--light-lighter: 1;
        --turtle-ui--level--modifier--light-amount: 16%;

        /* Levels (dark) */
        --turtle-ui--color--level--dark-0: 100%;
        --turtle-ui--color--level--dark-1: 92%;
        --turtle-ui--color--level--dark-2: 84%;
        --turtle-ui--color--level--dark-3: 76%;
        --turtle-ui--color--level--dark-4: 68%;
        --turtle-ui--color--level--dark-5: 60%;
        --turtle-ui--color--level--dark-6: 52%;
        --turtle-ui--color--level--dark-7: 44%;
        --turtle-ui--color--level--dark-8: 36%;
        --turtle-ui--color--level--dark-9: 28%;
        --turtle-ui--color--level--dark-10: 20%;
        --turtle-ui--level--modifier--dark-darker: 1;
        --turtle-ui--level--modifier--dark-lighter: -1;

        /* Default levels */
        --turtle-ui--color--level--0: var(--turtle-ui--color--level--light-0);
        --turtle-ui--color--level--1: var(--turtle-ui--color--level--light-1);
        --turtle-ui--color--level--2: var(--turtle-ui--color--level--light-2);
        --turtle-ui--color--level--3: var(--turtle-ui--color--level--light-3);
        --turtle-ui--color--level--4: var(--turtle-ui--color--level--light-4);
        --turtle-ui--color--level--5: var(--turtle-ui--color--level--light-5);
        --turtle-ui--color--level--6: var(--turtle-ui--color--level--light-6);
        --turtle-ui--color--level--7: var(--turtle-ui--color--level--light-7);
        --turtle-ui--color--level--8: var(--turtle-ui--color--level--light-8);
        --turtle-ui--color--level--9: var(--turtle-ui--color--level--light-9);
        --turtle-ui--color--level--10: var(--turtle-ui--color--level--light-10);
        --turtle-ui--color--level--safe: var(
          --turtle-ui--color--level--light-safe
        );
        --turtle-ui--color--level--danger: var(
          --turtle-ui--color--level--light-danger
        );
        --turtle-ui--color--level--primary: var(
          --turtle-ui--color--level--light-primary
        );
        --turtle-ui--level--modifier--darker: var(
          --turtle-ui--level--modifier--light-darker
        );
        --turtle-ui--level--modifier--lighter: var(
          --turtle-ui--level--modifier--light-lighter
        );
        --turtle-ui--level--modifier--amount: var(
          --turtle-ui--level--modifier--light-amount
        );

        --turtle-ui--color--tone--mono: 0, 0%;
        --turtle-ui--color--tone--safe: 123, 46%;
        --turtle-ui--color--tone--warning: 43, 96%;
        --turtle-ui--color--tone--danger: 14, 100%;
        --turtle-ui--color--tone--primary: 204, 100%;

        --turtle-ui--color--background: hsl(
          var(--turtle-ui--color--tone--mono),
          var(--turtle-ui--color--level--10)
        );
        --turtle-ui--color--text: hsl(
          var(--turtle-ui--color--tone--mono),
          var(--turtle-ui--color--level--0)
        );
        --turtle-ui--color--border: hsl(
          var(--turtle-ui--color--tone--mono),
          var(--turtle-ui--color--level--7)
        );
        --turtle-ui--color--safe: hsl(
          var(--turtle-ui--color--tone--safe),
          var(--turtle-ui--color--level--safe)
        );
        --turtle-ui--color--safe--light: hsl(
          var(--turtle-ui--color--tone--safe),
          calc(
            var(--turtle-ui--color--level--safe) +
              (
                var(--turtle-ui--level--modifier--lighter) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--safe--dark: hsl(
          var(--turtle-ui--color--tone--safe),
          calc(
            var(--turtle-ui--color--level--safe) +
              (
                var(--turtle-ui--level--modifier--darker) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--primary: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary)
        );
        --turtle-ui--color--primary--light: hsl(
          var(--turtle-ui--color--tone--primary),
          calc(
            var(--turtle-ui--color--level--primary) +
              (
                var(--turtle-ui--level--modifier--lighter) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--primary--dark: hsl(
          var(--turtle-ui--color--tone--primary),
          calc(
            var(--turtle-ui--color--level--primary) +
              (
                var(--turtle-ui--level--modifier--darker) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--danger: hsl(
          var(--turtle-ui--color--tone--danger),
          var(--turtle-ui--color--level--danger)
        );
        --turtle-ui--color--danger--light: hsl(
          var(--turtle-ui--color--tone--danger),
          calc(
            var(--turtle-ui--color--level--danger) +
              (
                var(--turtle-ui--level--modifier--lighter) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--danger--dark: hsl(
          var(--turtle-ui--color--tone--danger),
          calc(
            var(--turtle-ui--color--level--danger) +
              (
                var(--turtle-ui--level--modifier--darker) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--highlight: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary)
        );
        --turtle-ui--color--highlight--shadow: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary),
          0.32
        );

        --turtle-ui--shadow--1: 0px 4px 16px rgba(0, 0, 0, 0.08);
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --turtle-ui--color--level--0: var(
            --turtle-ui--color--level--dark-0,
            var(--turtle-ui--color--level--light-0)
          );
          --turtle-ui--color--level--1: var(
            --turtle-ui--color--level--dark-1,
            var(--turtle-ui--color--level--light-1)
          );
          --turtle-ui--color--level--2: var(
            --turtle-ui--color--level--dark-2,
            var(--turtle-ui--color--level--light-2)
          );
          --turtle-ui--color--level--3: var(
            --turtle-ui--color--level--dark-3,
            var(--turtle-ui--color--level--light-3)
          );
          --turtle-ui--color--level--4: var(
            --turtle-ui--color--level--dark-4,
            var(--turtle-ui--color--level--light-4)
          );
          --turtle-ui--color--level--5: var(
            --turtle-ui--color--level--dark-5,
            var(--turtle-ui--color--level--light-5)
          );
          --turtle-ui--color--level--6: var(
            --turtle-ui--color--level--dark-6,
            var(--turtle-ui--color--level--light-6)
          );
          --turtle-ui--color--level--7: var(
            --turtle-ui--color--level--dark-7,
            var(--turtle-ui--color--level--light-7)
          );
          --turtle-ui--color--level--8: var(
            --turtle-ui--color--level--dark-8,
            var(--turtle-ui--color--level--light-8)
          );
          --turtle-ui--color--level--9: var(
            --turtle-ui--color--level--dark-9,
            var(--turtle-ui--color--level--light-9)
          );
          --turtle-ui--color--level--10: var(
            --turtle-ui--color--level--dark-10,
            var(--turtle-ui--color--level--light-10)
          );
          --turtle-ui--color--level--safe: var(
            --turtle-ui--color--level--dark-safe,
            var(--turtle-ui--color--level--light-safe)
          );
          --turtle-ui--color--level--danger: var(
            --turtle-ui--color--level--dark-danger,
            var(--turtle-ui--color--level--light-danger)
          );
          --turtle-ui--color--level--primary: var(
            --turtle-ui--color--level--dark-primary,
            var(--turtle-ui--color--level--light-primary)
          );
          --turtle-ui--level--modifier--darker: var(
            --turtle-ui--level--modifier--dark-darker,
            var(--turtle-ui--level--modifier--light-darker)
          );
          --turtle-ui--level--modifier--lighter: var(
            --turtle-ui--level--modifier--dark-lighter,
            var(--turtle-ui--level--modifier--light-lighter)
          );
          --turtle-ui--level--modifier--amount: var(
            --turtle-ui--level--modifier--dark-amount,
            var(--turtle-ui--level--modifier--light-amount)
          );
        }
      }

      :host([theme="light"]) {
        --turtle-ui--color--level--0: var(--turtle-ui--color--level--light-0);
        --turtle-ui--color--level--1: var(--turtle-ui--color--level--light-1);
        --turtle-ui--color--level--2: var(--turtle-ui--color--level--light-2);
        --turtle-ui--color--level--3: var(--turtle-ui--color--level--light-3);
        --turtle-ui--color--level--4: var(--turtle-ui--color--level--light-4);
        --turtle-ui--color--level--5: var(--turtle-ui--color--level--light-5);
        --turtle-ui--color--level--6: var(--turtle-ui--color--level--light-6);
        --turtle-ui--color--level--7: var(--turtle-ui--color--level--light-7);
        --turtle-ui--color--level--8: var(--turtle-ui--color--level--light-8);
        --turtle-ui--color--level--9: var(--turtle-ui--color--level--light-9);
        --turtle-ui--color--level--10: var(--turtle-ui--color--level--light-10);
        --turtle-ui--color--level--safe: var(
          --turtle-ui--color--level--light-safe
        );
        --turtle-ui--color--level--danger: var(
          --turtle-ui--color--level--light-danger
        );
        --turtle-ui--color--level--primary: var(
          --turtle-ui--color--level--light-primary
        );
        --turtle-ui--level--modifier--darker: var(
          --turtle-ui--level--modifier--light-darker
        );
        --turtle-ui--level--modifier--lighter: var(
          --turtle-ui--level--modifier--light-lighter
        );
        --turtle-ui--level--modifier--amount: var(
          --turtle-ui--level--modifier--light-amount
        );
      }

      :host([theme="dark"]) {
        --turtle-ui--color--level--0: var(
          --turtle-ui--color--level--dark-0,
          var(--turtle-ui--color--level--light-0)
        );
        --turtle-ui--color--level--1: var(
          --turtle-ui--color--level--dark-1,
          var(--turtle-ui--color--level--light-1)
        );
        --turtle-ui--color--level--2: var(
          --turtle-ui--color--level--dark-2,
          var(--turtle-ui--color--level--light-2)
        );
        --turtle-ui--color--level--3: var(
          --turtle-ui--color--level--dark-3,
          var(--turtle-ui--color--level--light-3)
        );
        --turtle-ui--color--level--4: var(
          --turtle-ui--color--level--dark-4,
          var(--turtle-ui--color--level--light-4)
        );
        --turtle-ui--color--level--5: var(
          --turtle-ui--color--level--dark-5,
          var(--turtle-ui--color--level--light-5)
        );
        --turtle-ui--color--level--6: var(
          --turtle-ui--color--level--dark-6,
          var(--turtle-ui--color--level--light-6)
        );
        --turtle-ui--color--level--7: var(
          --turtle-ui--color--level--dark-7,
          var(--turtle-ui--color--level--light-7)
        );
        --turtle-ui--color--level--8: var(
          --turtle-ui--color--level--dark-8,
          var(--turtle-ui--color--level--light-8)
        );
        --turtle-ui--color--level--9: var(
          --turtle-ui--color--level--dark-9,
          var(--turtle-ui--color--level--light-9)
        );
        --turtle-ui--color--level--10: var(
          --turtle-ui--color--level--dark-10,
          var(--turtle-ui--color--level--light-10)
        );
        --turtle-ui--color--level--safe: var(
          --turtle-ui--color--level--dark-safe,
          var(--turtle-ui--color--level--light-safe)
        );
        --turtle-ui--color--level--danger: var(
          --turtle-ui--color--level--dark-danger,
          var(--turtle-ui--color--level--light-danger)
        );
        --turtle-ui--color--level--primary: var(
          --turtle-ui--color--level--dark-primary,
          var(--turtle-ui--color--level--light-primary)
        );
        --turtle-ui--level--modifier--darker: var(
          --turtle-ui--level--modifier--dark-darker,
          var(--turtle-ui--level--modifier--light-darker)
        );
        --turtle-ui--level--modifier--lighter: var(
          --turtle-ui--level--modifier--dark-lighter,
          var(--turtle-ui--level--modifier--light-lighter)
        );
        --turtle-ui--level--modifier--amount: var(
          --turtle-ui--level--modifier--dark-amount,
          var(--turtle-ui--level--modifier--light-amount)
        );
      }

      :host {
        display: block;
        font-family: "Ubuntu", sans-serif;

        background-color: var(--turtle-ui--color--background);
        color: var(--turtle-ui--color--text);
      }
    `;
  }

  override render() {
    return html`<slot></slot>`;
  }
}
