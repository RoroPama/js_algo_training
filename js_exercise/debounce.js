/*
Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.
*/
/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timeOutId;

  return function (...args) {
    clearTimeout(timeOutId);

    timeOutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
