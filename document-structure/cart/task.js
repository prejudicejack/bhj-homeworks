const products = Array.from(document.querySelectorAll('.product'));
const shoppingCartItems = document.querySelector('.cart__products');
const shoppingCart = document.querySelector('.cart');

shoppingCart.style = 'display: none';

for(let product of products) {
  product.addEventListener('click', (event) => {
    const target = event.target;
    if(event.target.classList.contains('product__add')) {
      addProduct(target)
    }

    if(event.target.classList.contains('product__quantity-control_inc')) {
      increaseProductItems(target)
    }

    if(event.target.classList.contains('product__quantity-control_dec')) {
      decreaseProductItems(target)
    }
  })
}

function addProduct(target) {
  const productId = target.closest('.product').dataset.id;

  if(shoppingCartItems.children.length === 0) {
    shoppingCart.style = 'display: block';
    addProductInCart(target, productId);
  } else {
    checkCartItems(target)
  }
}

function increaseProductItems(target) {
  let increaseProduct = target.closest('.product__quantity').querySelector('.product__quantity-value');
  ++increaseProduct.textContent;
}

function decreaseProductItems(target) {
  let increaseProduct = target.closest('.product__quantity').querySelector('.product__quantity-value');
  --increaseProduct.textContent;
  
  if(increaseProduct.textContent <= 0) {
    increaseProduct.textContent = 1;
  }
}

function checkCartItems(target) {
  const productId = target.closest('.product').dataset.id;
  const sameProductId = [...shoppingCartItems.children].find((productInCart) => productInCart.dataset.id === productId);

  if(sameProductId) {
    const modifiedCount = target.closest('.product__quantity').querySelector('.product__quantity-value').textContent;
    let changedCount = sameProductId.querySelector('.cart__product-count');
    changedCount.textContent = +changedCount.textContent + +modifiedCount;
  } else {
    addProductInCart(target, productId)
  }
}

function addProductInCart(target, productId) {
  const imgSrc = target.closest('.product').querySelector('img').src;
  let productCount = +target.closest('.product__quantity').querySelector('.product__quantity-value').textContent;

  shoppingCartItems.innerHTML += `
        <div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${imgSrc}">
        <div class="cart__product-count">${productCount}</div>`
}