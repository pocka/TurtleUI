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
import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleDesignSystem.defaultTagName]: TurtleDesignSystem;
  }
}

/**
 * Design System wrapper
 *
 * This component provides CSS custom properties and set basic styles to itself.
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
        --turtle-ui--base-font-size: 1rem;

        --turtle-ui--color--level--0: 0%;
        --turtle-ui--color--level--1: 10%;
        --turtle-ui--color--level--2: 20%;
        --turtle-ui--color--level--3: 30%;
        --turtle-ui--color--level--4: 40%;
        --turtle-ui--color--level--5: 50%;
        --turtle-ui--color--level--6: 60%;
        --turtle-ui--color--level--7: 70%;
        --turtle-ui--color--level--8: 80%;
        --turtle-ui--color--level--9: 90%;
        --turtle-ui--color--level--10: 100%;
        --turtle-ui--color--level--safe: 34%;
        --turtle-ui--color--level--danger: 44%;
        --turtle-ui--color--level--primary: 40%;
        --turtle-ui--level--modifier--darker: -1;
        --turtle-ui--level--modifier--lighter: 1;
        --turtle-ui--level--modifier--amount: 16%;

        --turtle-ui--color--tone--mono: 0, 0%;
        --turtle-ui--color--tone--safe: 123, 46%;
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
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --turtle-ui--color--level--0: 100%;
          --turtle-ui--color--level--1: 92%;
          --turtle-ui--color--level--2: 84%;
          --turtle-ui--color--level--3: 76%;
          --turtle-ui--color--level--4: 68%;
          --turtle-ui--color--level--5: 60%;
          --turtle-ui--color--level--6: 52%;
          --turtle-ui--color--level--7: 44%;
          --turtle-ui--color--level--8: 36%;
          --turtle-ui--color--level--9: 28%;
          --turtle-ui--color--level--10: 20%;
          --turtle-ui--level--modifier--darker: 1;
          --turtle-ui--level--modifier--lighter: -1;
        }
      }

      :host([theme="light"]) {
        --turtle-ui--color--level--0: 0%;
        --turtle-ui--color--level--1: 10%;
        --turtle-ui--color--level--2: 20%;
        --turtle-ui--color--level--3: 30%;
        --turtle-ui--color--level--4: 40%;
        --turtle-ui--color--level--5: 50%;
        --turtle-ui--color--level--6: 60%;
        --turtle-ui--color--level--7: 70%;
        --turtle-ui--color--level--8: 80%;
        --turtle-ui--color--level--9: 90%;
        --turtle-ui--color--level--10: 100%;
        --turtle-ui--level--modifier--darker: -1;
        --turtle-ui--level--modifier--lighter: 1;
      }

      :host([theme="dark"]) {
        --turtle-ui--color--level--0: 100%;
        --turtle-ui--color--level--1: 92%;
        --turtle-ui--color--level--2: 84%;
        --turtle-ui--color--level--3: 76%;
        --turtle-ui--color--level--4: 68%;
        --turtle-ui--color--level--5: 60%;
        --turtle-ui--color--level--6: 52%;
        --turtle-ui--color--level--7: 44%;
        --turtle-ui--color--level--8: 36%;
        --turtle-ui--color--level--9: 28%;
        --turtle-ui--color--level--10: 20%;
        --turtle-ui--level--modifier--darker: 1;
        --turtle-ui--level--modifier--lighter: -1;
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
