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

export { menuButtonListener, closeMenuButtonListener, closeMobileMenu}