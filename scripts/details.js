import printLayout from "./funcionalidades/printLayout.js";
import options from "./funcionalidades/options.js";
import printLinks from "./funcionalidades/printLinks.js";
import prinDetails from "./funcionalidades/printDetails.js";
import printFooter from "./funcionalidades/printFooter.js";
import ChangeImage from "./funcionalidades/ChangeImage.js";
import precioTotal from "./funcionalidades/prinTotal.js";
import addCart from "./funcionalidades/addCart.js";
import isOnline from "./funcionalidades/isOnline.js";
import logoutUser from "./funcionalidades/isOnline.js";
import printProducts from "./funcionalidades/printProducts.js";

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

// Obtiene el valor del parámetro "id"


function runFunctions() {
  printLayout(); // IMPRIME EL NAVBAR
  printLinks(); // IMPRIME LAS REDES SOCIALES
  printFooter(); // IMPRIME EL PIE DE PÁGINA


  var parametrosURL = new URLSearchParams(window.location.search); // LOCALIZA LA URL
  var valorID = parametrosURL.get("id"); 
  prinDetails(valorID); // AL HACER CLICK EN ALGÚN PRODUCTO TE REDIRIGE A LA PÁGINA DE ESE PRODUCTO, DEPENDIENDO DEL ID

  const littleImgs = document.querySelectorAll(".mini-img"); // SELECCIONA TODOS LOS NODOS QUE TENGAN MINI-IMAGE
  littleImgs.forEach((img) => {
    img.addEventListener("click", ChangeImage);
  }); // A CADA ELEMENTO EN HTML LE AÑADE UN EVENTO


  precioTotal(valorID);
  
  const addcarrito = document.querySelector(".cart-btn");
  addcarrito.addEventListener("click", () => { addCart(valorID, products)});

  const Onsale = products.filter((product) => product.onsale === true);
  printProducts(Onsale, "product-container");

  isOnline(false);
  const getStateValue = JSON.parse(localStorage.getItem("usuario")) || [];
  isOnline(getStateValue.state, getStateValue.nombre);
}

// Llama a la función para cargar los productos y luego ejecutar las demás funciones
fetchProducts();

