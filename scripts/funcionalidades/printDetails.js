/* IMPRIME LA HOJA DE DETALLE DEL PRODUCTO SELECCIONADO */
function prinDetails(id) {
  const product = products.find((item) => item.id == id);
  const details = document.querySelector("#details");
  const price=document.querySelector("#price")
  price.textContent="$"+product.price

  let template = `<section class="product-images-block">
    <div class="product-images"> `;

  product.images.forEach((item) => {
    template += `<img
        class="mini-img"
        src="${item} "
        alt="${product.title} "
      />`;
  });
  template += `  </div>
    <img
      class="big-img"
      id="big-img"
      src="${product.images[0]}"
      alt="${product.title} "
    />
    </section>
  <div class="product-description-block">
    <h1 class="product-title">${product.title}</h1>
    <form class="product-selector">
      <fieldset class="product-fieldset">
        <label class="product-label" for="color">Color</label>
        <select
          class="product-select"
          type="text"
          placeholder="Selecciona un color"
          id="color"
        >`;

  product.colors.forEach((item) => {
    template += `<option value="${item}">${item}</option>`;
  });

  template += `</select>
      </fieldset>
    </form>
    <div class="product-description">
      <span class="product-label">Descripción</span>
      <p>
        Experience the power of creativity with the MacBook Pro 13'4.
        Featuring 8GB of RAM and 512GB of storage, this laptop provides
        the performance and storage capacity needed for demanding tasks.
        The sleek design in silver and space gray adds a touch of
        sophistication. The high-resolution Retina display brings your
        visuals to life, whether you're editing photos, creating videos,
        or simply browsing the web. With the latest technology and a
        lightweight build, the MacBook Pro 13'4 is the perfect companion
        for professionals and creative individuals alike.
      </p>`;

  details.innerHTML = template;
}


