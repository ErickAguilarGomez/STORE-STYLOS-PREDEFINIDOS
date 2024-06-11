function printCards(arrayOfProducts, id) {
  let template = ``;
  const productsSelector = document.querySelector(`#${id}`);
  arrayOfProducts.forEach((item) => {
    template += ` <a class="product-card" href="./details.html?id=${item.id}">
            <img
              class="product-img"
              src="${item.images}"
              alt="${item.title}"
            />
            <div class="product-info">
              <span class="product-title">${item.title}</span>
              <span class="product-description">${item.colors}</span>
              <div class="product-price-block">
                  $<span class="product-price">${item.price}</span>
                <span class="product-discount">50% Off</span>
              </div>
              <div class="product-tax-policy">
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          
            <div class="checkout-process">
            <img src="https://img.icons8.com/?size=256&id=67884&format=png" class="tacho">
            <p>Sub Total</p>
            <p><span>$</span><span class="subtotal">${item.subtotal}</span></p>
            <div class="top">
              <input type="number" class="quantity" min="1" value="${item.quantity}" />
            </div>
          </div>
          </a>
    `;
    
  });

  let subtotalDiv = arrayOfProducts.map((item) => item.subtotal);
  let subtotalPrice = subtotalDiv.reduce((a, b) => a + b, 0);
  productsSelector.innerHTML = template;
  totalPrice(subtotalPrice);
  SubTotalAndTotal();
  noRediccionamiento(); // Prevenir comportamientos por defecto de elementos innecesarios
}
