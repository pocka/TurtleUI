import * as fs from "fs/promises";
import * as path from "path";
import { promisify } from "util";

import glob from "glob";

import * as cli from "./helpers.js";

/**
 * @typedef {{
 *   watch: string[],
 *   out: string,
 *   glob: string,
 *   verbose: boolean,
 * }} Options
 */

/**
 * @type {Options}
 */
const defaultOptions = {
  watch: [],
  out: "",
  glob: "",
  verbose: false,
};

const tsExtPattern = /\.tsx?$/;

/**
 * @param {Options} options
 */
async function generate(options) {
  const files = await promisify(glob)(options.glob, { absolute: true });

  cli.log(`Found ${files.length} files matching to ${options.glob}.`);

  const isTS = tsExtPattern.test(options.out);
  const baseDir = path.dirname(options.out);

  const relFiles = files.map((file) => path.relative(baseDir, file));

  if (options.verbose) {
    relFiles.forEach((file) => {
      cli.log(file, "debug");
    });
  }

  const contents =
    "export const index = {\n" +
    relFiles
      .map(
        (file) =>
          `  "${file}": () => import("${
            isTS ? file.replace(tsExtPattern, "") : file
          }"),`
      )
      .join("\n") +
    "\n};\n";

  if (options.verbose) {
    cli.log(`Writing to ${options.out}...`, "debug");
  }
  try {
    await fs.writeFile(options.out, contents);
    cli.log(`Wrote to ${options.out}`, "success");
  } catch (err) {
    cli.log(`Failed to write to ${options.out}`, "error");
    console.error(err);
  }
}

/**
 * @param {readonly string[]} argv
 * @returns {Options}
 */
function parseOptions(argv) {
  const params = argv.slice(2);

  return cli
    .mapShift(params, ([param, ...rest]) => {
      switch (param) {
        case "-w":
        case "--watch": {
          const [arg, ...next] = rest;

          if (!arg || cli.isFlag(arg)) {
            cli.log("`watch` option needs a watch target.", "error");
            process.exit(1);
          }

          return [["watch", arg], next];
        }
        case "-o":
        case "--out": {
          const [arg, ...next] = rest;

          if (!arg || cli.isFlag(arg)) {
            cli.log("`output` option needs a output filename.", "error");
            process.exit(1);
          }

          return [["out", arg], next];
        }
        case "-v":
        case "--verbose":
          return [["verbose", true], rest];
        default:
          return [["glob", param], rest];
      }
    })
    .reduce((opts, [key, value]) => {
      switch (key) {
        case "watch":
          return {
            ...opts,
            watch: [...opts.watch, value],
          };
        case "out": {
          if (opts.out) {
            cli.log(
              "`out` option was specified more than once. Overwriting.",
              "warning"
            );
          }

          const absPath = path.isAbsolute(value)
            ? value
            : path.resolve(process.cwd(), value);

          return {
            ...opts,
            out: absPath,
          };
        }
        case "glob":
          if (opts.glob) {
            cli.log(
              "`glob` option was specified more than once. Overwriting.",
              "warning"
            );
          }

          return {
            ...opts,
            glob: value,
          };
        default:
          return {
            ...opts,
            [key]: value,
          };
      }
    }, defaultOptions);
}

async function main() {
  const options = parseOptions(process.argv);

  if (options.verbose) {
    cli.log("Validating options...", "debug");
  }

  if (!options.glob) {
    cli.log("File pattern is required", "error");
    process.exit(1);
  }

  if (!options.out) {
    cli.log("Output filename is required", "error");
    process.exit(1);
  }

  if (options.verbose) {
    cli.log("Final options", "debug");
    console.error(options);
  }

  await generate(options);

  if (options.watch.length > 0) {
    if (options.verbose) {
      cli.log("Starting watch process...", "debug");
    }

    await Promise.race(
      options.watch.map(async (filename) => {
        const absPath = path.isAbsolute(filename)
          ? filename
          : path.resolve(process.cwd(), filename);
        const watcher = fs.watch(absPath);

        for await (const ev of watcher) {
          if (ev.eventType === "rename") {
            await generate(options);
          }
        }
      })
    );
  }
}

main();
