function removerProducto(){
const tachoSelector = document.querySelectorAll(".tacho");
tachoSelector.forEach(item => {
    item.addEventListener("click", () => {
        const grandparent = item.parentElement.parentElement;
        let index=[...grandparent.parentElement.children].indexOf(grandparent)
        let itemsDeLs=JSON.parse(localStorage.getItem("cart"))||[]
        let removerItems=itemsDeLs.splice(index,1)[0]

        let reasignarLs=localStorage.setItem("cart",JSON.stringify(itemsDeLs))
        grandparent.remove()

        console.log(itemsDeLs)
        console.log(removerItems)
        console.log(itemsDeLs.splice(index,1))

    });
});
}