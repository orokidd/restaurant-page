import { loadHome } from "./home"
import { loadMenu } from "./menu"
import { loadAbout } from "./about"

function menuButtonListener() {
    const menuButton = document.querySelector('#menu-button')

    menuButton.addEventListener("click", menuButtonHandler)
}

function menuButtonHandler() {
    const mobileMenu = document.querySelector('#mobile-menu')

    mobileMenu.style.display = "flex"
}

function closeMenuButtonListener() {
    const closeButton = document.querySelector('#clost-button-icon')

    closeButton.addEventListener("click", closeMobileMenu)
}

function closeMobileMenu() {
    const mobileMenu = document.querySelector('#mobile-menu')

    mobileMenu.style.display = "none"
}

function navbarListener() {
    const navs = document.querySelectorAll('.nav');
    navs.forEach((nav) => {
        nav.addEventListener('click', () => handleNavClick(nav))
    })
}

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

function updateActiveNav(selectedPage) {
    const allNav = document.querySelectorAll(".nav")
    const selectedNav = document.querySelector(selectedPage)

    allNav.forEach(nav => {
        nav.className = "nav"
    })
    selectedNav.classList.add("active")
}

function initNavigation() {
    navbarListener();
    menuButtonListener();
    closeMenuButtonListener();
}

export { initNavigation, closeMobileMenu, updateActiveNav }