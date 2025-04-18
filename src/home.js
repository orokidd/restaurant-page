import myImage from './images/food1.png';
import imgFood1 from './images/food1.jpg';
import imgFood2 from './images/food2.jpg';
import imgFood3 from './images/food3.jpg';
import imgFood4 from './images/food4.jpg';

function createHeroSection() {
    const hero = document.createElement("div")
    const heroText = document.createElement("h1")

    hero.className = "hero";
    heroText.className = "hero-text"
    heroText.textContent = "Culinique."

    hero.appendChild(heroText);

    return hero;
}

function createSecondSection() {
    const section = document.createElement("div")
    const textContent = document.createElement("div")
    const imageContent = document.createElement("div")
    const img = document.createElement("img");
    const headerText = document.createElement("h1")
    const paraText = document.createElement("p")
    const button = document.createElement("button")

    img.src = myImage;
    img.alt = 'Image of food';

    section.className = "second";
    img.className = "img-food" 
    textContent.className = "text-content";
    imageContent.className = "image-content";
    headerText.className = "header";
    paraText.className = "text";
    button.className = "second-button"

    button.textContent = "Learn More"
    headerText.textContent = "A healthier way now has a seat at the table"
    paraText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mauris ligula. Vestibulum sed mi in odio tempus mollis ut vitae est."

    imageContent.append(img)
    textContent.append(headerText, paraText, button)
    section.append(textContent, imageContent);

    return section;
}

function createMenuSection() {
    const section = document.createElement("div")
    const headerText = document.createElement("h1")
    const menuList = document.createElement("ul")
    const menus = ['Ayam Bakar','Nasi Goreng','Gado-gado','Soto Makassar'];
    const imgFoods = [imgFood1, imgFood2, imgFood3, imgFood4];

    section.className = "menu";
    headerText.className = "header";
    menuList.className = "menu-list";

    headerText.textContent = "Have a peak at our menu!"
    menus.forEach((food, index) => {
        const list = document.createElement('li');
        const img = document.createElement('img');
        const text = document.createElement('p')

        img.src = imgFoods[index];;
        text.textContent = food;
        list.append(img, text);
        menuList.append(list);
    })

    section.append(headerText, menuList);

    return section;
}

function createBookingSection() {
    const section = document.createElement("div")
    const headerText = document.createElement("h1")
    const paraText = document.createElement("p")
    const bookButton = document.createElement("button")

    section.className = "booking";
    headerText.className = "header";
    paraText.className = "text";
    bookButton.className = "book-button"

    headerText.textContent = "Don't Wait - Book Now!"
    paraText.textContent = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    bookButton.textContent = "Book a Table"

    section.append(headerText, paraText, bookButton);

    return section;
}

function createFooter() {
    const section = document.createElement("div")
    const rights = document.createElement('div')
    const socials = document.createElement('div')
    const text = document.createElement('p')
    const socialsInsta = document.createElement('a')
    const socialsFb = document.createElement('a')
    const socialsTwt = document.createElement('a')

    text.innerHTML = "&copy;2025 Culinique. All rights reserved."
    socialsInsta.textContent = "Instagram"
    socialsFb.textContent = "Facebook"
    socialsTwt.textContent = "Twitter"

    section.className = "footer";
    rights.className = "copyright";
    socials.className = "socials";

    rights.append(text)
    socials.append(socialsInsta, socialsFb, socialsTwt)
    section.append(rights, socials)

    return section
}

function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML= ""

    const heroSection = createHeroSection();
    const secondSection = createSecondSection();
    const thirdSection = createMenuSection();
    const fourthSection = createBookingSection();
    const footerSection = createFooter();

    content.append(heroSection, secondSection, thirdSection, fourthSection, footerSection);

    // return content;
}

export { loadHome }