import productos from "../productos/productos.json"

class Product {
  constructor(id, title, description, price, stock, images, colors, onsale) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.colors = colors;
    this.onsale = onsale;
  }
}


console.log(productos)

/* const listProducts=JSON.parse(products)



.sort((a, b) => a.title.localeCompare(b.title));

  console.log(JSON.stringify(products)) */


