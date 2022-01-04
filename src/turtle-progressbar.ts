import { css, LitElement, html } from "lit";
import { state } from "lit/decorators/state.js";
import { styleMap } from "lit/directives/style-map.js";
import { minireset } from "./minireset.js";

import { wormhole } from "./directives/wormhole.js";

declare global {
  interface HTMLElementTagNameMap {
    [TurtleProgressbar.defaultTagName]: TurtleProgressbar;
  }
}

/**
 * Progress bar element.
 *
 * Strictly speaking, this element only provides a custom visual appearance for the slotted `<progress>` element.
 * You MUST put non-indeterminate `<progress>` element to the default slot.
 *
 * **IMPORTANT:** This element **DOES NOT** support indeterminate state. Always set `value` to the `<progress>`.
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
 *
 * You should follow the best practice of the usage for `<progress>`, especially for a11y ones.
 *
 * - Refer to the slotted `<progress>` element at the loading section, via `aria-describedby`.
 * - Set `aria-busy="true"` on the loading the loading section.
 * - Use `aria-label` / `aria-labelledby` attribute or label with `<label>` element with `for` attribute.
 *
 * **NOTE:** In the future, this element may adapt to the Element Internals API and remove the slotted usage.
 *
 * @element turtle-progressbar
 *
 * @slot - `<progress>` element.
 *
 * @csspart inner-bar - The inner bar indicates completed section.
 *
 * @cssprop [--turtle-progressbar--inner-bar--color=hsl(var(--turtle-ui--color--tone--primary), var(--turtle-ui--color--level--4))] The color of the inner bar.
 * @cssprop [--turtle-progressbar--height=8px] Height of the progress bar.
 */
export class TurtleProgressbar extends LitElement {
  static defaultTagName = "turtle-progressbar" as const;

  // This element visually hides the slotted <progress> element and render <div> mimicking progressbar.
  // That <div> has `aria-hidden="true"`, so:
  // - Screen reader announce the visually hidden <progress> element
  // - User sees the <div>
  // With this approach, this element both satisfies ok-level accessibility and gets rid of the hell of vendor prefixes.
  static override get styles() {
    return [
      minireset,
      css`
        :host {
          --_height: var(--turtle-progressbar--height, 8px);
          --_inner-bar--color: var(
            --turtle-progressbar--inner-bar--color,
            hsl(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4)
            )
          );

          display: block;
          position: relative;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          height: var(--_height);
          padding: 2px;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: var(--_height);
        }

        .inner-bar {
          height: 100%;

          background-color: var(--_inner-bar--color);
          border-radius: var(--_height);

          transition: width 0.22s ease;
        }

        ::slotted(progress) {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;

          visibility: hidden;
          pointer-events: none;
          user-select: none;
        }
      `,
    ];
  }

  @state()
  _progress: { max: number; value: number } = {
    max: 1,
    value: 0,
  };

  #sync = (el: HTMLProgressElement): void => {
    this._progress = {
      max: el.max,
      value: el.value,
    };
  };

  #progressObserver = new MutationObserver((mutations) => {
    if (!mutations[0]) {
      return;
    }

    this.#sync(mutations[0].target as HTMLProgressElement);
  });

  override render() {
    const { max, value } = this._progress;
    const width = Math.min(1, Math.max(0, max < 0 ? 0 : value / max));

    return html`
      <slot
        >${wormhole((el: Element | HTMLProgressElement) => {
          // Only process <progress> element
          if (!(el instanceof HTMLProgressElement)) {
            return;
          }

          this.#sync(el);

          this.#progressObserver.observe(el, {
            attributes: true,
            attributeFilter: ["value", "max"],
          });

          return () => {
            this.#progressObserver.disconnect();
          };
        })}</slot
      >

      <div
        part="inner-bar"
        class="inner-bar"
        aria-hidden="true"
        style=${styleMap({
          width: width * 100 + "%",
        })}
      ></div>
    `;
  }
}
