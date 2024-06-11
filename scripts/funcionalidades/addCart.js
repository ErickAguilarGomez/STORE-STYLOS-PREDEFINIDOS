function addCart(){
    const find = products.filter((item) => item.id == valorID);
    
    


    const bigImage = document.querySelector("#big-img");
    const quantity=document.querySelector("input")
    let produc = {
        id: find[0].id,
        title: find[0].title,
        description: find[0].description,
        price: find[0].price,
        images: bigImage.src,
        colors: document.querySelector(".product-select").value,
        quantity:quantity.value,
        subtotal:find[0].price*quantity.value    
    };

    let cart = localStorage.getItem("cart");

    if (cart) {
        let cartArray = JSON.parse(cart);
        cartArray.push(produc);
        localStorage.setItem("cart", JSON.stringify(cartArray));
    } else {
        localStorage.setItem("cart", JSON.stringify([produc]));
    }
}
const btn=document.querySelector(".cart-btn")
btn.addEventListener("click",addCart);





