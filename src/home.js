function createHeroSection() {
    const home = document.createElement("div")
    const heroText = document.createElement("h1")

    heroText.textContent = "Orokidd arasaka restaurant"

    home.appendChild(heroText);

    return home;
}

function createSecondSection() {
    const section = document.createElement("div")
    const headerText = document.createElement("h1")
    const paraText = document.createElement("p")

    headerText.textContent = "A healthier way now has a seat at the table"
    paraText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mauris ligula. Vestibulum sed mi in odio tempus mollis ut vitae est."

    section.append(headerText, paraText);

    return section;
}

function loadHome() {
    const content = document.createElement("div");

    const heroSection = createHeroSection();
    const secondSection = createSecondSection();

    content.append(heroSection, secondSection);

    return content;
}

export { loadHome }