//AQUI SE IMPRIMEN EL PRECIO TOTAL DE LOS PRODUCTOS UNA VEZ AÑADIDOS AL CARRITO
export default function totalPrice(precio){
    let template2=` <div id="contenedor-total">
    <h1>Total a Pagar</h1>
      <p>El total a pagar es $${precio} </p>
      <button id="btn-pagar">Pagar</button>`
    const totalDiv=document.querySelector("#total")
    totalDiv.innerHTML=template2
   

  }