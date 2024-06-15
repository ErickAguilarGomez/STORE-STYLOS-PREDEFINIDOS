//DESPUES DE QUE LOS PRODUCTOS SEAN TRAIDOS AL CARRITO,SI EL USUARIO REALIZA VARIACIONES EN LAS CANTIDADES DE LOS PRODUCTO ,ESTA FUNCION MODIFICARA EL PRECIO,CASO CONTRARIO NO LO HARA
import totalPrice from "./totalPrice.js";

export default  function  SubTotalAndTotal(){
    const inputs = document.querySelectorAll(".quantity");
    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        const quantity = parseFloat(input.value);
        const price = parseFloat(
          document.querySelectorAll(".product-price")[index].textContent
        );
        const subtotalElement = document.querySelectorAll(".subtotal")[index];
        const newSubtotal = (quantity * price);
        subtotalElement.textContent = newSubtotal;
  
        const  precioPorProducto= [...document.querySelectorAll(".subtotal")]
          .map((item) => Number(item.textContent))
          .reduce((acc, precio) => acc + precio, 0);
          totalPrice(precioPorProducto)
  
      });
    });
  }