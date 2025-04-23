import imgCrew1 from './images/crew2.jpg';
import imgCrew2 from './images/crew6.jpg';
import imgCrew3 from './images/crew3.jpg';
import imgCrew4 from './images/crew5.jpg';

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

function loadAbout() {
    const content = document.querySelector('#content');
    content.innerHTML= ""

    const headingSection = createHeadingSection();
    const aboutSection = createAboutSection();

    content.append(headingSection, aboutSection);

    // return content;
}

export { loadAbout }