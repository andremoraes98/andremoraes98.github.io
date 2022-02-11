const containerProducts = document.querySelector('.items');
const containerCartItems = document.querySelector('.cart__items');
const cartList = document.querySelector('.cart__items');
const htmlPrice = document.querySelector('.total-price');
const buttonClear = document.querySelector('.empty-cart');
const buttonSearch = document.querySelector('#search-button');
let totalPrice = 0;

const savePriceInLocalStorage = () => {
  localStorage.setItem('price', htmlPrice.innerHTML);
};

buttonClear.addEventListener('click', clearTheCartList = () => {
  cartList.innerHTML = '';
  htmlPrice.innerHTML = 0;
  totalPrice = 0;
  saveCartItems('cartItems', containerCartItems.innerHTML);
  savePriceInLocalStorage();
});

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

const addRemovePriceOfProduct = (priceOfProduct, type) => {
  if (containerCartItems.innerHTML === '') {
    htmlPrice.innerHTML = 0;
    totalPrice = 0;
  } else {
    if (type === '+') {
      totalPrice += priceOfProduct;
    } else if (type === '-') {
      totalPrice -= priceOfProduct;
    }
    htmlPrice.innerHTML = totalPrice;
  }
};

function cartItemClickListener(e) {
  // coloque seu código aqui
  addRemovePriceOfProduct(parseFloat(e.target.parentElement.id, 10), '-');
  e.target.parentElement.remove();
}

function createCartItemElement({ name, salePrice, image }) {
  const li = document.createElement('li');
  const liImg = document.createElement('img');
  const liDiv = document.createElement('div');
  liImg.src = image;
  liImg.className = 'image__item';
  li.className = 'cart__item';
  liDiv.innerText = `${name}
  Preço: $${salePrice}`;
  li.id = salePrice;
  li.appendChild(liImg);
  li.appendChild(liDiv);
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const getSkuNameImagePriceFromProducts = (productData) => {
  const sku = productData.id;
  const name = productData.title;
  const image = productData.thumbnail;
  const salePrice = productData.price;
  return {
    sku,
    name,
    image,
    salePrice,
  }; 
};

const getPriceInLocalStorage = () => localStorage.getItem('price');

containerProducts.addEventListener('click', putProductOnCart = async (e) => {
  if (e.target.className === 'item__add') {
    const idOfProduct = e.target.parentElement.firstChild.innerHTML;
    const dataCartItem = await fetchItem(idOfProduct);
    const refineCartItem = getSkuNameImagePriceFromProducts(dataCartItem);
    containerCartItems.appendChild(createCartItemElement(refineCartItem));
    addRemovePriceOfProduct(refineCartItem.salePrice, '+');
    saveCartItems('cartItems', containerCartItems.innerHTML);
    savePriceInLocalStorage();
  }
});

const addAStateOfCharging = () => {
  const sectionCharge = document.createElement('section');
  sectionCharge.className = 'loading';
  sectionCharge.innerHTML = 'Carregando...';
  containerProducts.appendChild(sectionCharge);
};

const removeItemsAfterReloadPage = (itemsOfList) => {
  itemsOfList.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
    addRemovePriceOfProduct(item.id, '-');
  });
};

const searchProducts = async () => {
  let searchProduct = 'teclado';
  const valueSearch = document.querySelector('#search-input').value;
  if (valueSearch !== '') {
    searchProduct = valueSearch;
  }
  const dataProducts = await (fetchProducts(searchProduct));
  const products = dataProducts.results;
  if (products) {
    containerProducts.innerHTML = '';
    const refineProducts = products.map((product) => getSkuNameImagePriceFromProducts(product));
    refineProducts.forEach((product) => containerProducts
      .appendChild(createProductItemElement(product)));
  }
};

buttonSearch.addEventListener('click', searchProducts);

window.onload = async () => {
  addAStateOfCharging();
  searchProducts();
  containerCartItems.innerHTML = getSavedCartItems('cartItems');
  const cartItemsList = document.querySelectorAll('li');
  removeItemsAfterReloadPage(cartItemsList);
  htmlPrice.innerHTML = getPriceInLocalStorage();
};
