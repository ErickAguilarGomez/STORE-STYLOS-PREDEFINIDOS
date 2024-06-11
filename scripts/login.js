function printLogin(palabra, id) {
  const container = document.querySelector(`.${id}`);
  let template = `<h1>${palabra} </h1>
    <form action="/submit_login" method="post">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" minlength="15" required>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" minlength="4" required>
        <button type="submit">${palabra}</button>
    </form>
    <p class="link"><a href="#">¿Olvidaste tu contraseña?</a></p>
    <p class="link">¿No tienes una cuenta? <a href="registro.html">Regístrate</a></p>`;
  container.innerHTML = template;
}



printLogin("Iniciar Sesion", "container");
iniciarSesion();
