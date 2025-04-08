/*
Let's implement our own version of Promise.all(), a promiseAll function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!
*/

/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
function promiseAll(iterable) {
  return Promise.all(iterable);
}
