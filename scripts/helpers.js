const logTemplates = {
  debug: "\x1b[90mDEBUG: %s\x1b[0m",
  success: "\x1b[32mOK:    %s\x1b[0m",
  warning: "\x1b[93mWARN:  %s\x1b[0m",
  error: "\x1b[31mERROR: %s\x1b[0m",
  info: "INFO:  %s",
};

/**
 * @param {string} msg
 * @param {keyof typeof logTemplates} level
 * @param {{ stdout: boolean }} $3
 */
export function log(msg, level = "info", { stdout = false } = {}) {
  const template = logTemplates[level] || "%s";

  if (stdout) {
    console.log(template, msg);
  } else {
    console.error(template, msg);
  }
}

/**
 * @template T, P
 * @param {readonly T[]} arr
 * @param {(rest: readonly T[]) => [P, readonly T[]]} cb
 * @returns {S[]}
 */
export function mapShift(arr, cb) {
  const ret = [];
  let rest = arr;

  while (rest.length > 0) {
    const [p, next] = cb(rest);

    ret.push(p);

    // Prevents infinite loop
    rest = next.length >= rest.length ? rest.slice(1) : next;
  }

  return ret;
}

export function isFlag(str) {
  return /^--?[^-]/.test(str);
}
