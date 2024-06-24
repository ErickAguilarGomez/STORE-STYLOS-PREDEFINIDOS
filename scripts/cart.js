
import printLayout from "./funcionalidades/printLayout.js"
import options from "./funcionalidades/options.js"
import printLinks from "./funcionalidades/printLinks.js"
import  prinDetails from "./funcionalidades/printDetails.js"
import printFooter from "./funcionalidades/printFooter.js"
import ChangeImage from "./funcionalidades/ChangeImage.js"
import precioTotal from "./funcionalidades/prinTotal.js"
import addCart from "./funcionalidades/addCart.js"
import isOnline from "./funcionalidades/isOnline.js"
import  logoutUser from "./funcionalidades/isOnline.js"
import printProducts from "./funcionalidades/printProducts.js"
import printCards from "./funcionalidades/printCard.js  "
import totalPrice from "./funcionalidades/totalPrice.js"
import noRediccionamiento from "./funcionalidades/Noredireccionamiento.js"
import SubTotalAndTotal from "./funcionalidades/SubTotalAndTotal.js"
import compraFinalizada from "./funcionalidades/compraFinalizada.js"
import removerProducto from "./funcionalidades/removerProducto.js"




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


//hola compomenten