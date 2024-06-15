


let products;

async function fetchProducts() {
  try {
    const response = await fetch("../../productos/productos.json");
    const data = await response.json();
    products = data.productos;
    runFunctions();
  } catch (error) {
    console.error("Error fetching productos:", error);
  }
}




export default function addCart(valorID, products) {
  // Añadimos valorID y products como parámetros
  const find = products.find((item) => item.id == valorID);

  const bigImage = document.querySelector("#big-img");
  const quantity = document.querySelector("input");
  let produc = {
    id: find.id,
    title: find.title,
    description: find.description,
    price: find.price,
    images: bigImage.src,
    colors: document.querySelector(".product-select").value,
    quantity: quantity.value,
    subtotal: find.price * quantity.value,
  };

  let cart = localStorage.getItem("cart");

  if (cart) {
    let cartArray = JSON.parse(cart);
    cartArray.push(produc);
    localStorage.setItem("cart", JSON.stringify(cartArray));
  } else {
    localStorage.setItem("cart", JSON.stringify([produc]));
  }
}

// No necesitas agregar el event listener aquí porque se está añadiendo en main.js
