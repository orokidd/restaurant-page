import imgCrew1 from './images/crew2.jpg';
import imgCrew2 from './images/crew6.jpg';
import imgCrew3 from './images/crew3.jpg';
import imgCrew4 from './images/crew5.jpg';
import imgCrew5 from './images/crew8.jpg';
import farm1 from './images/farm1.jpg';

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
            text:   `       
                    At Dar El Yasmine, our story begins in a small kitchen in Algiers, where family recipes were passed down like treasured heirlooms. The scent of cumin, coriander, and freshly baked khobz always meant one thing — you were home.
                    <br><br>
                    We honor our roots by sourcing fresh, local ingredients and crafting meals with the same care as our mothers and grandmothers once did. Every plate tells a story — of the Sahara winds, mountain herbs, and coastal harvests that shaped a nation’s cuisine.
                    <br><br>
                    `
        },
        {
            section: 'Meet the Team',
            class: 'members',
            text: 'Get to know the people behind the food.',
            members: [
                {name: 'Nadir Benali', role: 'Executive Chef', photo: imgCrew1},
                {name: 'Sofia Azzahra', role: 'Co-Founder & General Manager', photo: imgCrew2},
                {name: 'Eli Thompson', role: 'Head Barista & Beverage', photo: imgCrew3},
                {name: 'Tina Gomez', role: 'Pastry Chef', photo: imgCrew4}
            ]
        },
        {
            section: 'Commitment to Our Community',
            class: 'commitment',
            text: `At Dar El Yasmine, sustainability and community are givens that are inextricably intertwined. “They are an integral part of what we do in our daily lives,” says Chef Nadir.
                    <br><br>
                    Dar El Yasmine all-electric kitchen that avoids using fossil fuels will eventually draw on power generated from renewable energy like solar panels on the roof. For dishes that require grilling, the restaurant uses wood and its own charcoal.
                    <br><br>
                    Chef Nadir is also very aware of the importance of supporting locals and embracing the local community at large. The new Dar El Yasmine introduces and uses artisanal products throughout the guest experience from the lounge chairs to the tiles used to the artwork decorating its walls, Dar El Yasmine highlights community crafted products in the same way that it has spotlighted Thai ingredients.
                    “Where we grow, they will grow, that is the best way I can help them.”
                    <br><br>
                    Whether it is supporting fishermen who fish sustainably or giving a boost to a young cacao farmer by guiding him crafting his produce, the restaurant’s experience helps artisans produce more and better products, doing what the restaurant can to take care of the whole community. And that includes supporting staff who want to spread their wings.
                    “I want the whole community to benefit from it, not just us.”`
        },
        {
            section: 'An-Nabat Farms',
            class: 'farms',
            text: 'Chef Nadir created what is now the An-Nabat Farms a decade ago to supply the restaurant with local produce that he was not able to find elsewhere. Built over a reclaimed tin mine, once Algeria’s main economic activity, the farm is a model of sustainability where an industrial site was converted into a pastoral green space. An-Nabat Farms gets its name from the local village it is located within, growing ingredients used by Dar El Yasmine, its sister restaurant JAMPA located next to the farm and TRISARA’s other food outlets. These days Chef Nadir calls the farm a laboratory where he can experiment with new produce for his menu.',
            image: farm1
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
        sectionText.innerHTML = about.text

        sectionContainer.append(sectionHeading, sectionText)

        if (about.members) { // for the member section with images
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

function loadAbout() {
    const content = document.querySelector('#content');
    content.innerHTML= ""

    const headingSection = createHeadingSection();
    const aboutSection = createAboutSection();

    content.append(headingSection, aboutSection);

    // return content;
}

export { loadAbout }
