/*
 The term "deep clone" is not formally defined in JavaScript's language specification, but is generally well understood in the community. A deep clone makes a copy of JavaScript value, leading to a completely new value that has no references pointing back to the properties in the original object (if it's an object). Any changes made to the deep-copied object will not affect the original object.

Implement a deepClone function that performs a deep clone operation on JavaScript objects. You can assume the input only contains JSON-serializable values (null, boolean, number, string, Array, Object) and will not contain any other objects like Date, Regex, Map or Set.

*/

/**
 * @template T
 * @param {T} value
 * @return {T}
 */
function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  const clonedObj = {};

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clonedObj[key] = deepClone(value[key]);
    }
  }

  return clonedObj;
}
