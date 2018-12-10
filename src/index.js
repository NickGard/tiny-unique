Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = (function() {
  function isReferentiallyEqual(a, b) {
    return a === b;
  }

  function toArray(array) {
    return Array.isArray(array) ? array : [];
  }

  function deduplicate(comparator, uniques, value) {
    if (
      !uniques.some(
        (typeof comparator == "function"
          ? comparator
          : isReferentiallyEqual).bind(null, value)
      )
    ) {
      uniques.push(value);
    }
    return uniques;
  }

  return function unique(array, comparator) {
    return toArray(array).reduce(deduplicate.bind(null, comparator), []);
  };
})();
