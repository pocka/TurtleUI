import { index as entries } from "./imports";
import { DevtoolApp } from "./devtool-app";

import { allComponents, registerTurtleUIComponents } from "../src";

if (!customElements.get("devtool-app")) {
  customElements.define("devtool-app", DevtoolApp);
}

const app = document.getElementById("app") as DevtoolApp;

registerTurtleUIComponents(allComponents);

Object.entries(entries).map(([filename, entry]) => {
  app.addSuite(
    filename,
    entry().then((mod) => {
      if ("default" in mod) {
        return mod.default;
      }

      return Promise.reject(new Error("No default export found."));
    })
  );
});
