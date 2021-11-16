import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { minireset } from "minireset.css/minireset.css.lit.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleAvatar.defaultTagName]: TurtleAvatar;
  }
}

/**
 * @element turtle-avatar
 */
export class TurtleAvatar extends LitElement {
  static defaultTagName = "turtle-avatar" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --turtle-avatar--size: calc(4.8 * var(--turtle-ui--unit));

          display: inline-block;
          width: var(--turtle-avatar--size);
          height: var(--turtle-avatar--size);
          box-sizing: border-box;

          border-radius: 50%;
          overflow: hidden;
        }
        :host([bordered]) {
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }

        ::slotted(*),
        .placeholder {
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-sizing: border-box;
        }

        .placeholder-bg {
          fill: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }

        .placeholder-fg {
          fill: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }

        @media (prefers-color-scheme: dark) {
          .placeholder-fg {
            fill: hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--6)
            );
          }
        }
      `,
    ];
  }

  /**
   * Whether to display a border line.
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  bordered: boolean = false;

  /**
   * Label text for the fallback image.
   */
  @property({
    type: String,
    attribute: "default-alt",
  })
  defaultAlt?: string;

  override render() {
    // Although users can slot `<picture>` element, the current HTML spec prevents us from styling the element.
    // The shokingly-poorly designed and mental-model-breaking <picture> element, which always has <img>
    // element, can't be styled itself: users need to style the <img> inside. This unintuitive and bad design
    // causes a problem with `::slotted` pseudo element. The pseudo element only be able to select the top-most
    // slotted elements. Therefore, we can't do this: `::slotted(picture > img)` as the `img` is not the top-most
    // slotted element.
    return html`
      <slot>
        <svg
          class="placeholder"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label=${ifDefined(this.defaultAlt)}
        >
          <g clip-path="url(#a)">
            <path class="placeholder-bg" d="M0 0h32v32H0z" />
            <path
              class="placeholder-fg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 20c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6Zm0 23c6.0751 0 11-4.9249 11-11s-4.9249-11-11-11C9.92487 21 5 25.9249 5 32s4.92487 11 11 11Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h32v32H0z" />
            </clipPath>
          </defs>
        </svg>
      </slot>
    `;
  }
}
