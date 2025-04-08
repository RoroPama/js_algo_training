//getElementsByClassName

/**
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */
function getElementsByClassName(element, classNames) {
  const classesToMatch = classNames.trim().split(/\s+/);

  const results = [];

  function hasAllClasses(el) {
    return classesToMatch.every((className) =>
      el.classList.contains(className)
    );
  }

  function traverse(currentElement) {
    for (let i = 0; i < currentElement.children.length; i++) {
      const child = currentElement.children[i];

      if (hasAllClasses(child)) {
        results.push(child);
      }

      traverse(child);
    }
  }

  traverse(element);

  return results;
}
