/* FILTRA LOS PRODUCTOS,ACORDE AL EVENTO DEL TECLADO,PRIMERO CAPTURA EL VALOR DEL IMPUT ,LUEGO SI EL TITULO DEL PRODUCTO  INCLUYE EL VALOR DEL INPUT CREA UN ARRAY CON LOS PRODUCTOS
QUE CUMPLAN LA CONDICION,LUEGO EN PRINTPRODUCTS ,PASA LOS PRODUCTOS FILTRADOS Y LOS IMPRIME EN EL CUERPO DE LA PAGINA */
function printFilter(event){
    let value = event.target.value;
    let productFilters = products.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    printProducts(productFilters, "products")
}

