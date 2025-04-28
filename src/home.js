import myImage from './images/food1.png';
import imgFood1 from './images/food1.jpg';
import imgFood2 from './images/food2.jpg';
import imgFood3 from './images/food3.jpg';
import imgFood4 from './images/food4.jpg';
import imgFood5 from './images/food5.jpg';
import imgEnvironment from './images/environment.jpg'

function createHeroSection() {
    const hero = document.createElement("div")
    const heroText = document.createElement("h1")

    hero.className = "hero";
    heroText.className = "hero-text"
    heroText.textContent = "Authentic Algerian Cuisine."

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
    const menus = ['Couscous','Chakhchoukha','Mhajeb','Rechta'];
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

function createEnvironmentSection() {
    const container = document.createElement("div")
    const headerText = document.createElement("h1")
    const paraText = document.createElement("p")
    const image = document.createElement("img");
    
    container.className = "environment";
    headerText.className = "header";
    paraText.className = "text";
    image.className = "img-environment" 

    image.src = imgEnvironment;
    image.alt = 'Image of restaurant';

    headerText.textContent = "Our Environment"
    paraText.textContent = "Dar El Yasmine offers a stunning ambience, blending elegant decor with a warm and inviting atmosphere. With soft lighting, stylish interiors, and thoughtful details, it's the perfect setting for an unforgettable dining experience"

    container.append(headerText, paraText, image)

    return container
}

function createNewItemSection() {
    const container = document.createElement("div")
    const newItemContainer = document.createElement("div")
    const headerText = document.createElement("h1")
    const newItemContent = [
        {items: [
            {header: 'Merguez', text: 'Spicy lamb or beef sausages, full of rich North African spices like cumin, paprika, and harissa.'},
            {header: 'Chorba', text: 'A light tomato-based soup made with lamb or chicken, vermicelli (or small pasta), chickpeas, and fresh herbs like cilantro.'}
        ]}, 
        {image: imgFood5},
        {items: [
            {header: 'Makroud', text: `A semolina pastry stuffed with dates or almonds, shaped into diamonds, and fried or baked.`},
            {header: 'Dolma', text: 'Vegetables like peppers, zucchini, or cabbage leaves stuffed with minced meat and rice, cooked in a flavorful tomato sauce.'}
        ]}
    ]

    container.className = "new-items"
    newItemContainer.className = "items-container"
    headerText.textContent = "Explore Our Newest Items"
    
    container.appendChild(headerText)

    newItemContent.forEach(item => {
        const newItemSection = document.createElement("div")
        newItemSection.className = "section"

        if (item.items) {
            item.items.forEach(content => {
            const itemContent = document.createElement("div")
            const contentHeader = document.createElement("h2")
            const contentText = document.createElement("p")

            itemContent.className = "item-content"
            contentHeader.textContent = content.header
            contentText.textContent = content.text

            itemContent.append(contentHeader, contentText)
            newItemSection.append(itemContent)
        })
    }

        if (item.image) {
            const imgElement = document.createElement("img")
            imgElement.src = item.image
            imgElement.className = "new-item-img"
            imgElement.alt = "Delicious Algerian Dish"
            newItemSection.appendChild(imgElement)
        }   

        newItemContainer.appendChild(newItemSection);

    })

    container.append(newItemContainer)
    return container

}

function createFooter() {
    const section = document.createElement("div")
    const rights = document.createElement('div')
    const socials = document.createElement('div')
    const text = document.createElement('p')
    const socialsEmail = document.createElement('a')

    text.innerHTML = "&copy; 2025 Dar El Yasmine"
    socialsEmail.textContent = "reservations@deyrestaurant.com"

    section.className = "footer";
    rights.className = "copyright";
    socials.className = "socials";

    rights.append(text)
    socials.append(socialsEmail)
    section.append(rights, socials)

    return section
}

function changeActivePage() {
    const allNav = document.querySelectorAll(".nav")
    const selectedNav = document.querySelector("#home")

    allNav.forEach(nav => {
        nav.className = "nav"
    })
    selectedNav.classList.add("active")
}

function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML= ""

    const heroSection = createHeroSection();
    const secondSection = createSecondSection();
    const thirdSection = createMenuSection();
    const environmentSection = createEnvironmentSection()
    const newItemSection = createNewItemSection();
    const fourthSection = createBookingSection();
    const footerSection = createFooter();

    content.append(heroSection, secondSection, thirdSection, environmentSection, newItemSection, fourthSection, footerSection);

    changeActivePage()

    // return content;
}

export { loadHome }