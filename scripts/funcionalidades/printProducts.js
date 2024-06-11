/*INPRIME LOS PRODUCTOS,RECIBE 2 PARAMETROS ,EL ARRAY Y EL ID DE LA SECCION DONDE SE INSERTARA EL HTML */
function printProducts(arrayOfProducts, id) {
  let template = ``;
  const productsSelector = document.querySelector(`#${id}`);
  arrayOfProducts.forEach((item) => {
    template += ` <a class="product-card" href="./details.html?id=${item.id} ">
        <img
          class="product-img"
          src="${item.images} "
          alt="${item.title}"
        />
        <div class="product-info">
          <span class="product-title">${item.title}</span>
          <span class="product-description">${item.colors[0]}</span>
          <div class="product-price-block">
            <span class="product-price">$${item.price}</span>
            <span class="product-discount">50% Off</span>
          </div>
          <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </a>
`;
  });
  productsSelector.innerHTML = template;
}
