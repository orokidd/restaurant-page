import "./styles.css"
import { loadHome } from "./home";

(function app() {
    const content = document.querySelector('#content');
    const navs = document.querySelectorAll('.nav');
    content.appendChild(loadHome());

    navs.forEach((nav) => {
        nav.addEventListener('click', () => handleNavClick(nav))
    })

})();

function handleNavClick(nav) {
    if (nav.classList.contains("home")) {
        loadHome();
    }
    if (nav.classList.contains("menu")) {
        loadMenu();
    }
    if (nav.classList.contains("about")) {
        loadAbout();
    }
}

