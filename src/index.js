import "./styles.css"
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";
import { menuButtonListener, closeMenuButtonListener } from "./mobile"

(function app() {
    loadHome()

    const navs = document.querySelectorAll('.nav');
    navs.forEach((nav) => {
        nav.addEventListener('click', () => handleNavClick(nav))
    })

    menuButtonListener();
    closeMenuButtonListener();
})();

function handleNavClick(nav) {
    if (nav.id === "home" || nav.id === "mobile-home-button") {
        loadHome();
    }
    if (nav.id === "menu" || nav.id === "mobile-menu-button") {
        loadMenu();
    }
    if (nav.id === "about" || nav.id === "mobile-about-button") {
        loadAbout();
    }
}