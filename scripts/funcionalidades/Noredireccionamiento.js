export default function noRediccionamiento() {
    const productInfo = document.querySelectorAll(".product-info");
  productInfo.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  const checkout = document.querySelectorAll(".checkout-process");
  checkout.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
  }