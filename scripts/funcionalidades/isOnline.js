function isOnline(booleano, nombre) {
  const carrito = document.getElementById("cart"); // Este es un li con una imagen
  const micuenta = document.getElementById("micuenta");
  let loginContainer = document.querySelector("#login");
  let accountContainer = document.querySelector(".micuenta-usuario");
  let registerContainer = document.querySelector("#register");
  let logout = document.querySelector("#logout");

  if (booleano) {
    carrito.style.display = "flex"; // Oculta el carrito
    micuenta.style.display = `flex`;
    logout.style.display = `flex`;

    accountContainer.textContent = `Usuario:${nombre}`;
    loginContainer.style.display = `none`;
    registerContainer.style.display = `none`;
    logoutUser()
  } else {
    carrito.style.display = "none"; // Muestra el carrito
    loginContainer.style.display = `flex`;
    registerContainer.style.display = `flex`;
    micuenta.style.display = `none`;
    logout.style.display = `none`;
  }

 
}

//AL DAR CLICK EN LA IMAGEN DE SALIDA,CAMBIA EL getuser.state a false

function logoutUser(){
    const logoutImg = document.querySelector("#logout");

    logoutImg.addEventListener("click", () => {
      const getUser = JSON.parse(localStorage.getItem("usuario"));
      getUser.state = false;
      localStorage.setItem("usuario", JSON.stringify(getUser)); // Guardar cambios en localStorage
      alert("usuario desconectado correctamente");
    });
}

// Ejemplo de uso:
// isOnline(true); // Para mostrar el carrito
// isOnline(false); // Para ocultar el carrito
