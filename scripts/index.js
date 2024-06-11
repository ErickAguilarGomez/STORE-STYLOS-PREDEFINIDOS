printLayout() //IMPRIME EL NAVBAR
printLinks() //IMPRIME EL REDES SOCIALES 
printFooter()//IMPRIME EL EL PIE DE PAGINA
printProducts(products,"products") //IMPRIME LOS PRODUCTOS,TOMANDO EN CUENTA EL ARRAY DE PRODUCTOS Y LA SECCION PRODUCTOS
const searchSelector = document.querySelector("#search"); //SELECCIONA EL INPUT QUE TIENE EL ID SEARCH
searchSelector.addEventListener("keyup",printFilter); //AÑADE UN EVENTO DE ESCUCHA ,QUE HACE QUE CON CADA KEYUP TRAIGA A PRINT FILTER