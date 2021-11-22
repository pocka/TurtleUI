import { css, LitElement, nothing } from "lit";
import { state } from "lit/decorators/state.js";
import { html, unsafeStatic } from "lit/static-html.js";
import { minireset } from "../../../es2019/minireset.js";
import { icons } from "../../../es2019/index.js";

export class SiteIconCatalogue extends LitElement {
  static defaultTagName = "site-icon-catalogue" as const;

  static override get styles() {
    return [
      minireset,
      css`
        .section {
          margin-top: calc(1.6 * var(--turtle-ui--unit));
        }

        .catalogue {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            calc(4 * var(--turtle-ui--unit))
          );
          place-items: center;
          gap: 8px;
        }

        button {
          appearance: none;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: calc(3.2 * var(--turtle-ui--unit));
          border: 1px solid transparent;
          outline: none;

          background-color: transparent;
          border-radius: 2px;
          color: inherit;
          cursor: pointer;
        }
        button:hover {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9),
            0.5
          );
        }
        button:focus {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            )
            inset;
        }
        button[data-selected] {
          color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }

        .title {
          display: block;
          font-size: calc(1.8 * var(--turtle-ui--unit));

          font-weight: bold;
        }

        .demo {
          overflow-x: hidden;
        }
      `,
    ];
  }

  @state()
  _selected: string | null = null;

  override render() {
    return html`
      <site-section class="section">
        <div class="catalogue">
          ${icons.map((icon) => {
            const tag = icon.defaultTagName;
            const selected = icon.defaultTagName === this._selected;
            const onClick = () => {
              this._selected = icon.defaultTagName;
            };

            if ("direction" in icon.prototype) {
              return html`
                <button ?data-selected=${selected} title=${`<${tag} direction="up">`} @click=${onClick}>
                  <${unsafeStatic(tag)} direction="up"></${unsafeStatic(tag)}>
                </button>
                <button ?data-selected=${selected} title=${`<${tag} direction="right">`} @click=${onClick}>
                  <${unsafeStatic(tag)} direction="right"></${unsafeStatic(
                tag
              )}>
                </button>
                <button ?data-selected=${selected} title=${`<${tag} direction="down">`} @click=${onClick}>
                  <${unsafeStatic(tag)} direction="down"></${unsafeStatic(tag)}>
                </button>
                <button ?data-selected=${selected} title=${`<${tag} direction="left">`} @click=${onClick}>
                  <${unsafeStatic(tag)} direction="left"></${unsafeStatic(tag)}>
                </button>
              `;
            }

            if ("outlined" in icon.prototype) {
              return html`
                <button ?data-selected=${selected} title=${`<${tag}>`} @click=${onClick}>
                  <${unsafeStatic(tag)}></${unsafeStatic(tag)}>
                </button>
                <button ?data-selected=${selected} title=${`<${tag} outlined>`} @click=${onClick}>
                  <${unsafeStatic(tag)} outlined></${unsafeStatic(tag)}>
                </button>
              `;
            }

            return html`
              <button ?data-selected=${selected} title=${`<${tag}>`} @click=${onClick}>
                <${unsafeStatic(tag)}></${unsafeStatic(tag)}>
              </button>
            `;
          })}
        </div>
        ${this._selected
          ? html`
              <div class="demo">
                <span class="title">${this._selected}</span>
                <site-wc-doc name=${this._selected}></site-wc-doc>
              </div>
            `
          : nothing}
      </site-section>
    `;
  }
}
