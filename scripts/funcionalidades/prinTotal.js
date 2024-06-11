//la funcion toma un string con el id,luego en un array nuevo trae todas las propiedades del producto que coincida con el id,despues al input por cada click obtiene su valor y lo multiplica por el precio del producto
function precioTotal(id) {
  const product = products.filter((item) => item.id == id);
  const subtotal = document.querySelector("#price");
  const input = document.querySelector("input");
  
  input.addEventListener("click", (event) => {
    const valor = event.target.value * product[0].price;
    subtotal.textContent ="$"+valor;
  });
}
