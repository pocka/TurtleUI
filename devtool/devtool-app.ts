import { html, LitElement, TemplateResult } from "lit";
import { state } from "lit/decorators/state.js";

import { Suite as ISuite } from "./devtool";

interface BaseSuite {
  id: string;

  name: string;
}

interface LoadingSuite extends BaseSuite {
  state: "loading";
}

interface LoadedSuite<T> extends ISuite<T>, BaseSuite {
  state: "loaded";
}

interface LoadFailedSuite extends BaseSuite {
  state: "load_failed";

  reason: Error;
}

type Suite<T> = LoadingSuite | LoadedSuite<T> | LoadFailedSuite;

export class DevtoolApp extends LitElement {
  @state()
  _suites: Suite<any>[] = [];

  addSuite<T>(name: string, suite: ISuite<T> | Promise<ISuite<T>>): void {
    const id = this._suites.length.toString(16);
    const base: BaseSuite = { id, name };

    if (!(suite instanceof Promise)) {
      this._suites.push({
        state: "loaded",
        ...base,
        ...suite,
      });
      return;
    }

    this._suites.push({
      state: "loading",
      ...base,
    });

    suite
      .then((resolved) => {
        this._suites = this._suites.map((s) =>
          s.id !== id ? s : { state: "loaded", ...base, ...resolved }
        );
      })
      .catch((err) => {
        this._suites = this._suites.map((s) =>
          s.id !== id ? s : { state: "load_failed", ...base, reason: err }
        );
      });
  }

  override render() {
    return html`
      <ul>
        ${this._suites.map(
          (suite) => html`
            <li>
              <span>${suite.name}</span>
              ${renderSuite(suite)}
            </li>
          `
        )}
      </ul>
    `;
  }
}

function renderSuite<T>(suite: Suite<T>): TemplateResult {
  switch (suite.state) {
    case "loading":
      return html`<span>Loading...</span>`;
    case "load_failed":
      return html`
        <span>Failed to load</span>
        <pre><code>${suite.reason}</code></pre>
      `;
    case "loaded": {
      const props = cross<typeof suite.matrix[keyof typeof suite.matrix]>(
        Object.entries(suite.matrix ?? {})
      ).map(Object.fromEntries);

      return html`
        <ul>
          ${Object.entries<any[]>(suite.matrix ?? {}).map(
            ([key, values]) => html`
              <li>
                <span><code>${key}</code></span>
                <ul>
                  ${values.map(
                    (value) =>
                      html`<li><code>${JSON.stringify(value)}</code></li>`
                  )}
                </ul>
              </li>
            `
          )}
          <li>
            <span>Matrix</span>
            <ul>
              ${props.map((props) => html` <li>${JSON.stringify(props)}</li> `)}
            </ul>
          </li>
        </ul>
      `;
    }
  }
}
function cross<P, T extends [string, P[]] = [string, P[]]>(
  entries: T[]
): (readonly [string, P])[][] {
  if (!entries[0]) {
    return [];
  }

  const [key, values] = entries[0];
  const children = cross<P, T>(entries.slice(1));
  return values
    .map((value) => {
      return children.length > 0
        ? children.map((child) => [[key, value] as const, ...child])
        : [[[key, value] as const]];
    })
    .flat();
}
