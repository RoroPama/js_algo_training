// Array.prototype.filter

function filter(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("Le paramètre callback doit être une fonction");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}
