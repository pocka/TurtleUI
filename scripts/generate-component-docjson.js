import * as fs from "fs/promises";
import { promisify } from "util";

import glob from "glob";
import { marked } from "marked";
import Prism from "prismjs";
import ts from "typescript";
import {
  analyzeSourceFile,
  transformAnalyzerResult,
} from "web-component-analyzer";

marked.setOptions({
  highlight(code, lang, callback) {
    return Prism.highlight(code, Prism.languages[lang]);
  },
});

async function main() {
  // Yarn PnP does not support JSON import
  const tsconfig = JSON.parse(
    await fs.readFile(new URL("../tsconfig.json", import.meta.url), {
      encoding: "utf-8",
    })
  );

  // https://github.com/runem/web-component-analyzer/issues/204#issuecomment-883700004
  const topLevelFiles = (
    await promisify(glob)("./src/**/turtle-*.ts", { absolute: true })
  ).filter((path) => !/\.stories\./.test(path));

  const program = ts.createProgram(topLevelFiles, {
    ...tsconfig.compilerOptions,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
  });

  const sourceFiles = program
    .getSourceFiles()
    .filter((source) => /\/turtle-[^\/]+\.ts|\/mixins\//.test(source.fileName));

  const results = sourceFiles.map((source) =>
    analyzeSourceFile(source, {
      program,
      verbose: true,
      ts,
      config: {
        analyzeDependencies: false,
        analyzeDefaultLib: false,
        analyzeAllDeclarations: true,
        analyzeGlobalFeatures: true,
      },
    })
  );

  const output = JSON.parse(transformAnalyzerResult("json", results, program));

  console.log(
    JSON.stringify({
      ...output,
      tags: output.tags
        .filter((def) => {
          return def.name !== "defaultTagName";
        })
        .map((def) => {
          return {
            ...def,
            description: def.description && marked.parse(def.description),
            properties:
              def.properties &&
              def.properties
                .filter((prop) => {
                  return prop.name !== "defaultTagName";
                })
                .map((prop) => ({
                  ...prop,
                  description:
                    prop.description && marked.parse(prop.description),
                })),
            attributes:
              def.attributes &&
              def.attributes.map((attr) => ({
                ...attr,
                description: attr.description && marked.parse(attr.description),
              })),
            slots:
              def.slots &&
              def.slots.map((slot) => ({
                ...slot,
                description: slot.description && marked.parse(slot.description),
              })),
            events:
              def.events &&
              def.events.map((event) => ({
                ...event,
                description:
                  event.description && marked.parse(event.description),
              })),
            cssProperties:
              def.cssProperties &&
              def.cssProperties.map((prop) => ({
                ...prop,
                description: prop.description && marked.parse(prop.description),
              })),
            cssParts:
              def.cssParts &&
              def.cssParts.map((part) => ({
                ...part,
                description: part.description && marked.parse(part.description),
              })),
          };
        }),
    })
  );
}

main();
