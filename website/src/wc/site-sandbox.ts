import { css, LitElement, html } from "lit";
import { property } from "lit/decorators/property.js";
import { state } from "lit/decorators/state.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { minireset } from "../../../es2019/minireset.js";

export class SiteSandbox extends LitElement {
  static defaultTagName = "site-sandbox" as const;

  static override get styles() {
    return [
      minireset,
      css`
        :host {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: stretch;

          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--8)
            );
          border-radius: 8px;
        }

        .badge {
          align-self: flex-start;
          display: inline-block;
          padding: calc(0.2 * var(--turtle-ui--unit))
            calc(0.4 * var(--turtle-ui--unit));
          font-size: calc(1.2 * var(--turtle-ui--unit));

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-bottom-right-radius: 2px;
        }
        .badge:first-child {
          border-top-left-radius: inherit;
        }

        .preview {
          padding: 8px 16px;
          border-bottom: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--9)
            );
          overflow-x: auto;
        }

        .code {
          font-family: "Ubuntu Mono", monospace;
          margin: 0;
          padding: 8px 16px;
          border: none;
          resize: vertical;
          font-size: calc(1.4 * var(--turtle-ui--unit));

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--2)
          );
          border-bottom-left-radius: inherit;
          border-bottom-right-radius: inherit;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
        }

        @media (prefers-color-scheme: dark) {
          .code {
            background-color: hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--10)
            );
            color: hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--2)
            );
          }
        }
      `,
    ];
  }

  @property({
    type: String,
  })
  code: string = "";

  @state()
  initialLineCount: number = 1;

  override connectedCallback() {
    super.connectedCallback();

    if (!this.code) {
      this.code = dedent(this.innerHTML).trim();
      this.initialLineCount = this.code.split("\n").length;
    }
  }

  override render() {
    return html`
      <span class="badge">Demo</span>

      <div class="preview">${unsafeHTML(this.code)}</div>

      <label class="badge" for="shadow_editor">Live Editor</label>

      <textarea
        id="shadow_editor"
        class="code"
        rows=${this.initialLineCount}
        .value=${this.code}
        @input=${this.#syncCode}
      />
    `;
  }

  #syncCode = (ev: Event) => {
    this.code = (ev.currentTarget as HTMLTextAreaElement).value;
  };
}

function dedent(text: string): string {
  const lines = text.split("\n").filter((line) => !!line);
  if (!lines.length) {
    return text;
  }

  const indentLevel = lines[0]!.replace(/^(\s+)?([^\s].*)?$/, "$1").length;
  const remover = new RegExp(`^\\s{${indentLevel}}`);

  return lines.map((line) => line.replace(remover, "")).join("\n");
}

if (process.env.NODE_ENV === "development") {
  function assert<T>(description: string, actual: T, expected: T) {
    console.assert(expected === actual, description, { expected, actual });
  }

  console.group("site-sandbox > #dedent");
  assert("Should trim forward spaces", dedent("     <p></p> "), "<p></p> ");
  assert(
    "Should dedent based on the first line",
    dedent(`  <p>
    Foo
  </p>`),
    `<p>
  Foo
</p>`
  );
  console.groupEnd();
}
