/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const classes = [];

  function processArg(arg) {
    if (arg == null || arg === false || arg === "") {
      return;
    }

    if (Array.isArray(arg)) {
      arg.forEach(processArg);
      return;
    }

    if (typeof arg === "object") {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
      return;
    }

    if (typeof arg === "string" || (typeof arg === "number" && arg !== 0)) {
      classes.push(arg);
    }
  }

  args.forEach(processArg);

  return classes.join(" ");
}
