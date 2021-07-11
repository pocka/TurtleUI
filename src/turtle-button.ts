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
import { minireset } from "minireset.css/minireset.css.lit.js";

export const TAG_NAME = "turtle-button";

/**
 * A basic button element.
 */
export class TurtleButton extends LitElement {
  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --base-font-size: var(--turtle-ui--base-font-size, 1rem);

          font-size: var(--base-font-size);
        }

        .button {
          appearance: none;
          font-size: 1em;
          line-height: 1.5;
          border: 1px solid var(--turtle-ui--color--border);
          padding: calc(var(--base-font-size) / 2)
            calc(var(--base-font-size) * 0.75);

          background-color: var(--turtle-ui--color--background);
          border-radius: 8px;
          color: var(--turtle-ui--color--text);
          cursor: pointer;
          font-weight: bold;
          text-align: center;
        }
        .button:hover {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        .button:active {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }
        .button:focus {
          box-shadow: 0 0 0 4px var(--turtle-ui--color--highlight--shadow) inset;
          border-color: var(--turtle-ui--color--highlight);
          outline: none;
        }
      `,
    ];
  }

  override render() {
    return html` <button class="button"><slot></slot></button> `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, TurtleButton);
}
