/* IMPRIME EL NAVBAR ,HACIENDO UN RECORRORIDO DEL OBJETO OPTIONS */
import options from "./options.js";

export default function printLayout() {
  let template = ``;
  const navbar = document.querySelector("#navbar");
  options.forEach((item) => {
    template += ` <li class="nav-li">
        <a class="nav-a" href="${item.linkto} "> ${item.title} </a>
      </li>`;
  });
  navbar.innerHTML = template;
}
