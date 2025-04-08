/**
 * Formate une liste de chaînes de caractères en une chaîne lisible
 * @param {string[]} elements
 * @param {Object} [options]
 * @param {boolean} [options.sorted]
 * @param {number} [options.length]
 * @param {boolean} [options.unique]
 * @return {string}
 */
function formaterListe(elements = [], options = {}) {
  if (!elements || elements.length === 0) {
    return "";
  }

  let elementsTraites = [...elements];

  elementsTraites = elementsTraites.filter((el) => el.trim() !== "");

  if (options.unique === true) {
    const ensembleUnique = new Set();
    elementsTraites = elementsTraites.filter((el) => {
      if (!ensembleUnique.has(el)) {
        ensembleUnique.add(el);
        return true;
      }
      return false;
    });
  }

  if (options.sorted === true) {
    elementsTraites.sort();
  }

  if (elementsTraites.length === 0) {
    return "";
  }

  if (elementsTraites.length === 1) {
    return elementsTraites[0];
  }

  let elementsAffiches = elementsTraites;
  let nbRestants = 0;

  const optionLongueur = parseInt(options.length, 10);
  if (
    !isNaN(optionLongueur) &&
    optionLongueur > 0 &&
    optionLongueur < elementsTraites.length
  ) {
    elementsAffiches = elementsTraites.slice(0, optionLongueur);
    nbRestants = elementsTraites.length - optionLongueur;
  }

  if (elementsAffiches.length === 2 && nbRestants === 0) {
    return `${elementsAffiches[0]} and ${elementsAffiches[1]}`;
  }

  if (nbRestants > 0) {
    return `${elementsAffiches.join(", ")} and ${nbRestants} ${
      nbRestants === 1 ? "other" : "others"
    }`;
  } else {
    const dernierElement = elementsAffiches[elementsAffiches.length - 1];
    const autresElements = elementsAffiches.slice(0, -1);
    return `${autresElements.join(", ")} and ${dernierElement}`;
  }
}

export default formaterListe;
