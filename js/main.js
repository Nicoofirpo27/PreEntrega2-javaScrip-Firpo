document.addEventListener('DOMContentLoaded', function () {
  const btnCart = document.querySelector('.container-cart-icon');
  const containerCartProducts = document.querySelector('.container-cart-products');
  const productsList = document.querySelector('.container-items');
  const valorTotal = document.querySelector('.total-pagar');
  const countProducts = document.querySelector('#contador-productos');

  let allProducts = [];

  btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
  });

  function showHTML() {
    if (!allProducts.length) {
      containerCartProducts.innerHTML = `<p class="cart-empty">El Carrito está vacío</p>`;
    }

    // Limpiar el HTML del carrito
    rowProdruct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach((product) => {
      const containerProduct = document.createElement('div');
      containerProduct.classList.add('cart-product');

      containerProduct.innerHTML = `
        <div class="info-cart-product">
          <span class="cantidad-producto-carrito">${product.quantity}</span>
          <p class="titulo-producto-carrito">${product.title}</p>
          <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon-close"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      `;

      rowProdruct.append(containerProduct);

      total += parseFloat(product.price.replace('$', '')) * product.quantity;
      totalOfProducts += product.quantity;
    });

    valorTotal.innerText = `$${total.toFixed(2)}`;
    countProducts.innerText = totalOfProducts;

    localStorage.setItem('cartProducts', JSON.stringify(allProducts));
    localStorage.setItem('cartTotal', JSON.stringify(total));
    localStorage.setItem('cartTotalProducts', JSON.stringify(totalOfProducts));
  }

  productsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add-cart')) {
      const product = e.target.parentElement;
      const infoProduct = {
        quantity: 1,
        title: product.querySelector('h2').textContent,
        price: product.querySelector('.price').textContent,
      };

      const exist = allProducts.some((product) => product.title === infoProduct.title);

      if (exist) {
        const products = allProducts.map((product) => {
          if (product.title === infoProduct.title) {
            product.quantity++;
          }
          return product;
        });
        allProducts = [...products];
      } else {
        allProducts = [...allProducts, infoProduct];
      }

      showHTML();
    }
  });

  const rowProdruct = document.querySelector('.row-product');
  rowProdruct.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-close')) {
      const product = e.target.parentElement;
      const title = product.querySelector('.titulo-producto-carrito').textContent;

      allProducts = allProducts.filter((product) => product.title !== title);
    }
    showHTML();
  });

  // Recuperar el carrito del almacenamiento local al cargar la página
  if (localStorage.getItem('cartProducts')) {
    allProducts = JSON.parse(localStorage.getItem('cartProducts'));
    showHTML();
  }
});
