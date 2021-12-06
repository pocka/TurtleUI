import type * as spec from "./spec.json";

import { css, LitElement, html, nothing, TemplateResult } from "lit";
import { property } from "lit/decorators/property.js";
import { state } from "lit/decorators/state.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { minireset } from "../../../es2019/minireset.js";

type ComponentDefinition = typeof spec.tags[number];
type PropertyDefinition = ComponentDefinition["properties"][number];
type AttributeDefinition = NonNullable<
  ComponentDefinition["attributes"]
>[number];
type EventDefinition = NonNullable<ComponentDefinition["events"]>[number];
type SlotDefinition = NonNullable<ComponentDefinition["slots"]>[number];
type CSSPropDefinition = NonNullable<
  ComponentDefinition["cssProperties"]
>[number];
type CSSPartsDefinition = NonNullable<ComponentDefinition["cssParts"]>[number];

export class SiteWcDoc extends LitElement {
  static defaultTagName = "site-wc-doc" as const;

  static override get styles() {
    return [
      minireset,
      css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: block;
          box-sizing: border-box;
        }

        .component-description {
          margin-top: calc(1.6 * var(--turtle-ui--unit));
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.5;
        }

        .usage-title {
          display: block;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          margin-top: 1em;

          font-weight: bold;
        }
        .usage {
          margin-top: 4px;
          margin-bottom: calc(2.4 * var(--turtle-ui--unit));
          padding: calc(0.8 * var(--turtle-ui--unit)) 16px;
          min-width: 0;
          max-width: 100%;
          overflow-x: auto;
          font-size: calc(1.4 * var(--turtle-ui--unit));

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-radius: 4px;
        }
        .usage .keyword {
          color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--3)
          );
        }
        .usage .function {
          color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--3)
          );
        }
        .usage .string {
          color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }

        table {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: stretch;
          margin-top: calc(1.6 * var(--turtle-ui--unit));
          min-width: 100%;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          font-size: calc(1.4 * var(--turtle-ui--unit));

          border-radius: 4px;
          overflow: hidden;
        }

        thead {
          display: block;
          font-size: calc(1.2 * var(--turtle-ui--unit));

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: bold;
        }
        tbody {
          display: block;
        }
        tr {
          display: flex;
          justify-content: start;
          align-items: stretch;
          flex-wrap: wrap;
        }
        tbody > tr {
          border-top: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--9)
            );
        }

        th {
          display: block;
          padding: 6px 8px;
          flex-shrink: 0;

          font-weight: normal;
          text-align: start;
        }
        td {
          display: block;
          padding: 8px;
          flex-shrink: 0;
        }

        .property-name,
        .attr-name,
        .event-name,
        .part-name {
          flex-basis: 50%;
          font-weight: bold;
        }
        .slot-name {
          flex-basis: 100%;
          font-weight: bold;
        }
        .data-type {
          flex-basis: 50%;
          font-size: calc(1.2 * var(--turtle-ui--unit));

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--2)
          );
        }
        .description {
          flex-basis: 100%;
          font-size: calc(1.2 * var(--turtle-ui--unit));

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--2)
          );
        }

        .description p:not(:first-child),
        .component-description p:not(:first-child) {
          margin-top: 0.75em;
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

    if (process.env.NODE_ENV === "development") {
      console.groupCollapsed(this.spec.name);
      console.dir(this.spec);
      console.groupEnd();
    }

    const className = kebabToPascal(this.spec.name);

    return html`
      ${this.spec.description
        ? html`<div class="component-description">
            ${unsafeHTML(this.spec.description)}
          </div>`
        : nothing}

      <span class="usage-title">Setup</span>
      <pre
        class="usage"
      ><code><span class="keyword">import</span> { registerTurtleUIComponents, ${className} } <span class="keyword">from</span> <span class="string">"@turtleui/webcomponents"</span>;

<span class="function">registerTurtleUIComponents</span>([${className}]);
</code></pre>

      ${this.spec.attributes && this.spec.attributes.length > 0
        ? attributesTable(this.spec.attributes)
        : nothing}
      ${this.spec.properties && this.spec.properties.length > 0
        ? propertiesTable(this.spec.properties)
        : nothing}
      ${this.spec.events?.length ? eventsTable(this.spec.events) : nothing}
      ${this.spec.slots && this.spec.slots.length > 0
        ? slotsTable(this.spec.slots)
        : nothing}
      ${this.spec.cssProperties?.length
        ? cssPropsTable(this.spec.cssProperties)
        : nothing}
      ${this.spec.cssParts?.length
        ? cssPartsTable(this.spec.cssParts)
        : nothing}
    `;
  }
}

function kebabToPascal(input: string): string {
  return input
    .split("-")
    .map((fragment) => fragment.slice(0, 1).toUpperCase() + fragment.slice(1))
    .join("");
}

if (process.env.NODE_ENV === "development") {
  function assert<T>(description: string, actual: T, expected: T) {
    console.assert(expected === actual, description, { expected, actual });
  }

  console.group("site-wc-doc > #kebabToPascal");
  assert(
    "Convert foo-bar-baz to FooBarBaz",
    kebabToPascal("foo-bar-baz"),
    "FooBarBaz"
  );
  assert(
    "Only convert kebab case",
    kebabToPascal("foo-bar_bazQux"),
    "FooBar_bazQux"
  );
  console.groupEnd();
}

function propertiesTable(props: readonly PropertyDefinition[]): TemplateResult {
  return html`
    <table>
      <thead>
        <tr>
          <th class="property-name">Property</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${props.map(
          (prop) => html`
            <tr>
              <td class="property-name"><code>${prop.name}</code></td>
              <td class="data-type"><code>${prop.type}</code></td>
              <td class="description">${renderDescription(prop)}</td>
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
}

function attributesTable(
  attrs: readonly AttributeDefinition[]
): TemplateResult {
  return html`
    <table>
      <thead>
        <tr>
          <th class="attr-name">Attribute</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${attrs.map(
          (attr) => html`
            <tr>
              <td class="attr-name"><code>${attr.name}</code></td>
              <td class="data-type"><code>${attr.type}</code></td>
              <td class="description">${renderDescription(attr)}</td>
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
}

function eventsTable(events: readonly EventDefinition[]): TemplateResult {
  return html`
    <table>
      <thead>
        <tr>
          <th class="event-name">Event</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${events.map(
          (event) => html`
            <tr>
              <td class="event-name"><code>${event.name}</code></td>
              <td class="description">
                ${"description" in event
                  ? unsafeHTML(event.description)
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
          <th class="slot-name">Slot</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${slots.map(
          (slot) => html`
            <tr>
              <td class="slot-name">
                <code>${renderSlot(slot.name)}</code>
              </td>
              <td class="description">${renderDescription(slot as any)}</td>
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
}

function renderSlot(slotName?: string): string {
  if (!slotName) {
    return "<slot></slot>";
  }

  return `<slot name="${slotName}"></slot>"`;
}

function cssPropsTable(props: readonly CSSPropDefinition[]): TemplateResult {
  return html`
    <table>
      <thead>
        <tr>
          <th class="property-name">CSS Custom Property</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${props.map(
          (prop) => html`
            <tr>
              <td class="property-name">${prop.name}</td>
              <td class="description">${renderDescription(prop)}</td>
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
}

function cssPartsTable(parts: readonly CSSPartsDefinition[]): TemplateResult {
  return html`
    <table>
      <thead>
        <tr>
          <th class="part-name">CSS Part</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${parts.map(
          (part) => html`
            <tr>
              <td class="part-name">${part.name}</td>
              <td class="description">${renderDescription(part)}</td>
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
}

function renderDescription(part: { description?: string; default?: string }) {
  if (!part.description && !part.default) {
    return nothing;
  }

  return html`
    ${part.description ? unsafeHTML(part.description) : nothing}
    ${part.default
      ? html`<p>Default value is <code>${part.default}</code>.</p>`
      : nothing}
  `;
}
