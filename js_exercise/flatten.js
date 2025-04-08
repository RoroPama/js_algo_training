/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value) {
  // Add a return to the next line
  // to pass the tests!
  const newValue = value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );

  return newValue;
}
