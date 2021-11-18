// Importing from built files is one of the worst DX and normally easy to solve by configuring
// build pipeline. However, most of bundlers do not support importing TypeScript file with ".js"
// extension so we need to do this. Will switch to a TSC compatible bundler.
import {
  registerTurtleUIComponents,
  allComponents,
} from "../../../es2019/index.js";

import { SiteHeader } from "./site-header";
import { SiteLayout } from "./site-layout";

registerTurtleUIComponents([...allComponents, SiteHeader, SiteLayout]);
