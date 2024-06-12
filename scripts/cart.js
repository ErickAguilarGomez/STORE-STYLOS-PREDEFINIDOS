printLayout() //IMPRIME EL NAVBAR
printLinks() //IMPRIME EL REDES SOCIALES 
printFooter()//IMPRIME EL EL PIE DE PAGINA}
let cartproducts = JSON.parse(localStorage.getItem("cart")) 
printCards(cartproducts,"productscart")
compraFinalizada()  //lIMPIA EL LOCALSTORAGE ,Lanza un alert y actualiza la pagina
removerProducto()
isOnline(false)
const getStateValue=JSON.parse(localStorage.getItem("usuario"))||[]
isOnline(getStateValue.state,getStateValue.nombre)


