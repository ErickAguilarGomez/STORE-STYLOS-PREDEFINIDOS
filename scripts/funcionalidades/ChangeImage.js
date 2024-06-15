// EL ELEMENTO QUE SE LE INSERTE ,TOMARA SU SRC ,Y LUEGO ESTE MISMO LO PONDRA COMO SRC DE LA IMAGEN PRINCIPAL 
export default function changeImage(event) {
    const src = event.target.src;
    const bigImage = document.querySelector("#big-img");
    bigImage.src = src;
}






