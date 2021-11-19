import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";
import { minireset } from "../../../es2019/minireset.js";

export class SiteLayout extends LitElement {
  static defaultTagName = "site-layout" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --header-height: calc(5.6 * var(--turtle-ui--unit));
          --gap: 0px;

          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: min-content 1fr;
          grid-template-areas:
            "header"
            "body";
          gap: var(--gap);
          width: 100%;
          min-height: 100%;
        }

        .header::slotted(*) {
          grid-area: header;
          position: sticky;
          top: 0;
        }

        .body::slotted(*) {
          grid-area: body;
        }

        .sidebar::slotted(*) {
          --x-offset: 0;
          position: fixed;
          top: 0;
          bottom: 0;
          left: -100%;
          width: 100%;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          overflow-y: auto;

          transform: translateX(var(--x-offset));
          transition: transform 0.1s ease-out;
        }
        :host([menu-opened]) .sidebar::slotted(*) {
          --x-offset: 100%;

          transition: transform 0.2s ease;
        }

        .menu-toggle {
          position: fixed;
          left: calc(-0.6 * var(--turtle-ui--unit));
          bottom: 8px;
        }

        .angle {
          vertical-align: middle;
        }

        @media (min-width: 1000px) {
          :host {
            --gap: 8px;
            --x-offset: 0;
            --sidebar-width: calc(24 * var(--turtle-ui--unit));

            width: 100%;
            grid-template-columns: var(--sidebar-width) 1fr;
            grid-template-rows: var(--header-height) minmax(0, min-content) 1fr;
            grid-template-areas:
              "header header"
              "sidebar body"
              "blank body";
          }

          .sidebar::slotted(*) {
            position: fixed;
            top: calc(var(--header-height) + var(--gap));
            bottom: auto;
            height: calc(100% - var(--header-height) - var(--gap) * 2);
            left: var(--gap);
            width: var(--sidebar-width);

            border-radius: 4px;

            transform: none;
          }

          .menu-toggle {
            display: none;
          }
        }
      `,
    ];
  }

  @property({
    type: Boolean,
    attribute: "menu-opened",
    reflect: true,
  })
  menuOpened: boolean = false;

  override connectedCallback() {
    super.connectedCallback();

    window.addEventListener("hashchange", this.#closeMenu);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener("hashchange", this.#closeMenu);
  }

  override render() {
    return html`
      <slot class="header" name="header"></slot>
      <slot class="body"></slot>
      <slot class="sidebar" name="sidebar"></slot>

      <turtle-button
        class="menu-toggle"
        variant="primary"
        aria-label=${this.menuOpened ? "Close menu" : "Open menu"}
        @click=${this.#toggleMenuOpened}
      >
        <turtle-angle-icon
          class="angle"
          direction=${this.menuOpened ? "left" : "right"}
        ></turtle-angle-icon>
      </turtle-button>
    `;
  }

  #toggleMenuOpened = () => {
    this.menuOpened = !this.menuOpened;
  };

  #closeMenu = () => {
    this.menuOpened = false;
  };
}
