document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            type: 'works',
            title: 'Racerloop',
            description: 'A spaceship multiplayer game available on EPIC STORE.',
            imgSrc: 'Assets/Resources/Images/Gallery-03.jpg',
            imgAlt: 'racerloop'
        },
        {
            type: 'works',
            title: 'Otter\'s Hell',
            description: 'A Roguelite game of otters vs. hamsters.',
            imgSrc: 'Assets/Resources/OttersHell/OHGameplay_Card.png',
            imgAlt: 'ottersHell'
        },
        {
            type: 'personal',
            title: 'Goblin\'s Gold',
            description: 'A clicker game with RPG systems and too much goblins.',
            imgSrc: 'Assets/Resources/GoblinsGold/GoblinClicker_Card.png',
            imgAlt: 'goblin'
        },
    ];

    function createProject(project) {
        return `
            <article class="blog-card">
                <div class="blog-card-img">
                    <img src="${project.imgSrc}" alt="${project.imgAlt}">
                </div>
                <div class="blog-card-content">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                </div>
            </article>
        `;
    }

    function renderProjects() {
        const worksContainer = document.getElementById('works-projects');
        const personalContainer = document.getElementById('personal-projects');

        projects.forEach(project => {
            const projectHTML = createProject(project);
            if (project.type === 'works') {
                worksContainer.innerHTML += projectHTML;
            } else if (project.type === 'personal') {
                personalContainer.innerHTML += projectHTML;
            }
        });
    }

    renderProjects();
});