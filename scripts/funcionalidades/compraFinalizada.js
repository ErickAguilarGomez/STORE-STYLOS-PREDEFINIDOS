function compraFinalizada() {
    const btnComprar = document.querySelector("#btn-pagar");
    btnComprar.addEventListener("click", ()=> {
        localStorage.clear();
        alert("Gracias por su compra");
        location.reload()
    });
}


