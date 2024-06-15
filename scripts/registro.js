import guardarRegistro from "./funcionalidades/guardarRegistro.js"



function registro() {
  const container = document.querySelector(`.container`);
  let template = ` <h1>Registro</h1>
 <form action="/submit_registro" method="post">
     <label for="nombre">Nombre:</label>
     <input type="text" id="nombre" name="nombre" required>
     
     <label for="email">Correo Electrónico:</label>
     <input type="email" id="email" name="email" minlength="15" required>
     
     <label for="password">Contraseña:</label>
     <input type="password" id="password" name="password" minlength="4" required>
     
     <button type="submit">Registrarse</button>
 </form>
 <p class="link">¿Ya tienes una cuenta? <a href="login.html">Inicia sesión</a></p>`;

  container.innerHTML = template;
}
registro();
guardarRegistro();
