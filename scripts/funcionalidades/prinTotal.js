//la funcion toma un string con el id,luego en un array nuevo trae todas las propiedades del producto que coincida con el id,despues al input por cada click obtiene su valor y lo multiplica por el precio del producto

let products;

async function fetchProducts() {
  try {
    const response = await fetch("../../productos/productos.json");
    const data = await response.json();
    products = data.productos;
  } catch (error) {
    console.error("Error fetching productos:", error);
  }
}

fetchProducts();

export default async function precioTotal(id) {
  if (!products) {
    console.log("Esperando a que los productos se carguen...");
    await fetchProducts();
  }

  if (!products) {
    console.error("Productos no se pudieron cargar.");
    return;
  }

  const product = products.find((item) => item.id == id);


  const subtotal = document.querySelector("#price");
  const input = document.querySelector("input");

  if (!input) {
    console.error("Elemento input no encontrado.");
    return;
  }

  input.addEventListener("input", (event) => { // Cambié el evento a "input" para detectar cambios en el valor
    const valor = event.target.value * product.price;
    subtotal.textContent = "$" + valor;
  });
}
