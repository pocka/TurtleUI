import type * as spec from "./spec.json";

import { css, LitElement, html, nothing, TemplateResult } from "lit";
import { property } from "lit/decorators/property.js";
import { state } from "lit/decorators/state.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { minireset } from "../../../es2019/minireset.js";

type ComponentDefinition = typeof spec.tags[number];
type PropertyDefinition = ComponentDefinition["properties"][number];
type SlotDefinition = NonNullable<ComponentDefinition["slots"]>[number];

export class SiteWcDoc extends LitElement {
  static defaultTagName = "site-wc-doc" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: block;
        }

        table {
          margin-top: calc(1.6 * var(--turtle-ui--unit));
          width: 100%;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          border-radius: 4px;
          overflow-x: auto;
        }

        thead {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--3)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
        }

        td,
        th {
          padding: 4px 8px;
          text-align: start;
        }
      `,
    ];
  }

  @property({
    type: String,
  })
  name: string = "";

  @state()
  _spec: typeof spec | undefined = undefined;

  override async connectedCallback() {
    super.connectedCallback();

    this._spec = await import("./spec.json");
  }

  get spec(): ComponentDefinition | null {
    return this._spec?.tags.find((tag) => tag.name === this.name) || null;
  }

  override render() {
    if (!this.spec) {
      return html` <span>Component definition not found.</span> `;
    }

    return html`
      ${this.spec.description
        ? html`<div>${unsafeHTML(this.spec.description)}</div>`
        : nothing}
      ${this.spec.properties && this.spec.properties.length > 0
        ? propertiesTable(this.spec.properties)
        : nothing}
      ${this.spec.slots && this.spec.slots.length > 0
        ? slotsTable(this.spec.slots)
        : nothing}
    `;
  }
}

function propertiesTable(props: readonly PropertyDefinition[]): TemplateResult {
  return html`
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Data Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${props.map(
          (prop) => html`
            <tr>
              <td><code>${prop.name}</code></td>
              <td><code>${prop.type}</code></td>
              <td>
                ${"description" in prop
                  ? unsafeHTML(prop.description)
                  : nothing}
              </td>
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
}

function slotsTable(slots: readonly SlotDefinition[]): TemplateResult {
  return html`
    <table>
      <thead>
        <tr>
          <th>Slot name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${slots.map(
          (slot) => html`
            <tr>
              <td><code>${slot.name || "<default>"}</code></td>
              <td>${unsafeHTML(slot.description)}</td>
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
}
