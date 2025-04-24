import imgCrew1 from './images/crew2.jpg';
import imgCrew2 from './images/crew6.jpg';
import imgCrew3 from './images/crew3.jpg';
import imgCrew4 from './images/crew5.jpg';
import imgCrew5 from './images/crew8.jpg';

function createHeadingSection() {
    const headingContainer = document.createElement("div")
    const headingText = document.createElement("h1")

    headingContainer.className = "heading about";
    headingText.className = "heading-text";


    headingText.textContent = "About Us"
    headingContainer.append(headingText)

    return headingContainer;
}

function createAboutContent() {
    const content = [
        {
            section: 'Our Story',
            class: 'story',
            text: 'Founded in 2018, Savory Roots began with a simple mission: bring people together through comforting, soulful food. What started as a family kitchen project turned into a full-fledged restaurant driven by passion, tradition, and a love for shared meals. Today, we’re proud to serve our community with dishes inspired by generations of home cooking and global flavors.'
        },
        {
            section: 'Meet the Team',
            class: 'members',
            text: 'Get to know the people behind the food.',
            members: [
                {name: 'Marco Rivera', role: 'Executive Chef', photo: imgCrew1},
                {name: 'Sofia Azzahra', role: 'Co-Founder & General Manager', photo: imgCrew2},
                {name: 'Eli Thompson', role: 'Head Barista & Beverage', photo: imgCrew3},
                {name: 'Tina Gomez', role: 'Pastry Chef', photo: imgCrew4}
            ]
        }
    ]

    return content;
}

function createAboutSection() {
    const aboutContainer = document.createElement("div")
    const aboutContent = createAboutContent()

    aboutContainer.className = "about-container"

    aboutContent.forEach((about, index) => {
        const sectionContainer = document.createElement('div')
        const sectionHeading = document.createElement('h1')
        const sectionText = document.createElement('p')

        sectionContainer.classList.add('about-section',`${about.class}`);
        
        sectionHeading.textContent = about.section
        sectionText.textContent = about.text

        sectionContainer.append(sectionHeading, sectionText)

        if (about.members) {
            const allMemberContainer = document.createElement('div')
            allMemberContainer.className = "members-container"

            about.members.forEach(member => {
                const memberContainer = document.createElement('div')
                const memberImage = document.createElement('img')
                const memberName = document.createElement('h2')
                const memberRole = document.createElement('p')
    
                memberImage.className = 'crew-image'
                memberContainer.className = 'member'

                memberImage.src = member.photo
                memberName.textContent = member.name
                memberRole.textContent = member.role
    
                memberContainer.append(memberImage, memberName, memberRole)
                allMemberContainer.append(memberContainer)
            })

            sectionContainer.append(allMemberContainer)
        }

        aboutContainer.append(sectionContainer)
    })

    return aboutContainer;
}

function createCommitmentSection() {
    const aboutContainer = document.querySelector(".about-container");
    const commitmentContainer = document.createElement("div")
    const sectionHeading = document.createElement('h1')
    const sectionText = document.createElement('p')

    commitmentContainer.className = "about-section commitment";
        
    sectionHeading.textContent = "Commitment to Our Community"
    sectionText.innerHTML = `
                            At Culinique, sustainability and community are givens that are inextricably intertwined.
                            “They are an integral part of what we do in our daily lives,” says Chef Marco.
                            <br><br>
                            Culinique all-electric kitchen that avoids using fossil fuels will eventually draw on power generated from renewable energy like solar panels on the roof. For dishes that require grilling, the restaurant uses wood and its own charcoal.
                            <br><br>
                            Chef Marco is also very aware of the importance of supporting locals and embracing the local community at large. The new Culinique introduces and uses artisanal products throughout the guest experience from the lounge chairs to the tiles used to the artwork decorating its walls, Culinique highlights community crafted products in the same way that it has spotlighted Thai ingredients.
                            “Where we grow, they will grow, that is the best way I can help them.”
                            <br><br>
                            Whether it is supporting fishermen who fish sustainably or giving a boost to a young cacao farmer by guiding him crafting his produce, the restaurant’s experience helps artisans produce more and better products, doing what the restaurant can to take care of the whole community. And that includes supporting staff who want to spread their wings.
                            “I want the whole community to benefit from it, not just us.”
                            `

    commitmentContainer.append(sectionHeading, sectionText)
    aboutContainer.append(commitmentContainer);
}

function loadAbout() {
    const content = document.querySelector('#content');
    content.innerHTML= ""

    const headingSection = createHeadingSection();
    const aboutSection = createAboutSection();

    content.append(headingSection, aboutSection); // append first because otherwise commitmentSection querySelector won't work
    createCommitmentSection();

    // return content;
}

export { loadAbout }
