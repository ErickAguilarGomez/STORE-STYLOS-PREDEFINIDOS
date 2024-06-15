export default function guardarRegistro() {
  let user = {};
  document.querySelector("#nombre").addEventListener("input", (event) => {
    user.nombre = event.target.value.toLowerCase();
    console.log(user);
  });
  document.querySelector("#email").addEventListener("input", (event) => {
    user.email = event.target.value.toLowerCase();
    console.log(user);
  });
  document.querySelector("#password").addEventListener("input", (event) => {
    user.password = event.target.value.toLowerCase();
    console.log(user);
  });

  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const getUser = JSON.parse(localStorage.getItem("usuario"));

    if(getUser){
     
      if(user.email==getUser.email ||user.nombre==getUser.nombre){
       return  alert("Usuario ya existente")
      }

    }
    alert("usuario creado exitosamente")
    document.querySelector("#nombre").value=``
    document.querySelector("#email").value=``
    document.querySelector("#password").value=``



    return localStorage.setItem("usuario",JSON.stringify(user))
  });
}
