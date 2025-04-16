function createMenu() {
    const home = document.createElement("div")
    const heroText = document.createElement("h1")

    heroText.textContent = "Orokidd arasaka restaurant"

    home.appendChild(heroText);

    return home;
}

export { createMenu }