const getSavedCartItems = (keyOfStorage) => localStorage.getItem(keyOfStorage);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
