// Importing from built files is one of the worst DX and normally easy to solve by configuring
// build pipeline. However, most of bundlers do not support importing TypeScript file with ".js"
// extension so we need to do this. Will switch to a TSC compatible bundler.
import {
  registerTurtleUIComponents,
  allComponents,
} from "../../../es2019/index.js";

import { SiteHeader } from "./site-header";
import { SiteIconCatalogue } from "./site-icon-catalogue";
import { SiteLayout } from "./site-layout";
import { SiteSandbox } from "./site-sandbox";
import { SiteSection } from "./site-section";
import { SiteWcDoc } from "./site-wc-doc";

registerTurtleUIComponents([
  ...allComponents,
  SiteHeader,
  SiteIconCatalogue,
  SiteLayout,
  SiteSandbox,
  SiteSection,
  SiteWcDoc,
]);
