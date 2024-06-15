import printLayout from "./funcionalidades/printLayout.js";
import printLinks from "./funcionalidades/printLinks.js";
import printFooter from "./funcionalidades/printFooter.js";
import printProducts from "./funcionalidades/printProducts.js";
import printFilter from "./funcionalidades/printProductosFiltrados.js";
import isOnline from "./funcionalidades/isOnline.js";

fetch("../../productos/productos.json")
  .then((response) => response.json())
  .then((resolve) => {
    printProducts(resolve.productos, "products");
  });


  printFilter


printLayout(); //IMPRIME EL NAVBAR
printLinks(); //IMPRIME EL REDES SOCIALES

printFooter(); //IMPRIME EL EL PIE DE PAGINA
//IMPRIME LOS PRODUCTOS,TOMANDO EN CUENTA EL ARRAY DE PRODUCTOS Y LA SECCION PRODUCTOS

const searchSelector = document.querySelector("#search"); //SELECCIONA EL INPUT QUE TIENE EL ID SEARCH

searchSelector.addEventListener("keyup", printFilter); //AÑADE UN EVENTO DE ESCUCHA ,QUE HACE QUE CON CADA KEYUP TRAIGA A PRINT FILTER

isOnline(false);
const getStateValue = JSON.parse(localStorage.getItem("usuario")) || [];
isOnline(getStateValue.state, getStateValue.nombre);
