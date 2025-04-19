function createHeadingSection() {
    const headingContainer = document.createElement("div")
    const headingText = document.createElement("h1")
    const headingPara = document.createElement("h1")

    headingContainer.className = "heading";
    headingText.className = "heading-text";
    headingPara.className = "heading-para"


    headingText.textContent = "Our Menu"
    headingPara.textContent = "Discover our carefully crafted dishes, made with the finest ingredients and prepared with passion by our expert chefs."
    headingContainer.append(headingText)

    return headingContainer;
}

function createMenus() {
    const menus = [
        {
            menuType: 'Appetizers',
            foods: [
                {foodName: 'Garlic Parmesan Fries', description: 'Crispy golden fries tossed with fresh garlic, grated Parmesan cheese, and a touch of parsley. Served with a side of creamy aioli for dipping.', price: '$6.99'},
                {foodName: 'Crispy Veggie Spring Rolls', description: 'A crunchy mix of cabbage, carrots, and glass noodles wrapped in a thin pastry and fried to perfection. Served with sweet chili dipping sauce.', price: '$5.49'},
                {foodName: 'Spicy Chicken Bites', description: 'Tender chunks of chicken breast marinated in spicy seasoning, flash-fried until crispy, and drizzled with house-made buffalo sauce. Comes with ranch or blue cheese.', price: '$7.99'}
            ]
        }, 
        {
            menuType: 'Main Courses',
            foods: [
                {foodName: 'Creamy Tuscan Chicken Pasta', description: 'Grilled chicken breast tossed with fettuccine in a rich garlic cream sauce, blended with sun-dried tomatoes, spinach, and Parmesan cheese.', price: '$13.99'},
                {foodName: 'Herb-Crusted Ribeye Steak', description: 'A juicy 10oz ribeye steak seasoned with rosemary and thyme, grilled to your liking, and served with garlic mashed potatoes and steamed vegetables.', price: '$19.99'},
                {foodName: 'Spiced Chickpea Curry', description: 'A hearty bowl of chickpeas simmered in a fragrant tomato-coconut curry sauce. Served with steamed basmati rice and warm naan bread.', price: '$11.49'}
            ]
        },
        {
            menuType: 'Desserts',
            foods: [
                {foodName: 'Classic New York Cheesecake', description: 'Smooth and creamy cheesecake with a graham cracker crust, topped with your choice of strawberry compote or caramel drizzle.', price: '$6.49'},
                {foodName: 'Molten Chocolate Lava Cake', description: 'Rich chocolate cake with a gooey molten center, served warm with a scoop of vanilla bean ice cream and a dusting of powdered sugar.', price: '$6.99'},
                {foodName: 'Vanilla Bean Sundae', description: 'Two scoops of vanilla bean ice cream topped with hot fudge, whipped cream, chopped nuts, and a maraschino cherry.', price: '$4.99'}
            ]
        }
    ]

    return menus;
}

function createMenuSection() {
    const menuContainer = document.createElement("div")
    const menus = createMenus()

    menuContainer.className = "menu-container"

    menus.forEach(menu => {
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
            const foodPrice = document.createElement("p")

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