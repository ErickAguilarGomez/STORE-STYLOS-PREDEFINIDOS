// EL ELEMENTO QUE SE LE INSERTE ,TOMARA SU SRC ,Y LUEGO ESTE MISMO LO PONDRA COMO SRC DE LA IMAGEN PRINCIPAL 
function changeImage(event) {
    const src = event.target.src;
    const bigImage = document.querySelector("#big-img");
    bigImage.src = src;
    console.log(bigImage.src+"hola desde changeimage");
}






