import "./styles.css"
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

(function app() {
    loadHome()

    const navs = document.querySelectorAll('.nav');
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

