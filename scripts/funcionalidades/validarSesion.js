export default function iniciarSesion() {
  let user2 = {};
  document.querySelector("#email").addEventListener("input", (event) => {
    user2.email = event.target.value.toLowerCase();
  });
  document.querySelector("#password").addEventListener("input", (event) => {
    user2.password = event.target.value.toLowerCase();
  });
  const getUser = JSON.parse(localStorage.getItem("usuario"));
  console.log(getUser);
  const button = document.querySelector("button");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (getUser.email === user2.email && getUser.password === user2.password) {
      getUser.state = true;
      localStorage.setItem("usuario", JSON.stringify(getUser));  // Guardar cambios en localStorage
      alert("Datos ingresados correctamente");
      return window.location.href = 'index.html';
    } else {
      alert("Datos incorrectos");
      getUser.state = false;
      localStorage.setItem("usuario", JSON.stringify(getUser));  // Guardar cambios en localStorage
    }
  });
}

