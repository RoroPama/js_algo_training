/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options) {
  if (!items || items.length === 0) {
    return "";
  }

  let processedItems = items.filter((item) => item !== "");

  if (processedItems.length === 0) {
    return "";
  }

  if (options && options.unique) {
    processedItems = [...new Set(processedItems)];
  }

  if (options && options.sorted) {
    processedItems.sort();
  }

  if (
    options &&
    typeof options.length === "number" &&
    options.length > 0 &&
    processedItems.length > options.length
  ) {
    const visibleItems = processedItems.slice(0, options.length);
    const remainingCount = processedItems.length - options.length;

    let visibleItemsFormatted;
    if (visibleItems.length === 1) {
      visibleItemsFormatted = visibleItems[0];
    } else if (visibleItems.length === 2) {
      visibleItemsFormatted = `${visibleItems[0]} and ${visibleItems[1]}`;
    } else {
      visibleItemsFormatted =
        visibleItems.slice(0, -1).join(", ") +
        ` and ${visibleItems[visibleItems.length - 1]}`;
    }

    return `${visibleItemsFormatted} and ${remainingCount} ${
      remainingCount === 1 ? "other" : "others"
    }`;
  }

  if (processedItems.length === 1) {
    return processedItems[0];
  } else if (processedItems.length === 2) {
    return `${processedItems[0]} and ${processedItems[1]}`;
  } else {
    return `${processedItems.slice(0, -1).join(", ")} and ${
      processedItems[processedItems.length - 1]
    }`;
  }
}
