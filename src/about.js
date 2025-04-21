function createHeadingSection() {
    const headingContainer = document.createElement("div")
    const headingText = document.createElement("h1")

    headingContainer.className = "heading";
    headingText.className = "heading-text";


    headingText.textContent = "About Us"
    headingContainer.append(headingText)

    return headingContainer;
}

function createAboutContent() {
    const content = [
        {
            section: 'Our Story',
            text: 'Founded in 2018, Savory Roots began with a simple mission: bring people together through comforting, soulful food. What started as a family kitchen project turned into a full-fledged restaurant driven by passion, tradition, and a love for shared meals. Today, we’re proud to serve our community with dishes inspired by generations of home cooking and global flavors.'
        },
        {
            section: 'Meet the Team',
            text: 'Get to know the people behind the food.',
            members: [
                {name: 'Marco Rivera', role: 'Executive Chef'},
                {name: 'Sofia Lin', role: 'Co-Founder & General Manager'},
                {name: 'Eli Thompson', role: 'Head Barista & Beverage'},
                {name: 'Tina Gomez', role: 'Pastry Chef'}
            ]
        }
    ]

    return content;
}

function createAboutSection() {
    const aboutContainer = document.createElement("div")
    const aboutContent = createAboutContent()

    aboutContainer.className = "about-container"

    aboutContent.forEach(about => {
        const menuTypeContainer = document.createElement("div")
        const menuTypeText = document.createElement("h1")
        const foodsContainer = document.createElement("div")

        menuTypeContainer.className = "menu-type-container"
        foodsContainer.className = "foods-container"
        menuTypeText.textContent = menu.menuType;
        menuTypeContainer.append(menuTypeText, foodsContainer)

        menu.foods.forEach(food => {
            const foodContainer = document.createElement("div")
            const foodName = document.createElement("h2")
            const foodDescription = document.createElement("p")
            const foodPrice = document.createElement("h3")

            foodDescription.className = "food-desc"
            foodPrice.className = "food-price"

            foodContainer.className = "food"
            foodName.textContent = food.foodName;
            foodDescription.textContent = food.description;
            foodPrice.textContent = food.price;

            foodContainer.append(foodName, foodDescription, foodPrice)
            foodsContainer.append(foodContainer);
        })

        menuContainer.append(menuTypeContainer);

    })

    return menuContainer;
}

function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML= ""

    const headingSection = createHeadingSection();
    const menuSection = createMenuSection();

    content.append(headingSection, menuSection);

    // return content;
}

export { loadMenu }