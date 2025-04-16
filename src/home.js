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

function createMenuSection() {
    const section = document.createElement("div")
    const headerText = document.createElement("h1")
    const menuList = document.createElement("ul")
    const menus = ['Ayam Bakar','Nasi Goreng','Gado-gado','Soto Makassar'];

    headerText.textContent = "Peak at our menu!"
    menus.forEach((menu) => {
        const list = document.createElement('li');
        list.textContent = menu;
        menuList.appendChild(list);
    })

    section.append(headerText, menuList);

    return section;
}

function createBookingSection() {
    const section = document.createElement("div")
    const headerText = document.createElement("h1")
    const paraText = document.createElement("p")
    const bookButton = document.createElement("button")

    headerText.textContent = "Don't Wait - Book Now!"
    paraText.textContent = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    bookButton.textContent = "Book a Table"

    section.append(headerText, paraText, bookButton);

    return section;
}

function loadHome() {
    const content = document.createElement("div");

    const heroSection = createHeroSection();
    const secondSection = createSecondSection();
    const thirdSection = createMenuSection();
    const fourthSection = createBookingSection();

    content.append(heroSection, secondSection, thirdSection, fourthSection);

    return content;
}

export { loadHome }