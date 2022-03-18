const saveCartItems = (keyOfStorage, cartItemsList) => {
  // seu código aqui
  localStorage.setItem(keyOfStorage, cartItemsList);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
