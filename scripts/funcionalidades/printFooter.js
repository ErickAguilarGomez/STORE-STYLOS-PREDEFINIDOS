/* IMPRIME EL FOOTER */
import options from "./options.js";

export default function printFooter() {
  let template = ``;
  const footer = document.querySelector("#footer");
  options.forEach((item) => {
    template += `<ul class="footer-ul">
       <li class="footer-main-item">
         <a class="footer-a" href="./index.html">${item.title} </a>
       </li>`;
    item.opts.forEach((item) => {
      template += `<li class="footer-li">
        <a class="footer-a" href="./index.html">${item} </a>
      </li>`;
    });
    template += `</ul>`;
  });

  footer.innerHTML = template;
}

/*   `<li class="footer-li">
        <a class="footer-a" href="./index.html">${item} </a>
      </li>`*/
